define(["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tab = void 0;
    var Tab = /** @class */ (function () {
        function Tab(element, container) {
            this.element = element;
            this.container = container;
            this.viewSlot = new aurelia_framework_1.ViewSlot(this.element, true);
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
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], Tab.prototype, "factory", void 0);
        Tab = tslib_1.__decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.Container),
            aurelia_framework_1.customElement('ux-tab'),
            aurelia_framework_1.noView()
        ], Tab);
        return Tab;
    }());
    exports.Tab = Tab;
});
//# sourceMappingURL=ux-tab.js.map