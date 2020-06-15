import {
  customElement,
  bindable,
  useView,
  PLATFORM,
  processContent,
  ViewCompiler,
  ViewResources,
  BehaviorInstruction,
  inject,
  Optional,
  Container,
  ViewFactory,
  TaskQueue
} from 'aurelia-framework';
import { ITab } from './i-tab';
import { UxComponent, StyleEngine } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { UxDefaultTabsConfiguration } from './ux-default-tabs-configuration';

let id = 0;
const templateLookup: Record<string, string> = {};
const getNextNodeTemplateId = () => ++id;

@inject(
  Element,
  TaskQueue,
  StyleEngine,
  UxDefaultTabsConfiguration,
  Container,
)
@customElement('ux-tabs')
@useView(PLATFORM.moduleName('./ux-tabs.html'))
@processContent(UxTabs.processContent)
export class UxTabs implements UxComponent {

  static TAB_SELECTED_EVENT = 'tab-selected';

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element, _instruction: BehaviorInstruction) {
    const tab = element.querySelector('ux-tab');
    if (tab) {
      const nodeTemplateId = getNextNodeTemplateId();
      element.setAttribute('data-template-id', nodeTemplateId.toString());
      templateLookup[nodeTemplateId] = tab.innerHTML;
    }
    element.innerHTML = '';
    return false;
  }

  /**
   * @param element the host element of a <ux-tabs/>
   * @param container the container associated with a <ux-tabs/>
   */
  private static getTabFactory(element: Element, container: Container): ViewFactory {
    const parent = container.parent ? container.parent.get(Optional.of(UxTabs)) : null;
    const isRoot = !parent;
    // a root ux-tab means a consumer defined one
    // this potentially contains the template for the tab
    if (isRoot) {
      const nodeTemplateId = element.getAttribute('data-template-id');
      if (nodeTemplateId && templateLookup[nodeTemplateId]) {
        const nodeTemplate = templateLookup[nodeTemplateId];
        const nodeViewFactory = container.get(ViewCompiler)
        .compile(`<template>${nodeTemplate}</template>`, container.get(ViewResources));
        return nodeViewFactory;
      } else {
        // create a default <ux-tree-node/> factory
        return container.get(ViewCompiler).compile('<template>${$node}</template>', container.get(ViewResources));
      }
    } else {
      // if it's not a root <ux-tabs/>
      // assume that the parent has already built the node factory and simply get it from there
      return parent.nodeViewFactory;
    }
  }

  constructor(
    private element: HTMLElement,
    // private taskQueue: TaskQueue,
    private styleEngine: StyleEngine,
    defaultConfiguration: UxDefaultTabsConfiguration,
    container: Container,
  ) {
    if (defaultConfiguration.theme) {
      this.theme = defaultConfiguration.theme;
    }
    this.tabViewFactory = UxTabs.getTabFactory(element, container);
  }

  tabViewFactory: ViewFactory;
  selectedTab: ITab;

  @bindable
  tabs: ITab[];

  @bindable
  public theme: UxTabsTheme;
  public themeChanged(newValue: UxTabsTheme) {
    if (newValue !== null && !newValue.themeKey) {
      newValue.themeKey = 'tabs';
    }

    this.styleEngine.applyTheme(newValue, this.element);
  }

  tabClicked(t: ITab) {
    if (this.selectedTab) {
      this.selectedTab.selected = false;
    }
    t.selected = true;
    this.selectedTab = t;
    this.element.dispatchEvent(new CustomEvent(
      UxTabs.TAB_SELECTED_EVENT,
      { detail: { tab: t }, bubbles: true })
    );
    return true;
  }

  dispatchEvent(type: string, node: ITab) {
    this.element.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { node } }));
  }
}
