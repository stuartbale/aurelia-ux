import { TaskQueue } from 'aurelia-framework';
import { UxComponent, StyleEngine } from '@aurelia-ux/core';
import { DiscardablePromise } from './discardable-promise';
import { UxDefaultLookupConfiguration } from './ux-lookup-configuration';
import { UxLookupTheme } from './ux-lookup-theme';
export declare class UxLookup implements UxComponent, EventListenerObject {
    private element;
    private taskQueue;
    defaultConfiguration: UxDefaultLookupConfiguration;
    private styleEngine;
    constructor(element: HTMLElement, taskQueue: TaskQueue, defaultConfiguration: UxDefaultLookupConfiguration, styleEngine: StyleEngine);
    static SELECTED_EVENT: string;
    private inputElement;
    anchor: {
        left: number;
        top: string | undefined;
        bottom: string | undefined;
        maxHeight: number;
        width: number;
    } | null;
    isOpen: boolean;
    isWrapperOpen: boolean;
    optionsArray: unknown[];
    focusedOption: unknown;
    searching: boolean;
    errorMessage: string | undefined;
    notFound: boolean;
    displayField: ((option: unknown) => string) | string | undefined;
    displayFieldChanged(): void;
    getDisplay: (option: unknown) => string;
    valueField: ((option: unknown) => unknown) | string | undefined;
    valueFieldChanged(): void;
    getValue: (option: unknown) => unknown;
    options: ((filter: string, value: unknown) => Promise<unknown[]>) | unknown[] | undefined;
    optionsChanged(): void;
    getOptions: (filter: string | undefined, value: unknown) => Promise<unknown[]>;
    getOptionsDefault(filter: string, value: unknown): Promise<unknown[]>;
    value: unknown;
    suppressValueChanged: boolean;
    valueChanged(): Promise<void>;
    setValue(value: unknown): void;
    theme: UxLookupTheme;
    themeChanged(newValue: any): void;
    debounceNumber: number | null | undefined;
    debounce: number | string | undefined;
    debounceChanged(): void;
    bind(): void;
    attached(): void;
    detached(): void;
    open(): Promise<void>;
    close(): void;
    updateAnchor(): void;
    handleEvent(evt: Event): void;
    debouncePromise: DiscardablePromise<void>;
    searchPromise: DiscardablePromise<unknown[]>;
    suppressFilterChanged: boolean;
    filterChanged(): Promise<void>;
    setFilter(filter: string | undefined): void;
    updateFilterBasedOnValue(): Promise<void>;
    select(option: unknown): void;
    onBlur(): void;
    onInputKeydown(evt: KeyboardEvent): void;
    onInputBlur(): void;
    onWindowWheel(evt: Event): void;
    onKeydown(evt: KeyboardEvent): void;
    onWindowResize(): void;
}
