import { __decorate } from "tslib";
import { customElement, bindable, ViewResources, useView } from 'aurelia-templating';
import { bindingMode, observable, computedFrom } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, normalizeBooleanAttribute, getBackgroundColorThroughParents } from '@aurelia-ux/core';
import { DatetimeUtility } from './resources/datetime-utility';
import { DOM, PLATFORM } from 'aurelia-pal';
import { moment } from './resources/moment-rexports';
// tslint:disable-next-line: no-submodule-imports
import '@aurelia-ux/core/components/ux-input-component.css';
// tslint:disable-next-line: no-submodule-imports
import '@aurelia-ux/core/components/ux-input-component--outline.css';
// import UX_DATEPICKER_VIEW from './ux-datepicker.html';
// import { PLATFORM } from 'aurelia-pal';
let UxDatepicker = /** @class */ (() => {
    let UxDatepicker = 
    // @inlineView(
    //   UX_DATEPICKER_VIEW,
    //   [PLATFORM.moduleName('@aurelia-ux/datepicker/ux-datepicker.css')]
    // )
    class UxDatepicker {
        constructor(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.display = 'month';
            this.type = 'datetime';
            this.autofocus = null;
            this.disabled = false;
            this.readonly = false;
            this.variant = 'filled';
            this.dense = false;
            this.formatters = {
                date: 'L',
                time: 'LT',
                datetime: 'L LT'
            };
            this.focused = false;
            this.showDialog = false;
        }
        bind() {
            if (this.autofocus || this.autofocus === '') {
                this.focused = true;
            }
            this.dense = normalizeBooleanAttribute('dense', this.dense);
            if (this.initialDate != null) {
                const dateParse = moment(this.initialDate);
                if (dateParse.isValid()) {
                    this.initialDate = dateParse;
                }
            }
            else {
                this.initialDate = moment();
            }
            if (this.minDate != null) {
                const dateParse = moment(this.minDate);
                this.minDate = dateParse.isValid() ? dateParse : null;
            }
            if (this.maxDate != null) {
                const dateParse = moment(this.maxDate);
                this.maxDate = dateParse.isValid() ? dateParse : null;
            }
            if (this.minTime != null) {
                const dateParse = moment(this.minTime, this.formatters.time);
                this.minTime = dateParse.isValid() ? dateParse : null;
            }
            if (this.maxTime != null) {
                const dateParse = moment(this.maxTime, this.formatters.time);
                this.maxTime = dateParse.isValid() ? dateParse : null;
            }
            this.typeChanged(this.type);
            this.themeChanged(this.theme);
        }
        attached() {
            this.variantChanged(this.variant);
        }
        toggleDialog(display) {
            if (this.showDialog) {
                this.showDialog = false;
                return;
            }
            if (this.disabled || this.readonly) {
                return;
            }
            this.display = display;
            this.showDialog = true;
        }
        blur() {
            if (this.showDialog) {
                // if the dialog is opened, we consider that the most accurate value
                // comes from the dialog and bring back its value
                this.valueChanged(this.value);
                return;
            }
            // if the dialog is not opened, the textbox has the most accurate value
            // and therefore we validate it and assign it to component
            this.changeTextboxValue();
        }
        changeTextboxValue() {
            if (!this.textboxValue) {
                this.value = null;
                return;
            }
            let parseValue;
            if (this.type === 'date') {
                parseValue = moment(this.textboxValue, this.formatters.date);
            }
            else if (this.type === 'time') {
                parseValue = moment(this.textboxValue, this.formatters.time);
            }
            else {
                parseValue = moment(this.textboxValue, this.formatters.datetime);
            }
            if (parseValue.isValid() &&
                DatetimeUtility.dateOutOfRange(parseValue, this.minDate, this.maxDate, this.config) === false) {
                this.value = parseValue.toDate();
            }
            else {
                this.value = null;
                this.textboxValue = '';
            }
        }
        typeChanged(newValue) {
            newValue = newValue.toLowerCase();
            if (newValue === 'time') {
                this.type = newValue;
            }
            else if (newValue === 'date') {
                this.type = newValue;
            }
            else {
                this.type = 'datetime';
            }
            this.valueChanged(this.value);
        }
        valueChanged(newValue) {
            if (newValue == null) {
                return;
            }
            if (this.type === 'datetime') {
                this.textboxValue = moment(newValue).format(this.formatters.datetime);
            }
            if (this.type === 'date') {
                this.textboxValue = moment(newValue).format(this.formatters.date);
            }
            if (this.type === 'time') {
                this.textboxValue = moment(newValue).format(this.formatters.time);
            }
        }
        minDateChanged(newValue) {
            if (newValue != null && newValue instanceof moment === false) {
                const dateParse = moment(newValue);
                this.minDate = dateParse.isValid() ? dateParse : null;
            }
        }
        maxDateChanged(newValue) {
            if (newValue != null && newValue instanceof moment === false) {
                const dateParse = moment(newValue);
                this.maxDate = dateParse.isValid() ? dateParse : null;
            }
        }
        minTimeChanged(newValue) {
            if (newValue != null && newValue instanceof moment === false) {
                const dateParse = moment(newValue, this.formatters.time);
                this.minTime = dateParse.isValid() ? dateParse : null;
            }
        }
        maxTimeChanged(newValue) {
            if (newValue != null && newValue instanceof moment === false) {
                const dateParse = moment(newValue, this.formatters.time);
                this.maxTime = dateParse.isValid() ? dateParse : null;
            }
        }
        themeChanged(newValue) {
            if (newValue != null && newValue.themeKey == null) {
                newValue.themeKey = 'datepicker';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        }
        focusedChanged(focused) {
            this.element.dispatchEvent(DOM.createCustomEvent(focused ? 'focus' : 'blur', { bubbles: false }));
        }
        focusInput() {
            this.textbox.focus();
        }
        variantChanged(newValue) {
            this.element.style.backgroundColor = newValue === 'outline' ?
                this.element.style.backgroundColor = getBackgroundColorThroughParents(this.element) :
                '';
        }
        get placeholderMode() {
            return typeof this.label !== 'string' || this.label.length === 0;
        }
    };
    __decorate([
        bindable
    ], UxDatepicker.prototype, "theme", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "display", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "type", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "initialDate", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "minTime", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "maxTime", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "minDate", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "maxDate", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "config", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "autofocus", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "disabled", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "readonly", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "label", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "placeholder", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "variant", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "dense", void 0);
    __decorate([
        bindable
    ], UxDatepicker.prototype, "formatters", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay })
    ], UxDatepicker.prototype, "value", void 0);
    __decorate([
        observable
    ], UxDatepicker.prototype, "focused", void 0);
    __decorate([
        computedFrom('label')
    ], UxDatepicker.prototype, "placeholderMode", null);
    UxDatepicker = __decorate([
        inject(Element, ViewResources, StyleEngine),
        customElement('ux-datepicker'),
        useView(PLATFORM.moduleName('./ux-datepicker.html'))
        // @inlineView(
        //   UX_DATEPICKER_VIEW,
        //   [PLATFORM.moduleName('@aurelia-ux/datepicker/ux-datepicker.css')]
        // )
    ], UxDatepicker);
    return UxDatepicker;
})();
export { UxDatepicker };
//# sourceMappingURL=ux-datepicker.js.map