import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM, ViewResources, View, children, BindingEngine } from 'aurelia-framework';
import { UxTab } from './ux-tab';
import { AutoSelectionStrategy, autoSelectionStrategies } from './auto-selection-strategy';
import { SelectionManager } from './selection-manager';
import { SelectionAnimator } from './selection-animator';

@inject(Element, ViewResources, StyleEngine, BindingEngine)
@customElement('ux-tab-list')
@useView(PLATFORM.moduleName('./ux-tab-list.html'))
export class UxTabList implements UxComponent {
    @bindable public visible: boolean = false;
    @bindable public theme: UxTabsTheme;
    @bindable public id: string = '';
    @bindable public type: string = 'fixed'; // or cluster or scroll
    @bindable private autoSelectUsing: string | AutoSelectionStrategy = autoSelectionStrategies.nearest;
    @children('ux-tab') public tabs: UxTab[];
    public view: View;
    private selection: SelectionManager;
    private animator = new SelectionAnimator(this.element);

    public content: HTMLElement;

    constructor(
        private readonly element: HTMLElement,
        public readonly resources: ViewResources,
        private readonly styleEngine: StyleEngine,
        private readonly bindingEngine: BindingEngine) { }

    public created(_: any, myView: View) {
        this.view = myView;
    }

    public bind() {
        this.themeChanged(this.theme);
        this.selection = new SelectionManager(this.bindingEngine, (oldTab: UxTab | null, newTab: UxTab | null) => {
            if (oldTab && newTab) {
                this.animator.transition(oldTab.element, newTab.element);
            }
        });
        this.autoSelectUsingChanged();
    }

    public themeChanged(newValue: any) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'tab';
        }

        this.styleEngine.applyTheme(newValue, this.element);
    }

    public autoSelectUsingChanged() {
        if (typeof this.autoSelectUsing === 'string') {
            if (this.autoSelectUsing in autoSelectionStrategies) {
                this.selection.autoSelectionStrategy = autoSelectionStrategies[this.autoSelectUsing];
            }
            // TODO else: log error?
        } else {
            this.selection.autoSelectionStrategy = this.autoSelectUsing as AutoSelectionStrategy;
        }
    }

    public tabsChanged() {
        this.selection.setTabs(this.tabs);
    }

    public unbind() {
        this.selection.dispose();
    }
}
