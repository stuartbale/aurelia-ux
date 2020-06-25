"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UxTab = exports.UxTabs = exports.configure = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var ux_tabs_1 = require("./ux-tabs");
Object.defineProperty(exports, "UxTabs", { enumerable: true, get: function () { return ux_tabs_1.UxTabs; } });
var ux_tab_1 = require("./ux-tab");
Object.defineProperty(exports, "UxTab", { enumerable: true, get: function () { return ux_tab_1.UxTab; } });
var ux_tabs_theme_1 = require("./ux-tabs-theme");
Object.defineProperty(exports, "UxTabsTheme", { enumerable: true, get: function () { return ux_tabs_theme_1.UxTabsTheme; } });
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./ux-tabs'), aurelia_framework_1.PLATFORM.moduleName('./ux-tab')]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map