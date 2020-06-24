import { __decorate } from "tslib";
import { customElement, bindable, observable, useView } from 'aurelia-framework';
import { DOM, PLATFORM } from 'aurelia-pal';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from '@aurelia-ux/core';
var UxTab = /** @class */ (function () {
    function UxTab(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.variant = 'filled';
        this.selectedIcon = 'check';
        this.focused = false;
        this.selected = undefined;
    }
    UxTab.prototype.bind = function () {
        this.themeChanged(this.theme);
        if (this.element.hasAttribute('deletable')) {
            this.element.removeAttribute('deletable');
            this.element.classList.add('ux-tab--deletable');
        }
    };
    UxTab.prototype.attached = function () {
        var _this = this;
        this.isFocused = function () {
            _this.focused = document.activeElement === _this.element;
        };
        window.addEventListener('focus', this.isFocused, true);
        window.addEventListener('blur', this.isFocused, true);
    };
    UxTab.prototype.detached = function () {
        window.removeEventListener('focus', this.isFocused, true);
        window.removeEventListener('blur', this.isFocused, true);
    };
    UxTab.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'tab';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxTab.prototype.closeTab = function (event) {
        if (event) {
            event.stopPropagation();
        }
        var closeEvent = DOM.createCustomEvent('close', { bubbles: false });
        this.element.dispatchEvent(closeEvent);
    };
    __decorate([
        bindable
    ], UxTab.prototype, "theme", void 0);
    __decorate([
        bindable
    ], UxTab.prototype, "variant", void 0);
    __decorate([
        bindable
    ], UxTab.prototype, "selectedIcon", void 0);
    __decorate([
        observable
    ], UxTab.prototype, "focused", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay })
    ], UxTab.prototype, "selected", void 0);
    UxTab = __decorate([
        inject(Element, StyleEngine),
        customElement('ux-tab'),
        useView(PLATFORM.moduleName('./ux-tab.html'))
    ], UxTab);
    return UxTab;
}());
export { UxTab };
//# sourceMappingURL=ux-tab.js.map