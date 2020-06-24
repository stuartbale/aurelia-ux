import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM } from 'aurelia-pal';

@inject(Element, StyleEngine)
@customElement('ux-tabs')
@useView(PLATFORM.moduleName('./ux-tabs.html'))
export class UxTabs implements UxComponent {
  @bindable public theme: UxTabsTheme;
  @bindable public type: 'inline' | 'scroll' | 'stack' = 'inline';

  constructor(private element: HTMLElement, private styleEngine: StyleEngine) { }

  public bind() {
    this.themeChanged(this.theme);
  }

  public themeChanged(newValue: UxTabsTheme) {
    if (newValue != null && newValue.themeKey == null) {
      newValue.themeKey = 'tabs';
    }

    this.styleEngine.applyTheme(newValue, this.element);
  }
}
