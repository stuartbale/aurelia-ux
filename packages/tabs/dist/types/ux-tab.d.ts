import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabTheme } from './ux-tab-theme';
export declare class UxTab implements UxComponent {
    element: HTMLInputElement;
    private styleEngine;
    theme: UxTabTheme;
    variant: 'filled' | 'outline';
    selectedIcon: string;
    focused: boolean;
    selected: any;
    private isFocused;
    constructor(element: HTMLInputElement, styleEngine: StyleEngine);
    bind(): void;
    attached(): void;
    detached(): void;
    themeChanged(newValue: UxTabTheme): void;
    closeTab(event?: Event): void;
}
