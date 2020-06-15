import { UxComponent, StyleEngine } from '@aurelia-ux/core';
import { UxTab } from './ux-tab';
import { UxTabsTheme } from './ux-tabs-theme';
export declare class UxTabs implements UxComponent {
    element: HTMLElement;
    private styleEngine;
    static TAB_SELECTED_EVENT: string;
    tabs: UxTab[];
    theme: UxTabsTheme;
    private selectedTab;
    constructor(element: HTMLElement, styleEngine: StyleEngine);
    bind(): void;
    themeChanged(newValue: any): void;
    tabClicked(t: UxTab): boolean;
    dispatchEvent(type: string, t: UxTab): void;
}
