import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className="w-full px-4 sm:px-6">
      <div className={`mx-auto max-w-full sm:max-w-8/10 ${className}`}>{children}</div>
    </div>
  );
}
