"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UxTab = void 0;
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var UxTab = /** @class */ (function () {
    function UxTab(element, container) {
        this.element = element;
        this.container = container;
        this.viewSlot = new aurelia_framework_1.ViewSlot(this.element, true);
    }
    UxTab.prototype.bind = function (bindingContext, overrideContext) {
        this.build();
        this.viewSlot.bind(bindingContext, overrideContext);
    };
    UxTab.prototype.attached = function () {
        this.viewSlot.attached();
    };
    UxTab.prototype.detached = function () {
        this.viewSlot.detached();
    };
    UxTab.prototype.unbind = function () {
        this.viewSlot.unbind();
    };
    UxTab.prototype.build = function () {
        if (this.built) {
            return;
        }
        this.built = true;
        if (!this.factory) {
            return;
        }
        this.view = this.factory.create(this.container);
        this.viewSlot.add(this.view);
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable
    ], UxTab.prototype, "selected", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable
    ], UxTab.prototype, "factory", void 0);
    UxTab = tslib_1.__decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.Container),
        aurelia_framework_1.customElement('ux-tab'),
        aurelia_framework_1.noView()
    ], UxTab);
    return UxTab;
}());
exports.UxTab = UxTab;
//# sourceMappingURL=ux-tab.js.map