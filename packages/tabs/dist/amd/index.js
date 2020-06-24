define(["require", "exports", "aurelia-framework", "./ux-tabs", "./ux-tabs-theme"], function (require, exports, aurelia_framework_1, ux_tabs_1, ux_tabs_theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UxTabs = exports.configure = void 0;
    Object.defineProperty(exports, "UxTabs", { enumerable: true, get: function () { return ux_tabs_1.UxTabs; } });
    Object.defineProperty(exports, "UxTabsTheme", { enumerable: true, get: function () { return ux_tabs_theme_1.UxTabsTheme; } });
    function configure(config) {
        config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./ux-tabs'));
    }
    exports.configure = configure;
});
//# sourceMappingURL=index.js.map