import { __decorate } from "tslib";
import { inject, bindable, noView, ViewSlot, customElement, Container } from 'aurelia-framework';
var UxTab = /** @class */ (function () {
    function UxTab(element, container) {
        this.element = element;
        this.container = container;
        this.viewSlot = new ViewSlot(this.element, true);
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
    __decorate([
        bindable
    ], UxTab.prototype, "selected", void 0);
    __decorate([
        bindable
    ], UxTab.prototype, "factory", void 0);
    UxTab = __decorate([
        inject(Element, Container),
        customElement('ux-tab'),
        noView()
    ], UxTab);
    return UxTab;
}());
export { UxTab };
//# sourceMappingURL=ux-tab.js.map