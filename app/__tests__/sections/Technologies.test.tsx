import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Technologies from "@/app/components/sections/Technologies";
import { TECHNOLOGIES_CONTENT } from "@/app/mock/constants";
import { MockMotionWrapperProps } from "@/app/types/motionWrapper";
import { ImageProps } from "next/image";
import { Tag } from "@/app/types";

/*
  This test includes:
  - Rendering Spiral image
  - Rendering category numbers and titles
  - Rendering TechTag components
*/

// Mock next/image - use a div instead of img to avoid ESLint warning
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    const imgProps: Record<string, unknown> = { ...props };
    return <img {...imgProps} alt={props.alt} />;
  },
}));

jest.mock("../../components/cards/TechTag", () => {
  return function MockTechTag({ label, icon }: Tag) {
    return (
      <div data-testid="tech-tag" data-icon={icon ? "has-icon" : "no-icon"}>
        {icon && <img src={icon} alt={label} />}
        <span>{label}</span>
      </div>
    );
  };
});

jest.mock("../../components/wrappers/MotionWrapper", () => {
  return function MockMotionWrapper({
    children,
    className,
    motionProps,
    as: Component = "div",
    id,
  }: MockMotionWrapperProps) {
    return (
      <Component
        data-testid="motion-wrapper"
        data-motion-props={JSON.stringify(motionProps)}
        className={className}
        id={id}
      >
        {children}
      </Component>
    );
  };
});

describe("Technologies", () => {
  it("renders Spiral image", () => {
    render(<Technologies />);

    const spiralImage = screen.getByAltText("Spiral");
    expect(spiralImage).toBeInTheDocument();
    expect(spiralImage).toHaveAttribute("src", TECHNOLOGIES_CONTENT.images.spiralImg);
  });

  it("renders correct category numbers with titles", () => {
    render(<Technologies />);

    TECHNOLOGIES_CONTENT.categories.forEach((category) => {
      expect(screen.getByText(category.id)).toBeInTheDocument();
      expect(screen.getByText(category.title)).toBeInTheDocument();
    });
  });

  it("passes correct tag data to TechTag components", () => {
    render(<Technologies />);

    const allTags = TECHNOLOGIES_CONTENT.categories.flatMap((cat) => cat.tags);
    const renderedTags = screen.getAllByTestId("tech-tag");

    allTags.forEach((tag, index) => {
      expect(renderedTags[index]).toHaveTextContent(tag.label);

      if (tag.icon) {
        expect(renderedTags[index]).toHaveAttribute("data-icon", "has-icon");
        const img = renderedTags[index].querySelector("img");
        expect(img).toHaveAttribute("src", tag.icon);
      } else {
        expect(renderedTags[index]).toHaveAttribute("data-icon", "no-icon");
      }
    });
  });

  it("renders MotionWrapper for section with correct motion props", () => {
    render(<Technologies />);

    const wrappers = screen.getAllByTestId("motion-wrapper");
    const sectionWrapper = wrappers[0];
    const motionProps = JSON.parse(sectionWrapper.getAttribute("data-motion-props") || "{}");

    expect(motionProps.initial).toEqual({ opacity: 0, y: 22 });
    expect(motionProps.whileInView).toEqual({ opacity: 1, y: 0 });
    expect(motionProps.viewport).toEqual({ once: true, amount: 0.15 });
    expect(motionProps.transition).toEqual({ duration: 0.8, ease: "easeOut" });
  });
});
