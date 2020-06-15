import { __decorate } from "tslib";
import { customElement, bindable, useView, PLATFORM, processContent, ViewCompiler, ViewResources, inject, Optional, Container, TaskQueue } from 'aurelia-framework';
import { StyleEngine } from '@aurelia-ux/core';
import { UxDefaultTabsConfiguration } from './ux-default-tabs-configuration';
let id = 0;
const templateLookup = {};
const getNextNodeTemplateId = () => ++id;
let UxTabs = /** @class */ (() => {
    var UxTabs_1;
    let UxTabs = UxTabs_1 = class UxTabs {
        constructor(element, 
        // private taskQueue: TaskQueue,
        styleEngine, defaultConfiguration, container) {
            this.element = element;
            this.styleEngine = styleEngine;
            if (defaultConfiguration.theme) {
                this.theme = defaultConfiguration.theme;
            }
            this.tabViewFactory = UxTabs_1.getTabFactory(element, container);
        }
        static processContent(_viewCompiler, _resources, element, _instruction) {
            const tab = element.querySelector('ux-tab');
            if (tab) {
                const nodeTemplateId = getNextNodeTemplateId();
                element.setAttribute('data-template-id', nodeTemplateId.toString());
                templateLookup[nodeTemplateId] = tab.innerHTML;
            }
            element.innerHTML = '';
            return false;
        }
        /**
         * @param element the host element of a <ux-tabs/>
         * @param container the container associated with a <ux-tabs/>
         */
        static getTabFactory(element, container) {
            const parent = container.parent ? container.parent.get(Optional.of(UxTabs_1)) : null;
            const isRoot = !parent;
            // a root ux-tab means a consumer defined one
            // this potentially contains the template for the tab
            if (isRoot) {
                const nodeTemplateId = element.getAttribute('data-template-id');
                if (nodeTemplateId && templateLookup[nodeTemplateId]) {
                    const nodeTemplate = templateLookup[nodeTemplateId];
                    const nodeViewFactory = container.get(ViewCompiler)
                        .compile(`<template>${nodeTemplate}</template>`, container.get(ViewResources));
                    return nodeViewFactory;
                }
                else {
                    // create a default <ux-tree-node/> factory
                    return container.get(ViewCompiler).compile('<template>${$node}</template>', container.get(ViewResources));
                }
            }
            else {
                // if it's not a root <ux-tabs/>
                // assume that the parent has already built the node factory and simply get it from there
                return parent.nodeViewFactory;
            }
        }
        themeChanged(newValue) {
            if (newValue !== null && !newValue.themeKey) {
                newValue.themeKey = 'tabs';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        }
        tabClicked(t) {
            if (this.selectedTab) {
                this.selectedTab.selected = false;
            }
            t.selected = true;
            this.selectedTab = t;
            this.element.dispatchEvent(new CustomEvent(UxTabs_1.TAB_SELECTED_EVENT, { detail: { tab: t }, bubbles: true }));
            return true;
        }
        dispatchEvent(type, node) {
            this.element.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { node } }));
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
        inject(Element, TaskQueue, StyleEngine, UxDefaultTabsConfiguration, Container),
        customElement('ux-tabs'),
        useView(PLATFORM.moduleName('./ux-tabs.html')),
        processContent(UxTabs_1.processContent)
    ], UxTabs);
    return UxTabs;
})();
export { UxTabs };
//# sourceMappingURL=ux-tabs.js.map