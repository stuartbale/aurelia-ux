define(["require", "exports", "tslib", "aurelia-framework", "@aurelia-ux/core"], function (require, exports, tslib_1, aurelia_framework_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxProgress = void 0;
    var INDETERMINATE_ANIMATION_TEMPLATE = "\n@keyframes ux-progress-stroke-rotate-DIAMETER-STROKE-WIDTH {\n   0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n   12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n   12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n   25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n   25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n   37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n   37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n   50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n   50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n   62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n   62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n   75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n   75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n   87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n   87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n   100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n }";
    var UxProgress = /** @class */ (function () {
        function UxProgress(element, styleEngine, globalStyleEngine) {
            this.element = element;
            this.styleEngine = styleEngine;
            this.globalStyleEngine = globalStyleEngine;
            this.diameterNumber = 100;
            this.diameter = 100;
            this.strokeWidthNumber = 10;
            this.strokeWidth = 10;
        }
        UxProgress.prototype.valueChanged = function () {
            this.valueNumber = core_1.normalizeNumberAttribute(this.value);
            this.update();
        };
        UxProgress.prototype.themeChanged = function (newValue) {
            if (newValue !== null && !newValue.themeKey) {
                newValue.themeKey = 'progress';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        };
        UxProgress.prototype.diameterChanged = function () {
            this.diameterNumber = core_1.normalizeNumberAttribute(this.diameter);
            this.update();
        };
        UxProgress.prototype.strokeWidthChanged = function () {
            this.strokeWidthNumber = core_1.normalizeNumberAttribute(this.strokeWidth);
            this.update();
        };
        UxProgress.prototype.bind = function () {
            this.valueNumber = core_1.normalizeNumberAttribute(this.value);
            this.diameterNumber = core_1.normalizeNumberAttribute(this.diameter);
            this.strokeWidthNumber = core_1.normalizeNumberAttribute(this.strokeWidth);
            this.update();
        };
        UxProgress.prototype.update = function () {
            var _a, _b;
            this.strokeCircumference = (((_a = this.diameterNumber) !== null && _a !== void 0 ? _a : 0) - ((_b = this.strokeWidthNumber) !== null && _b !== void 0 ? _b : 0)) * 3.14;
            if (this.valueNumber === undefined || this.valueNumber === null) {
                this.strokeDashOffset = 0;
                var styleId = "ux-progress-animation-template";
                this.globalStyleEngine.addOrUpdateGlobalStyle(styleId, INDETERMINATE_ANIMATION_TEMPLATE
                    .replace(/START_VALUE/g, "" + 0.95 * this.strokeCircumference)
                    .replace(/END_VALUE/g, "" + 0.2 * this.strokeCircumference)
                    .replace(/DIAMETER/g, "" + this.diameter)
                    .replace(/STROKE-WIDTH/g, "" + this.strokeWidthNumber));
            }
            else {
                this.strokeDashOffset = this.strokeCircumference * (1 - this.valueNumber / 100);
                this.viewBox = "0 0 " + this.diameterNumber + " " + this.diameterNumber;
            }
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxProgress.prototype, "value", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxProgress.prototype, "theme", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxProgress.prototype, "diameter", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxProgress.prototype, "strokeWidth", void 0);
        UxProgress = tslib_1.__decorate([
            aurelia_framework_1.inject(Element, core_1.StyleEngine, core_1.GlobalStyleEngine),
            aurelia_framework_1.customElement('ux-progress'),
            aurelia_framework_1.useView(aurelia_framework_1.PLATFORM.moduleName('./ux-progress.html'))
        ], UxProgress);
        return UxProgress;
    }());
    exports.UxProgress = UxProgress;
});
//# sourceMappingURL=ux-progress.js.map