import { __decorate } from "tslib";
import { customElement, bindable, useView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from '@aurelia-ux/core';
import { PLATFORM } from 'aurelia-framework';
let UxTabs = /** @class */ (() => {
    let UxTabs = class UxTabs {
        constructor(element, styleEngine) {
            this.element = element;
            this.styleEngine = styleEngine;
        }
        bind() {
            this.themeChanged(this.theme);
        }
        themeChanged(newValue) {
            if (newValue != null && newValue.themeKey == null) {
                newValue.themeKey = 'tabs';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        }
    };
    __decorate([
        bindable
    ], UxTabs.prototype, "theme", void 0);
    UxTabs = __decorate([
        inject(Element, StyleEngine),
        customElement('ux-tabs'),
        useView(PLATFORM.moduleName('./ux-tabs.html'))
    ], UxTabs);
    return UxTabs;
})();
export { UxTabs };
//# sourceMappingURL=ux-tabs.js.map