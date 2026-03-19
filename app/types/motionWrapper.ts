import { ReactNode } from "react";
import { m, MotionProps } from "framer-motion";

export interface MotionWrapperProps {
  as?: keyof typeof m;
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  [key: string]: unknown;
}
