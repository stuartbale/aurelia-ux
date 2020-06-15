import { inject } from 'aurelia-dependency-injection';
import { bindable, customElement, useView } from 'aurelia-templating';
import { UxComponent, StyleEngine } from '@aurelia-ux/core';
import { PLATFORM } from 'aurelia-pal';
import { UxTab } from './ux-tab';
import { UxTabsTheme } from './ux-tabs-theme';
import { UxDefaultTabsConfiguration } from './ux-default-tabs-configuration';

@inject(
  Element,
  StyleEngine,
  UxDefaultTabsConfiguration
)
@customElement('ux-tabs')
@useView(PLATFORM.moduleName('./ux-tabs.html'))
export class UxTabs implements UxComponent {

  public static TAB_SELECTED_EVENT = 'tab-selected';
  @bindable public tabs: UxTab[];
  @bindable public theme: UxTabsTheme;
  private selectedTab: UxTab;

  constructor(public element: HTMLElement, private styleEngine: StyleEngine) { }

  public bind() {
    if (this.theme != null) {
      this.themeChanged(this.theme);
    }
  }

  public themeChanged(newValue: any) {
    this.styleEngine.applyTheme(newValue, this.element);
  }

  public tabClicked(t: UxTab) {
    if (this.selectedTab) {
      this.selectedTab.selected = false;
    }

    t.selected = true;
    this.selectedTab = t;
    this.dispatchEvent(UxTabs.TAB_SELECTED_EVENT, t);
    return true;
  }

  public dispatchEvent(type: string, t: UxTab) {
    this.element.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { tab: t } }));
  }
}
