"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = exports.UxTab = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var ux_tab_1 = require("./ux-tab");
Object.defineProperty(exports, "UxTab", { enumerable: true, get: function () { return ux_tab_1.UxTab; } });
var ux_tab_theme_1 = require("./ux-tab-theme");
Object.defineProperty(exports, "UxTabTheme", { enumerable: true, get: function () { return ux_tab_theme_1.UxTabTheme; } });
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./ux-tabs'),
        aurelia_framework_1.PLATFORM.moduleName('./ux-tab')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map