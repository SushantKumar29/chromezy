"use client";

import { MotionWrapperProps } from "@/app/types/motionWrapper";
import { LazyMotion, domAnimation, m } from "framer-motion";

export function MotionWrapper({
  as = "div",
  children,
  className,
  motionProps = {},
  ...rest
}: MotionWrapperProps) {
  const MotionComponent = m[as as keyof typeof m] as React.ElementType;

  return (
    <LazyMotion features={domAnimation}>
      <MotionComponent className={className} {...motionProps} {...rest}>
        {children}
      </MotionComponent>
    </LazyMotion>
  );
}

export default MotionWrapper;
