import { ReactNode } from "react";

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface NavLinksProps {
  variant: "desktop" | "mobile";
  onItemClick?: () => void;
}
