import { PLATFORM } from 'aurelia-framework';
import { UxTab } from './ux-tab';
export { UxTabTheme } from './ux-tab-theme';
export { UxTab };
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./ux-tabs'),
        PLATFORM.moduleName('./ux-tab')
    ]);
}
//# sourceMappingURL=index.js.map