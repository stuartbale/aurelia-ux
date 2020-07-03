import { customElement, bindable, useView, children, ViewResources } from 'aurelia-templating';
import { PLATFORM, Disposable, BindingEngine } from 'aurelia-framework';
import { inject } from 'aurelia-dependency-injection';
import { UxTabsTheme } from './ux-tabs-theme';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabList } from './ux-tab-list';
import { UxTabPanel } from './ux-tab-panel';

@inject(Element, ViewResources, StyleEngine, BindingEngine)
@customElement('ux-tabs')
@useView(PLATFORM.moduleName('./ux-tabs.html'))
export class UxTabs implements UxComponent {
  @bindable public theme: UxTabsTheme;
  @children('ux-tab-list') public tabLists: UxTabList[];
  @children('ux-tab-panel') public tabPanels: UxTabPanel[];
  private subscription: Disposable;
  private tabList: UxTabList;

  constructor(
    private readonly element: HTMLElement,
    public readonly resources: ViewResources,
    private readonly styleEngine: StyleEngine,
    private readonly bindingEngine: BindingEngine) { }

  public bind() {
    this.themeChanged(this.theme);
  }

  public unbind() {
    this.subscription?.dispose();
  }

  public themeChanged(newValue: any) {
    if (newValue != null && newValue.themeKey == null) {
      newValue.themeKey = 'tab';
    }

    this.styleEngine.applyTheme(newValue, this.element);
  }

  public tabPanelsChanged() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.tabPanels?.forEach(tabPanel => { tabPanel.visible = tabPanel.id === this.tabList?.activePanelId; });
  }

  public tabListsChanged() {
    this.tabList = this.tabLists?.[0];
    this.subscription = this.bindingEngine
      .propertyObserver(this.tabList, 'activePanelId')
      // tslint:disable-next-line:variable-name
      .subscribe((newValue, _oldValue) => {
        // tslint:disable-next-line:no-debugger
        // debugger;
        this.tabPanels?.forEach(tabPanel => { tabPanel.visible = tabPanel.id === newValue; });
      });
  }
}
