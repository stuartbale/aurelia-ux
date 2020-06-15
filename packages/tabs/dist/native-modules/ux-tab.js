import { __decorate } from "tslib";
import { inject, bindable, noView, ViewSlot, customElement, Container } from 'aurelia-framework';
var Tab = /** @class */ (function () {
    function Tab(element, container) {
        this.element = element;
        this.container = container;
        this.viewSlot = new ViewSlot(this.element, true);
    }
    Tab.prototype.bind = function (bindingContext, overrideContext) {
        this.build();
        this.viewSlot.bind(bindingContext, overrideContext);
    };
    Tab.prototype.attached = function () {
        this.viewSlot.attached();
    };
    Tab.prototype.detached = function () {
        this.viewSlot.detached();
    };
    Tab.prototype.unbind = function () {
        this.viewSlot.unbind();
    };
    Tab.prototype.build = function () {
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
    ], Tab.prototype, "factory", void 0);
    Tab = __decorate([
        inject(Element, Container),
        customElement('ux-tab'),
        noView()
    ], Tab);
    return Tab;
}());
export { Tab };
//# sourceMappingURL=ux-tab.js.map