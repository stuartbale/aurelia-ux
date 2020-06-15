import { PLATFORM } from 'aurelia-framework';
import { UxDefaultTabsConfiguration } from './ux-default-tabs-configuration';
import { UxTabs } from './ux-tabs';
export function configure(config, callback) {
    config.globalResources([
        PLATFORM.moduleName('./ux-tabs')
    ]);
    if (typeof callback === 'function') {
        var defaults = config.container.get(UxDefaultTabsConfiguration);
        callback(defaults);
    }
}
export { UxTabs, UxDefaultTabsConfiguration };
export { UxTabsTheme } from './ux-tabs-theme';
//# sourceMappingURL=index.js.map