import { PLATFORM } from 'aurelia-pal';
import { Disposable } from 'aurelia-binding';

/** Utility class that assists with designing a responsive site. */
export class UxResponsiveUtilities implements Disposable  {

  /** Current screen height that can be used to set custom breakpoints. */
  public height: number;

  /** Current screen width that can be used to set custom breakpoints. */
  public width: number;

  /** Visible on screens smaller than 480px. */
  public xs: boolean = false;

  /** Visible on screens larger than 480px, and smaller than 960px. */
  public sm: boolean = false;

  /** Visible on screens larger than 960px, and smaller than 1280px. */
  public md: boolean = false;

  /** Visible on screens larger than 1280px, and smaller than 1925px. */
  public lg: boolean = false;

  /** Visible on screens larger than 1925px. */
  public xl: boolean = false;

  private recentlyUpdated = false;

  constructor() {
    window.addEventListener('resize', () => this.calculateResponsiveValues());

    this.calculateResponsiveValues();
  }

  private calculateResponsiveValues() {
    if (this.recentlyUpdated) {
      return;
    }

    this.recentlyUpdated = true;

    this.height = PLATFORM.global.innerHeight;
    this.width = PLATFORM.global.innerWidth;

    this.xs = this.width <= 480;
    this.sm = this.width > 480 && this.width <= 960;
    this.md = this.width > 960 && this.width <= 1280;
    this.lg = this.width > 1280 && this.width <= 1925;
    this.xl = this.width > 1925;

    setTimeout(() => this.recentlyUpdated = false, 250);
  }

  public dispose() {
    window.removeEventListener('resize', this.calculateResponsiveValues);
  }
}
