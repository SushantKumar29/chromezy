import { ReactNode } from "react";
import { m, MotionProps } from "framer-motion";

export interface MotionWrapperProps {
  as?: keyof typeof m;
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  [key: string]: unknown;
}

export interface MockMotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  motionProps?: {
    initial?: Record<string, unknown>;
    whileInView?: Record<string, unknown>;
    viewport?: Record<string, unknown>;
    transition?: Record<string, unknown>;
  };
  as?: React.ElementType;
  id?: string;
}
