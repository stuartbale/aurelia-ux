import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM, children } from 'aurelia-framework';
import { UxTab } from './ux-tab';

@inject(Element, StyleEngine)
@customElement('ux-tabs')
@useView(PLATFORM.moduleName('./ux-tabs.html'))
export class UxTabs implements UxComponent {
  @bindable public theme: UxTabsTheme;
  @bindable public iconPosition: string = 'leading'; // or none or top
  @children('ux-tab') public tabs: UxTab[];
  @children('ux-tab-panel') public tabPanels: UxTab[];

  constructor(
    public element: HTMLElement,
    private styleEngine: StyleEngine) { }

  public bind() {
    this.themeChanged(this.theme);
  }

  public themeChanged(newValue: UxTabsTheme) {
    if (newValue != null && newValue.themeKey == null) {
      newValue.themeKey = 'tabs';
    }

    this.styleEngine.applyTheme(newValue, this.element);
  }

  public tabsChanged() {
    console.log('tabs changed. count is ' + this.tabs?.length);
  }

  public tabPanelsChanged() {
    console.log('tab panels changed. count is ' + this.tabPanels?.length);
  }
}
