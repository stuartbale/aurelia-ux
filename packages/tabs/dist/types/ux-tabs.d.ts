import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
export declare class UxTabs implements UxComponent {
    element: HTMLElement;
    private styleEngine;
    theme: UxTabsTheme;
    constructor(element: HTMLElement, styleEngine: StyleEngine);
    bind(): void;
    themeChanged(newValue: UxTabsTheme): void;
}
