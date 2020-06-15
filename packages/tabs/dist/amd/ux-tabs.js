define(["require", "exports", "tslib", "aurelia-framework", "@aurelia-ux/core", "./ux-default-tabs-configuration"], function (require, exports, tslib_1, aurelia_framework_1, core_1, ux_default_tabs_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxTabs = void 0;
    var id = 0;
    var templateLookup = {};
    var getNextNodeTemplateId = function () { return ++id; };
    var UxTabs = /** @class */ (function () {
        function UxTabs(element, 
        // private taskQueue: TaskQueue,
        styleEngine, defaultConfiguration, container) {
            this.element = element;
            this.styleEngine = styleEngine;
            if (defaultConfiguration.theme) {
                this.theme = defaultConfiguration.theme;
            }
            this.tabViewFactory = UxTabs_1.getTabFactory(element, container);
        }
        UxTabs_1 = UxTabs;
        UxTabs.processContent = function (_viewCompiler, _resources, element, _instruction) {
            var tab = element.querySelector('ux-tab');
            if (tab) {
                var nodeTemplateId = getNextNodeTemplateId();
                element.setAttribute('data-template-id', nodeTemplateId.toString());
                templateLookup[nodeTemplateId] = tab.innerHTML;
            }
            element.innerHTML = '';
            return false;
        };
        /**
         * @param element the host element of a <ux-tabs/>
         * @param container the container associated with a <ux-tabs/>
         */
        UxTabs.getTabFactory = function (element, container) {
            var parent = container.parent ? container.parent.get(aurelia_framework_1.Optional.of(UxTabs_1)) : null;
            var isRoot = !parent;
            // a root ux-tab means a consumer defined one
            // this potentially contains the template for the tab
            if (isRoot) {
                var nodeTemplateId = element.getAttribute('data-template-id');
                if (nodeTemplateId && templateLookup[nodeTemplateId]) {
                    var nodeTemplate = templateLookup[nodeTemplateId];
                    var nodeViewFactory = container.get(aurelia_framework_1.ViewCompiler)
                        .compile("<template>" + nodeTemplate + "</template>", container.get(aurelia_framework_1.ViewResources));
                    return nodeViewFactory;
                }
                else {
                    // create a default <ux-tree-node/> factory
                    return container.get(aurelia_framework_1.ViewCompiler).compile('<template>${$node}</template>', container.get(aurelia_framework_1.ViewResources));
                }
            }
            else {
                // if it's not a root <ux-tabs/>
                // assume that the parent has already built the node factory and simply get it from there
                return parent.nodeViewFactory;
            }
        };
        UxTabs.prototype.themeChanged = function (newValue) {
            if (newValue !== null && !newValue.themeKey) {
                newValue.themeKey = 'tabs';
            }
            this.styleEngine.applyTheme(newValue, this.element);
        };
        UxTabs.prototype.tabClicked = function (t) {
            if (this.selectedTab) {
                this.selectedTab.selected = false;
            }
            t.selected = true;
            this.selectedTab = t;
            this.element.dispatchEvent(new CustomEvent(UxTabs_1.TAB_SELECTED_EVENT, { detail: { tab: t }, bubbles: true }));
            return true;
        };
        UxTabs.prototype.dispatchEvent = function (type, node) {
            this.element.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { node: node } }));
        };
        var UxTabs_1;
        UxTabs.TAB_SELECTED_EVENT = 'tab-selected';
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxTabs.prototype, "tabs", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable
        ], UxTabs.prototype, "theme", void 0);
        UxTabs = UxTabs_1 = tslib_1.__decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue, core_1.StyleEngine, ux_default_tabs_configuration_1.UxDefaultTabsConfiguration, aurelia_framework_1.Container),
            aurelia_framework_1.customElement('ux-tabs'),
            aurelia_framework_1.useView(aurelia_framework_1.PLATFORM.moduleName('./ux-tabs.html')),
            aurelia_framework_1.processContent(UxTabs_1.processContent)
        ], UxTabs);
        return UxTabs;
    }());
    exports.UxTabs = UxTabs;
});
//# sourceMappingURL=ux-tabs.js.map