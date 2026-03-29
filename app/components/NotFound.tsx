import { NOT_FOUND_CONTENT } from "../mock/constants";
import { NavLink } from "../shared/ui/NavLink";

export default function NotFoundComponent() {
  const content = NOT_FOUND_CONTENT;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-8xl font-bold text-primary mb-4">{content.code}</div>

      <p className="text-primary/60 text-center mb-8">{content.title}</p>

      <NavLink href="/" className="transition-colors underline underline-offset-4">
        {content.linkText}
      </NavLink>
    </div>
  );
}
