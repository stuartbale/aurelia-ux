import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { PLATFORM, ViewResources, View, children, BindingEngine, Disposable } from 'aurelia-framework';
import { UxTab } from './ux-tab';
// import { AutoSelectionStrategy, autoSelectionStrategies } from './auto-selection-strategy';
// import { SelectionManager } from './selection-manager';
// import { SelectionAnimator } from './selection-animator';

@inject(Element, ViewResources, StyleEngine, BindingEngine)
@customElement('ux-tab-list')
@useView(PLATFORM.moduleName('./ux-tab-list.html'))
export class UxTabList implements UxComponent {
    @bindable public visible: boolean = false;
    @bindable public theme: UxTabsTheme;
    @bindable public id: string = '';
    @bindable public type: string = 'fixed'; // or cluster or scroll
    @children('ux-tab') public tabs: UxTab[];
    public view: View;
    private subscriptions: Disposable[] = [];
    private readonly cssClasses = {
        ACTIVE: 'ux-tab--indicator--active',
        FADE: 'ux-tab--indicator--fade',
        NO_TRANSITION: 'ux-tab--indicator--no-transition',
    };

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
    }

    public unbind() {
        this.disposeSubscriptions();
    }

    public themeChanged(newValue: any) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'tab';
        }

        this.styleEngine.applyTheme(newValue, this.element);
    }

    public tabsChanged() {
        this.disposeSubscriptions();
        this.tabs.forEach(tab => {
            const subscription = this.bindingEngine
                .propertyObserver(tab, 'selected')
                // tslint:disable-next-line:variable-name
                .subscribe((newValue, _oldValue) => {
                    if (newValue) {
                        this.tabSelected(tab);
                    }
                });

            this.subscriptions.push(subscription);
        });
        // this.selection.setTabs(this.tabs);
    }

    private disposeSubscriptions() {
        this.subscriptions.forEach(subscription => { subscription.dispose(); });
        this.subscriptions = [];
    }

    private tabSelected(selectedTab: UxTab) {
        let previousIndicatorClientRect: DOMRect = new DOMRect();
        let previous: boolean = false;
        this.tabs.filter(tab => tab.selected && tab !== selectedTab)
            .forEach(tab => {
                previousIndicatorClientRect = tab.indicator.getBoundingClientRect();
                previous = true;
                tab.selected = false;
                tab.indicator.classList.remove(this.cssClasses.ACTIVE);
                tab.indicator.classList.remove(this.cssClasses.NO_TRANSITION);
            });

        const indicator = selectedTab.indicator;

        // Early exit if no indicator is present to handle cases where an indicator
        // may be activated without a prior indicator state
        if (!previous) {
            indicator.classList.add(this.cssClasses.ACTIVE);
            return;
        }

        const currentClientRect = indicator.getBoundingClientRect();

        // Calculate the dimensions based on the dimensions of the previous indicator
        const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        const xPosition = previousIndicatorClientRect.left - currentClientRect.left;

        indicator.classList.add(this.cssClasses.NO_TRANSITION);
        indicator.style.setProperty('transform', `translateX(${xPosition}px) scaleX(${widthDelta})`);

        // Force repaint before updating classes and transform to ensure the transform properly takes effect
//        const newClientRect = indicator.getBoundingClientRect();

        indicator.classList.remove(this.cssClasses.NO_TRANSITION);
        indicator.classList.add(this.cssClasses.ACTIVE);

        indicator.style.setProperty('transform', '');

        // const tabPanels = Array.from(this.element!.parentElement!.parentElement!.querySelectorAll('ux-tab-panel'));
        // tabPanels.map(x => (x as any).au['ux-tab-panel'].viewModel as UxTabPanel)
        //     .forEach(x => x.visible = x.id === this.panelId);
    }
}
