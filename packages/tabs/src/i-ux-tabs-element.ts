import { IController } from '@aurelia-ux/core';
import { UxTabs } from './ux-tabs';

export interface IUxTabsElement extends HTMLElement {
  au: {
    controller: IController<UxTabs>;
    'ux-tabs': IController<UxTabs>;
  };
}
