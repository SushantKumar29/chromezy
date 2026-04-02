import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/sections/Hero";
import { HERO_CONTENT, IMAGE_BASE } from "@/app/mock/constants";
import { ImageProps } from "next/image";
import { MockMotionWrapperProps } from "@/app/types/motionWrapper";

/*
  This test includes:
  - Rendering text elements
  - Rendering background image
  - Rendering the stats
*/

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    const imgProps: Record<string, unknown> = { ...props };
    return <img {...imgProps} alt={props.alt} />;
  },
}));

jest.mock("@/app/components/wrappers/MotionWrapper", () => {
  return function MockMotionWrapper({
    children,
    className,
    motionProps,
    as: Component = "div",
  }: MockMotionWrapperProps) {
    return (
      <Component
        data-testid="motion-wrapper"
        data-motion-props={JSON.stringify(motionProps)}
        className={className}
      >
        {children}
      </Component>
    );
  };
});

jest.mock("@/app/styles/sections/Hero.module.css", () => ({
  bgFlower: "mock-bg-flower",
  highlightCyan: "mock-highlight-cyan",
  highlightBlue: "mock-highlight-blue",
  subtitle: "mock-subtitle",
}));

describe("Hero", () => {
  it("renders title with highlighted text", () => {
    render(<Hero />);

    expect(screen.getByText(HERO_CONTENT.title.from.prefix)).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.title.from.text)).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.title.to.prefix)).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.title.to.text)).toBeInTheDocument();

    const fromText = screen.getByText(HERO_CONTENT.title.from.text);
    const toText = screen.getByText(HERO_CONTENT.title.to.text);

    expect(fromText).toHaveClass("mock-highlight-cyan");
    expect(toText).toHaveClass("mock-highlight-blue");
  });

  it("renders subtitle", () => {
    render(<Hero />);

    expect(screen.getByText(HERO_CONTENT.subtitle)).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.subtitle)).toHaveClass("mock-subtitle");
  });

  it("renders description", () => {
    render(<Hero />);

    expect(screen.getByText(HERO_CONTENT.description)).toBeInTheDocument();
  });

  it("renders all stats", () => {
    render(<Hero />);

    HERO_CONTENT.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it("renders background flower image", () => {
    render(<Hero />);

    const flowerImage = screen.getByAltText("Background Flower");
    expect(flowerImage).toBeInTheDocument();
    expect(flowerImage).toHaveAttribute("src", `${IMAGE_BASE}/hero/bg-flower.png`);
    expect(flowerImage).toHaveClass("mock-bg-flower");
  });

  it("renders MotionWrapper with correct motion props", () => {
    render(<Hero />);

    const motionWrapper = screen.getByTestId("motion-wrapper");
    const motionProps = JSON.parse(motionWrapper.getAttribute("data-motion-props") || "{}");

    expect(motionProps.initial).toEqual({ opacity: 0, y: 18 });
    expect(motionProps.whileInView).toEqual({ opacity: 1, y: 0 });
    expect(motionProps.transition).toEqual({ duration: 0.8, ease: "easeOut" });
  });
});
