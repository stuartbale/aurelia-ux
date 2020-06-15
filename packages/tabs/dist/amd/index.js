define(["require", "exports", "aurelia-framework", "./ux-default-tabs-configuration", "./ux-tabs", "./ux-tabs-theme"], function (require, exports, aurelia_framework_1, ux_default_tabs_configuration_1, ux_tabs_1, ux_tabs_theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxDefaultTabsConfiguration = exports.UxTabs = exports.configure = void 0;
    Object.defineProperty(exports, "UxDefaultTabsConfiguration", { enumerable: true, get: function () { return ux_default_tabs_configuration_1.UxDefaultTabsConfiguration; } });
    Object.defineProperty(exports, "UxTabs", { enumerable: true, get: function () { return ux_tabs_1.UxTabs; } });
    function configure(config, callback) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./ux-tabs')
        ]);
        if (typeof callback === 'function') {
            var defaults = config.container.get(ux_default_tabs_configuration_1.UxDefaultTabsConfiguration);
            callback(defaults);
        }
    }
    exports.configure = configure;
    Object.defineProperty(exports, "UxTabsTheme", { enumerable: true, get: function () { return ux_tabs_theme_1.UxTabsTheme; } });
});
//# sourceMappingURL=index.js.map