import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Preloader from "@/app/shared/ui/Preloader";
import { MockMotionWrapperProps, MotionWrapperProps } from "@/app/types/motionWrapper";

/*
  Here we are testing the shared Preloader component
  This test includes:
  - Rendering loading spinner and text
  - Rendering the sections correctly (The sections are passed as props)
  - Rendering correct CSS classes
  - Rendering correct attributes for hight priority images
*/

// Here we are mocking the MotionWrapper component because the sections are wrapped in it
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

describe("Preloader", () => {
  // Here we are creating some mock sections to render
  const mockSections = [
    <div key="1" data-testid="section-1">
      Section 1
    </div>,
    <div key="2" data-testid="section-2">
      Section 2
    </div>,
    <div key="3" data-testid="section-3">
      Section 3
    </div>,
  ];

  it("renders loading spinner and text", () => {
    render(<Preloader sections={mockSections} />);

    const spinner = document.querySelector(".animate-spin");
    expect(spinner).toBeInTheDocument();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders all sections", () => {
    render(<Preloader sections={mockSections} />);

    expect(screen.getByTestId("section-1")).toBeInTheDocument();
    expect(screen.getByTestId("section-2")).toBeInTheDocument();
    expect(screen.getByTestId("section-3")).toBeInTheDocument();
  });

  it("renders two MotionWrapper components", () => {
    render(<Preloader sections={mockSections} />);

    const wrappers = screen.getAllByTestId("motion-wrapper");
    expect(wrappers).toHaveLength(2);
  });

  // This section tests the first Motion Wrapper component render
  it("applies correct motion props to first wrapper (preloader)", () => {
    render(<Preloader sections={mockSections} />);

    const wrapper = screen.getAllByTestId("motion-wrapper")[0];
    const motionProps = JSON.parse(wrapper.getAttribute("data-motion-props") || "{}");

    expect(motionProps.initial).toEqual({ opacity: 1 });
    expect(motionProps.animate).toEqual({ opacity: 0 });
    expect(motionProps.transition).toEqual({ duration: 0.5, delay: 2 });
  });

  // This section tests the second Motion Wrapper component render
  it("applies correct motion props to second wrapper (content)", () => {
    render(<Preloader sections={mockSections} />);

    const wrapper = screen.getAllByTestId("motion-wrapper")[1];
    const motionProps = JSON.parse(wrapper.getAttribute("data-motion-props") || "{}");

    expect(motionProps.initial).toEqual({ opacity: 0 });
    expect(motionProps.animate).toEqual({ opacity: 1 });
    expect(motionProps.transition).toEqual({ duration: 0.5, delay: 2.2 });
  });
});
