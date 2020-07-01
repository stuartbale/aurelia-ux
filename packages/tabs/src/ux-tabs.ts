import { customElement, bindable, useView } from 'aurelia-templating';
import { PLATFORM } from 'aurelia-framework';
import { inject } from 'aurelia-dependency-injection';
import { UxTabsTheme } from './ux-tabs-theme';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';

@inject(Element, StyleEngine)
@customElement('ux-tabs')
@useView(PLATFORM.moduleName('./ux-tabs.html'))
export class UxTabs implements UxComponent {
  @bindable public activeTabId: string = '';
  @bindable public theme: UxTabsTheme;
  @bindable public focusOnActivate: boolean = true;
  @bindable public useAutomaticActivation: boolean = true;

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

  public activateTab(tabId: string) {
    this.activeTabId = tabId;
  }

  public scrollIntoView(tabId: string) {
    // TODO: Scroll the tab into view.
  }
}
