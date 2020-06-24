define(["require", "exports", "aurelia-framework", "./ux-tab", "./ux-tab-theme"], function (require, exports, aurelia_framework_1, ux_tab_1, ux_tab_theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = exports.UxTab = void 0;
    Object.defineProperty(exports, "UxTab", { enumerable: true, get: function () { return ux_tab_1.UxTab; } });
    Object.defineProperty(exports, "UxTabTheme", { enumerable: true, get: function () { return ux_tab_theme_1.UxTabTheme; } });
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./ux-tabs'),
            aurelia_framework_1.PLATFORM.moduleName('./ux-tab')
        ]);
    }
    exports.configure = configure;
});
//# sourceMappingURL=index.js.map