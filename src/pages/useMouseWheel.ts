
import * as React from "react";

let frame: any;

export let WINDOW_SCROLL_Y = 0;

window.addEventListener("mousewheel", (e: Event) => {
  if (frame) {
    cancelAnimationFrame(frame)
  }

  frame = requestAnimationFrame(() => {
    WINDOW_SCROLL_Y = window.scrollY;
    SCROLLWATCHERS.onScroll(window.scrollY);
  })
});

type HTMLRef = React.RefObject<HTMLElement>

type TransformerFunc = (scrollY: number, ref: HTMLElement) => void

interface ScrollControl {
  ref: HTMLElement;
  transformerFunc: TransformerFunc;
}

class ScrollingRefsMap extends Map<string, ScrollControl> {
  onScroll(scrollY: number) {
    this.forEach(sc => {
      sc.transformerFunc(scrollY, sc.ref);
    });
  }

  setRef(key: string, transformerFunc: TransformerFunc) {
    return (ref: HTMLElement | null) => {
      if (ref) {
        this.set(key, {
          ref,
          transformerFunc
        })
      }
    }
  };
}

export const SCROLLWATCHERS = new ScrollingRefsMap();