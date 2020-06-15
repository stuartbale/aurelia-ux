import { __decorate } from "tslib";
import { inject } from 'aurelia-dependency-injection';
import { bindable, customElement, useView } from 'aurelia-templating';
import { StyleEngine } from '@aurelia-ux/core';
import { PLATFORM } from 'aurelia-pal';
import { UxDefaultTabsConfiguration } from './ux-default-tabs-configuration';
let UxTabs = /** @class */ (() => {
    var UxTabs_1;
    let UxTabs = UxTabs_1 = class UxTabs {
        constructor(element, styleEngine) {
            this.element = element;
            this.styleEngine = styleEngine;
        }
        bind() {
            if (this.theme != null) {
                this.themeChanged(this.theme);
            }
        }
        themeChanged(newValue) {
            this.styleEngine.applyTheme(newValue, this.element);
        }
        tabClicked(t) {
            if (this.selectedTab) {
                this.selectedTab.selected = false;
            }
            t.selected = true;
            this.selectedTab = t;
            this.dispatchEvent(UxTabs_1.TAB_SELECTED_EVENT, t);
            return true;
        }
        dispatchEvent(type, t) {
            this.element.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { tab: t } }));
        }
    };
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
})();
export { UxTabs };
//# sourceMappingURL=ux-tabs.js.map