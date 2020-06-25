import { __decorate } from "tslib";
import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, PaperRipple, normalizeBooleanAttribute } from '@aurelia-ux/core';
import { PLATFORM } from 'aurelia-framework';
let UxTab = /** @class */ (() => {
    let UxTab = class UxTab {
        constructor(element, styleEngine) {
            this.element = element;
            this.styleEngine = styleEngine;
            this.disabled = false;
            this.ripple = null;
        }
        bind() {
            if (normalizeBooleanAttribute('disabled', this.disabled)) {
                this.button.setAttribute('disabled', '');
            }
            this.themeChanged(this.theme);
            this.typeChanged(this.type);
            this.sizeChanged(this.size);
            this.effectChanged(this.effect);
        }
        typeChanged(newValue) {
            const typeClasses = [
                'ux-tab--text',
                'ux-tab--flat',
                'ux-tab--outline',
                'ux-tab--raised'
            ];
            this.button.classList.remove(...typeClasses);
            if (newValue == null || typeClasses.includes(`ux-tab--${newValue}`) === false) {
                newValue = 'raised';
            }
            this.button.classList.add(`ux-tab--${newValue}`);
        }
        sizeChanged(newValue) {
            const sizeClasses = ['ux-tab--small', 'ux-tab--medium', 'ux-tab--large'];
            this.element.classList.remove(...sizeClasses);
            if (newValue == null || sizeClasses.includes(`ux-tab--${newValue}`) === false) {
                newValue = 'medium';
            }
            this.element.classList.add(`ux-tab--${newValue}`);
        }
        effectChanged(newValue) {
            const effectClasses = ['ux-tab--ripple'];
            this.button.classList.remove(...effectClasses);
            if (newValue == null || effectClasses.includes(`ux-tab--${newValue}`) === false) {
                newValue = 'ripple';
            }
            this.button.classList.add(`ux-tab--${newValue}`);
        }
        themeChanged(newValue) {
            if (newValue != null && newValue.themeKey == null) {
                newValue.themeKey = 'tab';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        }
        disabledChanged(newValue) {
            if (normalizeBooleanAttribute('disabled', newValue)) {
                this.button.setAttribute('disabled', '');
            }
            else {
                this.button.removeAttribute('disabled');
            }
        }
        onMouseDown(e) {
            if (this.button.classList.contains('ux-tab--ripple')) {
                if (this.ripple === null) {
                    this.ripple = new PaperRipple();
                    this.button.appendChild(this.ripple.$);
                }
                this.ripple.downAction(e);
            }
            return true;
        }
        onMouseUp() {
            if (this.button.classList.contains('ux-tab--ripple') && this.ripple !== null) {
                this.ripple.upAction();
            }
            return true;
        }
    };
    __decorate([
        bindable
    ], UxTab.prototype, "type", void 0);
    __decorate([
        bindable
    ], UxTab.prototype, "size", void 0);
    __decorate([
        bindable
    ], UxTab.prototype, "effect", void 0);
    __decorate([
        bindable
    ], UxTab.prototype, "disabled", void 0);
    __decorate([
        bindable
    ], UxTab.prototype, "theme", void 0);
    UxTab = __decorate([
        inject(Element, StyleEngine),
        customElement('ux-tab'),
        useView(PLATFORM.moduleName('./ux-tab.html'))
    ], UxTab);
    return UxTab;
})();
export { UxTab };
//# sourceMappingURL=ux-tab.js.map