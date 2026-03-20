import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Background from "@/app/shared/ui/Background";
import { MotionWrapperProps } from "@/app/types/motionWrapper";

/*
  Here we are testing the shared Background component
  THis test includes:
  - Rendering the component without crashing
  - Renders Motion Wrappers correctly
  - Renders correct CSS classes
  - Renders correct attributes for hight priority images

*/

// Here we are mocking the MotionWrapper component because the elements are wrapped in it
jest.mock("../../components/wrappers/MotionWrapper", () => {
  return function MockMotionWrapper({ children, className, ...rest }: MotionWrapperProps) {
    return (
      <div data-testid="motion-wrapper" className={className} {...rest}>
        {children}
      </div>
    );
  };
});

// Here we are creating constant for the Asset Image URL
jest.mock("../../mock/constants", () => ({
  IMAGE_BASE: "/test-images",
}));

// Here we are mocking styles to avoid undefined class name errors
jest.mock("../../styles/sections/Background.module.css", () => ({
  patternBackground: "mock-patternBackground",
  triangleImage: "mock-triangleImage",
  ballImage: "mock-ballImage",
  bgBallImage: "mock-bgBallImage",
}));

describe("Background", () => {
  it("renders without crashing", () => {
    render(<Background />);
    expect(screen.getByAltText("Triangle")).toBeInTheDocument();
    expect(screen.getByAltText("Main Ball")).toBeInTheDocument();
    expect(screen.getByAltText("Stripped Ball")).toBeInTheDocument();
  });

  it("renders pattern background with correct style", () => {
    render(<Background />);

    const patternDiv = document.querySelector(`.mock-patternBackground`);
    expect(patternDiv).toBeInTheDocument();
    expect(patternDiv).toHaveStyle({
      backgroundImage: "url(/test-images/hero/bg-gradient.svg)",
    });
  });

  it("renders three motion wrappers", () => {
    render(<Background />);

    const wrappers = screen.getAllByTestId("motion-wrapper");
    expect(wrappers).toHaveLength(3);
  });

  it("applies correct CSS classes to images", () => {
    render(<Background />);

    const triangleImage = screen.getByAltText("Triangle");
    const mainBallImage = screen.getByAltText("Main Ball");
    const strippedBallImage = screen.getByAltText("Stripped Ball");

    expect(triangleImage).toHaveClass("mock-triangleImage");
    expect(mainBallImage).toHaveClass("mock-ballImage");
    expect(strippedBallImage).toHaveClass("mock-bgBallImage");
  });

  it("has correct attributes for high priority images", () => {
    render(<Background />);

    const triangleImage = screen.getByAltText("Triangle");
    const mainBallImage = screen.getByAltText("Main Ball");

    expect(triangleImage).toHaveAttribute("loading", "eager");
    expect(triangleImage).toHaveAttribute("fetchpriority", "high");
    expect(mainBallImage).toHaveAttribute("fetchpriority", "auto");
  });
});
