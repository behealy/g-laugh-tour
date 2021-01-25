import React from "react";
import * as math from "../utils/math";
import "./module.css";
import { SCROLLWATCHERS, WINDOW_SCROLL_Y } from "../pages/useMouseWheel";

interface ModuleProps {
  scrollStop0: number;
  scrollStop1: number;
  moduleHeight: number;
}


const scrollProportion = (y, s0, s1) => {
  return y - s0 / (s1 - s0);
};

const Module: React.FC<ModuleProps> = ({
  scrollStop0,
  scrollStop1,
  moduleHeight,
}) => {
  

  return <section>
    <div className="bar" ref={SCROLLWATCHERS.setRef("mod-1-top-bar", (scrollY, ref) => {
      if (ref) {
        ref.style.transform = `
          translateX(-5%)
         rotate(${math.clampedMap(scrollY, scrollStop0, scrollStop1, 4, -3)}deg)
          translateY(${math.clampedMap(scrollY, scrollStop0, scrollStop1, 50, -200)}%)
        `
      }
    })}></div>
  </section>
}
Module.displayName = "Module";
export default Module;