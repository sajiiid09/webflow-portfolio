export type LenisOptions = {
  smoothWheel?: boolean;
  duration?: number;
};

/**
 * Lightweight stubbed Lenis API to provide smooth scrolling without external dependency constraints.
 */
export class Lenis {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(_options?: LenisOptions) {}

  raf() {
    /* noop: handled by ReactLenis */
  }

  destroy() {
    /* noop */
  }
}
