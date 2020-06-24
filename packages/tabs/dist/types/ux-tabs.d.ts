import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
export declare class UxTabs implements UxComponent {
    private element;
    private styleEngine;
    theme: UxTabsTheme;
    type: 'inline' | 'scroll' | 'stack';
    constructor(element: HTMLElement, styleEngine: StyleEngine);
    bind(): void;
    themeChanged(newValue: UxTabsTheme): void;
}
