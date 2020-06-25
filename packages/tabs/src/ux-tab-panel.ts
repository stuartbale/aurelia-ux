import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM } from 'aurelia-framework';

@inject(Element, StyleEngine)
@customElement('ux-tab-panel')
@useView(PLATFORM.moduleName('./ux-tab-panel.html'))
export class UxTabPanel implements UxComponent {

    @bindable public visible: boolean = false;
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

    public visibleChanged(newValue: boolean) {
        console.log('the panel with id ' + this.panelId + ' visible was changed to ' + newValue);
        /*  if (normalizeBooleanAttribute('disabled', newValue)) {
           this.button.setAttribute('disabled', '');
         } else {
           this.button.removeAttribute('disabled');
         } */
    }
}
