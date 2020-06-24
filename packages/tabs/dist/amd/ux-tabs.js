define(["require", "exports", "tslib", "aurelia-templating", "aurelia-dependency-injection", "@aurelia-ux/core", "aurelia-pal"], function (require, exports, tslib_1, aurelia_templating_1, aurelia_dependency_injection_1, core_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxTabs = void 0;
    var UxTabs = /** @class */ (function () {
        function UxTabs(element, styleEngine) {
            this.element = element;
            this.styleEngine = styleEngine;
            this.type = 'inline';
        }
        UxTabs.prototype.bind = function () {
            this.themeChanged(this.theme);
        };
        UxTabs.prototype.themeChanged = function (newValue) {
            if (newValue != null && newValue.themeKey == null) {
                newValue.themeKey = 'tabs';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        };
        tslib_1.__decorate([
            aurelia_templating_1.bindable
        ], UxTabs.prototype, "theme", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable
        ], UxTabs.prototype, "type", void 0);
        UxTabs = tslib_1.__decorate([
            aurelia_dependency_injection_1.inject(Element, core_1.StyleEngine),
            aurelia_templating_1.customElement('ux-tabs'),
            aurelia_templating_1.useView(aurelia_pal_1.PLATFORM.moduleName('./ux-tabs.html'))
        ], UxTabs);
        return UxTabs;
    }());
    exports.UxTabs = UxTabs;
});
//# sourceMappingURL=ux-tabs.js.map