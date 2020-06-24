import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { UxTabs } from './ux-tabs';

export { UxTabsTheme } from './ux-tabs-theme';

export function configure(config: FrameworkConfiguration) {
  config.globalResources(PLATFORM.moduleName('./ux-tabs'));
}

export { UxTabs };
