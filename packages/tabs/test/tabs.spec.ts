import './setup';
import { UxTabs } from '../src/index';
import { Container, BindingLanguage, ViewFactory } from 'aurelia-framework';
import { TemplatingBindingLanguage } from 'aurelia-templating-binding';

describe('@aurelia-ux/tabs', () => {
  describe('tabs.spec.ts', () => {
    it('exports', () => {
      const container = new Container();
      const host = document.createElement('div');
      container.registerInstance(Element, host);
      container.registerSingleton(BindingLanguage, TemplatingBindingLanguage);
      const uxTreeView = container.get(UxTabs);

      expect(uxTreeView).toBeDefined();
      expect(uxTreeView.nodeViewFactory instanceof ViewFactory).toBe(true);
    });
  });
});
