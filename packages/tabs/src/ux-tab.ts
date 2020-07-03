import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM } from 'aurelia-framework';

@inject(Element, StyleEngine)
@customElement('ux-tab')
@useView(PLATFORM.moduleName('./ux-tab.html'))
export class UxTab implements UxComponent {
    @bindable public theme: UxTabsTheme;
    @bindable public disabled: boolean | string = false;
    @bindable public label: string = '';
    @bindable public icon: string = '';
    @bindable public panelId: string = '';
    @bindable public selected = false;
    public indicator: HTMLElement;

    constructor(
        public element: HTMLElement,
        private styleEngine: StyleEngine) { }

    public bind() {
        this.themeChanged(this.theme);
        this.indicator = this.element.getElementsByClassName('ux-tab--indicator')[0] as HTMLElement;
    }

    public themeChanged(newValue: any) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'tab';
        }

        this.styleEngine.applyTheme(newValue, this.element);
    }

    public clicked() {
        this.selected = true;
    }
}
