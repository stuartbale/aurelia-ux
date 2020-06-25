"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UxTab = void 0;
var tslib_1 = require("tslib");
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var core_1 = require("@aurelia-ux/core");
var aurelia_framework_1 = require("aurelia-framework");
var UxTab = /** @class */ (function () {
    function UxTab(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.disabled = false;
        this.ripple = null;
    }
    UxTab.prototype.bind = function () {
        if (core_1.normalizeBooleanAttribute('disabled', this.disabled)) {
            this.button.setAttribute('disabled', '');
        }
        this.themeChanged(this.theme);
        this.typeChanged(this.type);
        this.sizeChanged(this.size);
        this.effectChanged(this.effect);
    };
    UxTab.prototype.typeChanged = function (newValue) {
        var _a;
        var typeClasses = [
            'ux-tab--text',
            'ux-tab--flat',
            'ux-tab--outline',
            'ux-tab--raised'
        ];
        (_a = this.button.classList).remove.apply(_a, typeClasses);
        if (newValue == null || typeClasses.includes("ux-tab--" + newValue) === false) {
            newValue = 'raised';
        }
        this.button.classList.add("ux-tab--" + newValue);
    };
    UxTab.prototype.sizeChanged = function (newValue) {
        var _a;
        var sizeClasses = ['ux-tab--small', 'ux-tab--medium', 'ux-tab--large'];
        (_a = this.element.classList).remove.apply(_a, sizeClasses);
        if (newValue == null || sizeClasses.includes("ux-tab--" + newValue) === false) {
            newValue = 'medium';
        }
        this.element.classList.add("ux-tab--" + newValue);
    };
    UxTab.prototype.effectChanged = function (newValue) {
        var _a;
        var effectClasses = ['ux-tab--ripple'];
        (_a = this.button.classList).remove.apply(_a, effectClasses);
        if (newValue == null || effectClasses.includes("ux-tab--" + newValue) === false) {
            newValue = 'ripple';
        }
        this.button.classList.add("ux-tab--" + newValue);
    };
    UxTab.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'tab';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxTab.prototype.disabledChanged = function (newValue) {
        if (core_1.normalizeBooleanAttribute('disabled', newValue)) {
            this.button.setAttribute('disabled', '');
        }
        else {
            this.button.removeAttribute('disabled');
        }
    };
    UxTab.prototype.onMouseDown = function (e) {
        if (this.button.classList.contains('ux-tab--ripple')) {
            if (this.ripple === null) {
                this.ripple = new core_1.PaperRipple();
                this.button.appendChild(this.ripple.$);
            }
            this.ripple.downAction(e);
        }
        return true;
    };
    UxTab.prototype.onMouseUp = function () {
        if (this.button.classList.contains('ux-tab--ripple') && this.ripple !== null) {
            this.ripple.upAction();
        }
        return true;
    };
    tslib_1.__decorate([
        aurelia_templating_1.bindable
    ], UxTab.prototype, "type", void 0);
    tslib_1.__decorate([
        aurelia_templating_1.bindable
    ], UxTab.prototype, "size", void 0);
    tslib_1.__decorate([
        aurelia_templating_1.bindable
    ], UxTab.prototype, "effect", void 0);
    tslib_1.__decorate([
        aurelia_templating_1.bindable
    ], UxTab.prototype, "disabled", void 0);
    tslib_1.__decorate([
        aurelia_templating_1.bindable
    ], UxTab.prototype, "theme", void 0);
    UxTab = tslib_1.__decorate([
        aurelia_dependency_injection_1.inject(Element, core_1.StyleEngine),
        aurelia_templating_1.customElement('ux-tab'),
        aurelia_templating_1.useView(aurelia_framework_1.PLATFORM.moduleName('./ux-tab.html'))
    ], UxTab);
    return UxTab;
}());
exports.UxTab = UxTab;
//# sourceMappingURL=ux-tab.js.map