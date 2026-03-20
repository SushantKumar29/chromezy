import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Insights from "@/app/components/sections/Insights";
import { INSIGHTS_CONTENT } from "@/app/mock/constants";
import { MockMotionWrapperProps } from "@/app/types/motionWrapper";

/*
  Here we are testing the Insights component
  This test includes:
  - Rendering title and subtitle
  - Rendering the cards with correct props
*/

// Here we are mocking the InsightCard component because we are rendering InsightCards in the Insights component
jest.mock("../../components/cards/InsightCard", () => {
  interface MockInsightCardProps {
    insight: {
      title: string;
      description: string;
      image: string;
    };
  }

  return function MockInsightCard({ insight }: MockInsightCardProps) {
    return (
      <div data-testid="insight-card">
        <h3>{insight.title}</h3>
        <p>{insight.description}</p>
        <img src={insight.image} alt={insight.title} />
      </div>
    );
  };
});

// Here we are mocking the MotionWrapper component because the elements are wrapped in it
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

describe("Insights", () => {
  // Here we are checking the title and subtitle
  it("renders title and subtitle", () => {
    render(<Insights />);

    expect(screen.getByText(INSIGHTS_CONTENT.title)).toBeInTheDocument();
    expect(screen.getByText(INSIGHTS_CONTENT.subtitle)).toBeInTheDocument();
  });

  // Here we are checking if all the cards are rendered properly
  it("renders all insight cards", () => {
    render(<Insights />);

    const cards = screen.getAllByTestId("insight-card");
    expect(cards).toHaveLength(INSIGHTS_CONTENT.insights.length);

    INSIGHTS_CONTENT.insights.forEach((insight, index) => {
      const cardElement = screen.getAllByTestId("insight-card")[index];
      expect(cardElement).toHaveTextContent(insight.title);
      expect(cardElement).toHaveTextContent(insight.description);
      const image = cardElement.querySelector("img");
      expect(image).toHaveAttribute("src", insight.image);
    });
  });

  // Here we are checking if the MotionWrapper has the correct motion props
  it("renders MotionWrapper for section with correct motion props", () => {
    render(<Insights />);

    const wrappers = screen.getAllByTestId("motion-wrapper");
    const sectionWrapper = wrappers[0];
    const motionProps = JSON.parse(sectionWrapper.getAttribute("data-motion-props") || "{}");

    expect(motionProps.initial).toEqual({ opacity: 0, y: 22 });
    expect(motionProps.whileInView).toEqual({ opacity: 1, y: 0 });
    expect(motionProps.viewport).toEqual({ once: true, amount: 0.15 });
    expect(motionProps.transition).toEqual({ duration: 0.8, ease: "easeOut" });
  });
});
