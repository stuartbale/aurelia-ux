import { __decorate } from "tslib";
import { inject } from 'aurelia-dependency-injection';
import { bindable, customElement, useView } from 'aurelia-templating';
import { StyleEngine } from '@aurelia-ux/core';
import { PLATFORM } from 'aurelia-pal';
import { UxDefaultTabsConfiguration } from './ux-default-tabs-configuration';
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
    __decorate([
        bindable
    ], UxTabs.prototype, "tabs", void 0);
    __decorate([
        bindable
    ], UxTabs.prototype, "theme", void 0);
    UxTabs = UxTabs_1 = __decorate([
        inject(Element, StyleEngine, UxDefaultTabsConfiguration),
        customElement('ux-tabs'),
        useView(PLATFORM.moduleName('./ux-tabs.html'))
    ], UxTabs);
    return UxTabs;
}());
export { UxTabs };
//# sourceMappingURL=ux-tabs.js.map