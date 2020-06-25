import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM } from 'aurelia-framework';

@inject(Element, StyleEngine)
@customElement('ux-tab')
@useView(PLATFORM.moduleName('./ux-tab.html'))
export class UxTab implements UxComponent {

    @bindable public disabled: boolean | string = false;
    @bindable public label: string = '';
    @bindable public icon: string = '';
    @bindable public panelId: string = '';
    @bindable public theme: UxTabsTheme;

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

    public disabledChanged(newValue: boolean | string) {
        /*  if (normalizeBooleanAttribute('disabled', newValue)) {
           this.button.setAttribute('disabled', '');
         } else {
           this.button.removeAttribute('disabled');
         } */
    }

    public tabSelected() {
        console.log('the ' + this.label + ' tab was selected with icon ' + this.icon + ' and panel-id ' + this.panelId);
        // try to find the corresponding tab panel and set its visible to true.
    }
}
