import { NavLinkProps } from "@/app/types";
import Link from "next/link";

export function NavLink({ href, children, className = "", onClick }: NavLinkProps) {
  return (
    <Link href={href} className={` ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
