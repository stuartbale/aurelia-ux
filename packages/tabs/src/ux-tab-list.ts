import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM } from 'aurelia-framework';

@inject(Element, StyleEngine)
@customElement('ux-tab-list')
@useView(PLATFORM.moduleName('./ux-tab-list.html'))
export class UxTabList implements UxComponent {

    @bindable public visible: boolean = false;
    @bindable public theme: UxTabsTheme;
    @bindable public id: string = '';
    @bindable public type: string = 'fixed'; // or cluster or scroll
    public content: HTMLElement;

    constructor(
        public element: HTMLElement,
        private styleEngine: StyleEngine) { }

    public bind() {
        this.themeChanged(this.theme);
    }

    public themeChanged(newValue: any) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'tab';
        }

        this.styleEngine.applyTheme(newValue, this.element);
    }
}
