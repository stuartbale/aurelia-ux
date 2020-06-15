import { ViewCompiler, ViewResources, BehaviorInstruction, Container, ViewFactory } from 'aurelia-framework';
import { ITab } from './i-tab';
import { UxComponent, StyleEngine } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
import { UxDefaultTabsConfiguration } from './ux-default-tabs-configuration';
export declare class UxTabs implements UxComponent {
    private element;
    private styleEngine;
    static TAB_SELECTED_EVENT: string;
    static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element, _instruction: BehaviorInstruction): boolean;
    /**
     * @param element the host element of a <ux-tabs/>
     * @param container the container associated with a <ux-tabs/>
     */
    private static getTabFactory;
    constructor(element: HTMLElement, styleEngine: StyleEngine, defaultConfiguration: UxDefaultTabsConfiguration, container: Container);
    tabViewFactory: ViewFactory;
    selectedTab: ITab;
    tabs: ITab[];
    theme: UxTabsTheme;
    themeChanged(newValue: UxTabsTheme): void;
    tabClicked(t: ITab): boolean;
    dispatchEvent(type: string, node: ITab): void;
}
