import { customElement, bindable, useView } from 'aurelia-templating';
import {
  BindingEngine,
  Container,
  processContent,
  ViewCompiler,
  ViewResources,
  BehaviorInstruction,
  PLATFORM
} from 'aurelia-framework';
import { inject } from 'aurelia-dependency-injection';
import { UxTabsTheme } from './ux-tabs-theme';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';

function processTabs(compiler: ViewCompiler,
                     resources: ViewResources,
                     node: Element,
                     instruction: BehaviorInstruction) {
  const headerTemplate = document.createElement('template');
  headerTemplate.setAttribute('replace-part', 'tabs');

  const contentTemplate = document.createElement('template');
  contentTemplate.setAttribute('replace-part', 'panels');

  const tabs = Array.from(node.querySelectorAll('ux-tab'));
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    // add header
    const tabButton = document.createElement('div');
    tabButton.classList.add('ux-tab');

    const uxButton = document.createElement('ux-button');
    uxButton.setAttribute('type', 'text');
    uxButton.setAttribute('size', 'medium');
    uxButton.classList.add('ux-tab--button');
    uxButton.setAttribute('click.delegate', `showTab('${i}')`);
    const icon = tab.getAttribute('icon') ?? '';
    if (icon) {
      const uxIcon = document.createElement('ux-icon');
      uxIcon.classList.add('ux-tab--icon');
      uxIcon.setAttribute('icon', icon);
      uxButton.appendChild(uxIcon);
    }

    const label = tab.getAttribute('label') ?? '';
    if (label) {
      const spanLabel = document.createElement('span');
      spanLabel.classList.add('ux-tab--label');
      spanLabel.innerText = label;
      uxButton.appendChild(spanLabel);
    }

    tabButton.appendChild(uxButton);
    headerTemplate.content.appendChild(tabButton);

    node.removeChild(tab);
  }

  const panels = Array.from(node.querySelectorAll('ux-tab-panel'));
  for (let i = 0; i < panels.length; i++) {
    const panel = panels[i];

    // add content
    const content = document.createElement('div');
    content.setAttribute('show.bind', `activeTabId=='${i}'`);
    content.append(...Array.from(panel.childNodes));
    contentTemplate.content.appendChild(content);
    node.removeChild(panel);
  }

  // Activate the first tab
  const bindingEngine = Container.instance.get(BindingEngine);
  instruction.attributes = {
    ...instruction.attributes,
    'active-tab-id': bindingEngine.createBindingExpression('activeTabId', '\'0\'')
  };

  node.append(headerTemplate, contentTemplate);
  return true;
}

@inject(Element, StyleEngine)
@processContent(processTabs)
@customElement('ux-tabs')
@useView(PLATFORM.moduleName('./ux-tabs.html'))
export class UxTabs implements UxComponent {
  @bindable public activeTabId: string = '';
  @bindable public theme: UxTabsTheme;

  constructor(
    public element: HTMLElement,
    private styleEngine: StyleEngine) {
    }

  public bind() {
    this.themeChanged(this.theme);
  }

  public themeChanged(newValue: any) {
      if (newValue != null && newValue.themeKey == null) {
          newValue.themeKey = 'tab';
      }

      this.styleEngine.applyTheme(newValue, this.element);
  }

  public showTab(tabId: string) {
    this.activeTabId = tabId;
  }
}
