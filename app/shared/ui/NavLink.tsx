import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
}

export function NavLink({
  href,
  children,
  className = "",
  onClick,
  isMobile = false,
}: NavLinkProps) {
  const baseStyles = isMobile
    ? "rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
    : "rounded-[999px] px-3 py-2 text-white/90 hover:text-white xl:px-4 xl:py-2.5";

  return (
    <Link href={href} className={`${baseStyles} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
