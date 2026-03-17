import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  name?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  name = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-[999px] font-semibold transition-all inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-[#4380FF] text-white shadow-[0px_22.3363px_17.869px_rgba(0,0,0,0.04),0px_100px_80px_rgba(0,0,0,0.07)] hover:bg-[#5a92ff]",
    secondary: "border border-white/10 bg-black/20 text-white hover:bg-white/10",
    ghost: "text-white/90 hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
    md: "px-4 py-2 text-sm md:px-5 md:py-2.5",
    lg: "px-5 py-3 text-base lg:px-6 lg:py-3.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button name={name} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
