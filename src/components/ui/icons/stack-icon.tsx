import { forwardRef, useEffect, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

export interface StackIconProps extends AnimatedIconProps {
  loop?: boolean;
  speed?: number;
}

export const StackIcon = forwardRef<AnimatedIconHandle, StackIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "", loop = true, speed = 1.3 },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(() => {
      if (loop) {
        animate(
          ".layer-top",
          { y: [-0.5, -3.5, -0.5], scale: [1, 1.08, 1] },
          { duration: speed, ease: "easeInOut", repeat: Infinity }
        );
        animate(
          ".layer-bottom",
          { y: [0, 2.5, 0], opacity: [1, 0.65, 1] },
          { duration: speed, ease: "easeInOut", repeat: Infinity }
        );
      } else {
        animate(
          ".layer-top",
          { y: -3, scale: 1.08 },
          { duration: 0.25, ease: "easeOut" }
        );
        animate(
          ".layer-bottom",
          { y: 2, opacity: 0.65 },
          { duration: 0.25, ease: "easeOut" }
        );
      }
    }, [animate, loop, speed]);

    const stop = useCallback(() => {
      animate(
        ".layer-top",
        { y: 0, scale: 1 },
        { duration: 0.2, ease: "easeInOut" }
      );
      animate(
        ".layer-bottom",
        { y: 0, opacity: 1 },
        { duration: 0.2, ease: "easeInOut" }
      );
    }, [animate]);

    useEffect(() => {
      if (loop) {
        start();
      }
    }, [loop, start]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={!loop ? start : undefined}
        onHoverEnd={!loop ? stop : undefined}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`inline-block ${className}`}
        style={{ overflow: "visible" }}
      >
        {/* Top layer */}
        <motion.path className="layer-top" d="M12 6l-8 4l8 4l8 -4l-8 -4" />

        {/* Bottom layer */}
        <motion.path className="layer-bottom" d="M4 14l8 4l8 -4" />
      </motion.svg>
    );
  }
);

StackIcon.displayName = "StackIcon";
export default StackIcon;
