"use client";

import { MotionWrapperProps } from "@/app/types/motionWrapper";
import { m } from "framer-motion";

export function MotionWrapper({
  as = "div",
  children,
  className,
  motionProps = {},
  ...rest
}: MotionWrapperProps) {
  const MotionComponent = m[as as keyof typeof m] as React.ElementType;

  return (
    <MotionComponent className={className} {...motionProps} {...rest}>
      {children}
    </MotionComponent>
  );
}

export default MotionWrapper;
