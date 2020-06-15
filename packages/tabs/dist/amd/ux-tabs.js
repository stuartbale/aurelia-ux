define(["require", "exports", "tslib", "aurelia-dependency-injection", "aurelia-templating", "@aurelia-ux/core", "aurelia-pal", "./ux-default-tabs-configuration"], function (require, exports, tslib_1, aurelia_dependency_injection_1, aurelia_templating_1, core_1, aurelia_pal_1, ux_default_tabs_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxTabs = void 0;
    var UxTabs = /** @class */ (function () {
        function UxTabs(element, styleEngine) {
            this.element = element;
            this.styleEngine = styleEngine;
        }
        UxTabs_1 = UxTabs;
        UxTabs.prototype.bind = function () {
            if (this.theme != null) {
                this.themeChanged(this.theme);
            }
        };
        UxTabs.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(newValue, this.element);
        };
        UxTabs.prototype.tabClicked = function (t) {
            if (this.selectedTab) {
                this.selectedTab.selected = false;
            }
            t.selected = true;
            this.selectedTab = t;
            this.dispatchEvent(UxTabs_1.TAB_SELECTED_EVENT, t);
            return true;
        };
        UxTabs.prototype.dispatchEvent = function (type, t) {
            this.element.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { tab: t } }));
        };
        var UxTabs_1;
        UxTabs.TAB_SELECTED_EVENT = 'tab-selected';
        tslib_1.__decorate([
            aurelia_templating_1.bindable
        ], UxTabs.prototype, "tabs", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable
        ], UxTabs.prototype, "theme", void 0);
        UxTabs = UxTabs_1 = tslib_1.__decorate([
            aurelia_dependency_injection_1.inject(Element, core_1.StyleEngine, ux_default_tabs_configuration_1.UxDefaultTabsConfiguration),
            aurelia_templating_1.customElement('ux-tabs'),
            aurelia_templating_1.useView(aurelia_pal_1.PLATFORM.moduleName('./ux-tabs.html'))
        ], UxTabs);
        return UxTabs;
    }());
    exports.UxTabs = UxTabs;
});
//# sourceMappingURL=ux-tabs.js.map