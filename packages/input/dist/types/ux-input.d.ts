import { StyleEngine, UxInputComponent, InputVariant } from '@aurelia-ux/core';
import { UxInputTheme } from './ux-input-theme';
import '@aurelia-ux/core/components/ux-input-component.css';
import '@aurelia-ux/core/components/ux-input-component--outline.css';
import { UxDefaultInputConfiguration } from './ux-default-input-configuration';
export interface UxInputElement extends HTMLElement {
    value: any;
}
export declare class UxInput implements UxInputComponent {
    private element;
    styleEngine: StyleEngine;
    private ignoreRawChanges;
    autofocus: null;
    autocomplete: string;
    disabled: any;
    maxlength: number;
    minlength: number;
    min: number;
    max: number;
    readonly: any;
    theme: UxInputTheme;
    label: string;
    placeholder: string;
    type: any;
    variant: InputVariant;
    dense: any;
    rawValue: string;
    focused: boolean;
    value: any;
    textbox: HTMLInputElement;
    constructor(element: UxInputElement, styleEngine: StyleEngine, defaultConfiguration: UxDefaultInputConfiguration);
    bind(): void;
    attached(): void;
    detached(): void;
    getValue(): any;
    setValue(value: any): void;
    private processRawValue;
    autocompleteChanged(newValue: any): void;
    themeChanged(newValue: any): void;
    focusedChanged(focused: boolean): void;
    typeChanged(newValue: any): void;
    rawValueChanged(newValue: string): void;
    focus(): void;
    blur(): void;
    variantChanged(newValue: string): void;
    get placeholderMode(): boolean;
}
