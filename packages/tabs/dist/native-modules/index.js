import { PLATFORM } from 'aurelia-framework';
import { UxTabs } from './ux-tabs';
import { UxTab } from './ux-tab';
export { UxTabsTheme } from './ux-tabs-theme';
export function configure(config) {
    config.globalResources([PLATFORM.moduleName('./ux-tabs'), PLATFORM.moduleName('./ux-tab')]);
}
export { UxTabs };
export { UxTab };
//# sourceMappingURL=index.js.map