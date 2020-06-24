define(["require", "exports", "tslib", "aurelia-framework", "aurelia-pal", "aurelia-binding", "aurelia-dependency-injection", "@aurelia-ux/core"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_pal_1, aurelia_binding_1, aurelia_dependency_injection_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxTab = void 0;
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
            var closeEvent = aurelia_pal_1.DOM.createCustomEvent('close', { bubbles: false });
            this.element.dispatchEvent(closeEvent);
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxTab.prototype, "theme", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxTab.prototype, "variant", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxTab.prototype, "selectedIcon", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.observable
        ], UxTab.prototype, "focused", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
        ], UxTab.prototype, "selected", void 0);
        UxTab = tslib_1.__decorate([
            aurelia_dependency_injection_1.inject(Element, core_1.StyleEngine),
            aurelia_framework_1.customElement('ux-tab'),
            aurelia_framework_1.useView(aurelia_pal_1.PLATFORM.moduleName('./ux-tab.html'))
        ], UxTab);
        return UxTab;
    }());
    exports.UxTab = UxTab;
});
//# sourceMappingURL=ux-tab.js.map