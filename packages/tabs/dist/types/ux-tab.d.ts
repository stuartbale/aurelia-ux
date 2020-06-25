import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxTabsTheme } from './ux-tabs-theme';
export declare class UxTab implements UxComponent {
    element: HTMLElement;
    private styleEngine;
    type: string | null;
    size: string | null;
    effect: string | null;
    disabled: boolean | string;
    theme: UxTabsTheme;
    private ripple;
    private button;
    constructor(element: HTMLElement, styleEngine: StyleEngine);
    bind(): void;
    typeChanged(newValue: string | null): void;
    sizeChanged(newValue: string | null): void;
    effectChanged(newValue: string | null): void;
    themeChanged(newValue: any): void;
    disabledChanged(newValue: boolean | string): void;
    onMouseDown(e: MouseEvent): boolean;
    onMouseUp(): boolean;
}
