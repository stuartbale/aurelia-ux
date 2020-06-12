define(["require", "exports", "tslib", "./ux-choice-container-attribute", "aurelia-framework", "./ux-choice.css"], function (require, exports, tslib_1, ux_choice_container_attribute_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxChoiceAttribute = void 0;
    var UxChoiceAttribute = /** @class */ (function () {
        function UxChoiceAttribute(element, container) {
            this.element = element;
            this.container = container;
        }
        UxChoiceAttribute.prototype.bind = function () {
            this.container.registerChoice(this);
            this.element.classList.add('ux-choice');
        };
        UxChoiceAttribute.prototype.detached = function () {
            this.container.disposeChoice(this);
        };
        UxChoiceAttribute.prototype.valueChanged = function (newValue, oldValue) {
            if (!this.container) {
                return;
            }
            var containerValue = this.container.value;
            if (this.container.isMultiple && Array.isArray(containerValue)) {
                for (var _i = 0, containerValue_1 = containerValue; _i < containerValue_1.length; _i++) {
                    var value = containerValue_1[_i];
                    if (value === oldValue) {
                        value = newValue;
                        return;
                    }
                }
            }
            else if (!this.container.isMultiple && containerValue === oldValue) {
                this.container.value = newValue;
            }
        };
        UxChoiceAttribute.prototype.selectedChanged = function () {
            this.element.classList.toggle('ux-choice--selected', this.selected);
        };
        tslib_1.__decorate([
            aurelia_framework_1.observable
        ], UxChoiceAttribute.prototype, "selected", void 0);
        UxChoiceAttribute = tslib_1.__decorate([
            aurelia_framework_1.customAttribute('ux-choice', undefined, ['ux-choice-item', 'ux-choice-option']),
            aurelia_framework_1.inject(Element, aurelia_framework_1.Optional.of(ux_choice_container_attribute_1.UxChoiceContainerAttribute))
        ], UxChoiceAttribute);
        return UxChoiceAttribute;
    }());
    exports.UxChoiceAttribute = UxChoiceAttribute;
});
//# sourceMappingURL=ux-choice-attribute.js.map