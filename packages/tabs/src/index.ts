import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { UxTabs } from './ux-tabs';
import { UxTab } from './ux-tab';
import { UxTabPanel } from './ux-tab-panel';
import { UxTabList } from './ux-tab-list';

export { UxTabsTheme } from './ux-tabs-theme';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./ux-tabs'),
    PLATFORM.moduleName('./ux-tab'),
    PLATFORM.moduleName('./ux-tab-panel'),
    PLATFORM.moduleName('./ux-tab-list')
  ]);
}

export { UxTabs };
export { UxTab };
export { UxTabPanel };
export { UxTabList };
