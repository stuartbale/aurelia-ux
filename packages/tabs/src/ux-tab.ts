import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM, bindingMode } from 'aurelia-framework';
import { UxTabPanel } from './ux-tab-panel';

@inject(Element, StyleEngine)
@customElement('ux-tab')
@useView(PLATFORM.moduleName('./ux-tab.html'))
export class UxTab implements UxComponent {
    @bindable public theme: UxTabsTheme;
    @bindable public disabled: boolean | string = false;
    @bindable public label: string = '';
    @bindable public icon: string = '';
    @bindable public panelId: string = '';
    @bindable public active: boolean = false;
    @bindable public focusOnActivate: boolean = true;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public selected = false;

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

    public activate() {
        // TODO: Handle Activate
        this.active = true;
    }

    public deactivate() {
        // TODO: Handle Deactivate
        this.active = false;
    }

    public focus() {
        // TODO: Handle Focus
    }

    public tabSelected() {
        if (!this.selected) {
            const otherTabs = Array.from(this.element!.parentElement!.querySelectorAll('ux-tab'));
            otherTabs.filter(x => x !== this.element)
                .map(x => (x as any).au['ux-tab'].viewModel as UxTab)
                .forEach(x => x.selected = false);
            this.selected = true;
        }

        const tabPanels = Array.from(this.element!.parentElement!.parentElement!.querySelectorAll('ux-tab-panel'));
        tabPanels.map(x => (x as any).au['ux-tab-panel'].viewModel as UxTabPanel)
            .forEach(x => x.visible = x.id === this.panelId);
}
}
