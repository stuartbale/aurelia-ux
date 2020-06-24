import { UxTheme } from '@aurelia-ux/core';

export class UxTabTheme implements UxTheme {
  public themeKey: string = 'tab';

  public foreground?: string;
  public foregroundLabel?: string;
  public background?: string;
  public backgroundHover?: string;
  public activeColor?: string;

  public borderWidth?: string;
  public iconSize?: string;

  public deleteBackground: string;
  public deleteForeground: string;
}
