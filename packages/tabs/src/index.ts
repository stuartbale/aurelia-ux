import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { UxDefaultTabsConfiguration } from './ux-default-tabs-configuration';
import { UxTabs } from './ux-tabs';

export function configure(config: FrameworkConfiguration, callback?: (config: UxDefaultTabsConfiguration) => void) {
  config.globalResources([
    PLATFORM.moduleName('./ux-tabs')
  ]);
  if (typeof callback === 'function') {
    const defaults = config.container.get(UxDefaultTabsConfiguration);
    callback(defaults);
  }
}

export { UxTabs, UxDefaultTabsConfiguration };
export { IUxTabsElement } from './i-ux-tabs-element';
export { ITab } from './i-tab';
export { UxTabsTheme } from './ux-tabs-theme';
