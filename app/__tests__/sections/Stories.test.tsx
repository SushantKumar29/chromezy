import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Stories from "@/app/components/sections/Stories";
import { STORIES_CONTENT } from "@/app/mock/constants";
import { MockMotionWrapperProps } from "@/app/types/motionWrapper";

/*
  This test includes:
  - Rendering the cards with correct props
*/

jest.mock("../../components/cards/StoryCard", () => {
  interface MockStoryCardProps {
    card: {
      title: string;
      subtitle: string;
      image: string;
    };
    large?: boolean;
  }

  return function MockStoryCard({ card, large }: MockStoryCardProps) {
    return (
      <div data-testid="story-card" data-large={large}>
        <h3>{card.title}</h3>
        <p>{card.subtitle}</p>
        <img src={card.image} alt={card.title} />
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

describe("Stories", () => {
  it("renders all story cards", () => {
    render(<Stories />);

    const cards = screen.getAllByTestId("story-card");
    expect(cards).toHaveLength(STORIES_CONTENT.cards.length);
  });

  it("passes correct card data to each StoryCard", () => {
    render(<Stories />);

    STORIES_CONTENT.cards.forEach((card, index) => {
      const cardElement = screen.getAllByTestId("story-card")[index];
      expect(cardElement).toHaveTextContent(card.title);
      expect(cardElement).toHaveTextContent(card.subtitle);
      const image = cardElement.querySelector("img");
      expect(image).toHaveAttribute("src", card.image);
    });
  });

  it("renders MotionWrapper with correct motion props", () => {
    render(<Stories />);

    const wrapper = screen.getByTestId("motion-wrapper");
    const motionProps = JSON.parse(wrapper.getAttribute("data-motion-props") || "{}");

    expect(motionProps.initial).toEqual({ opacity: 0, y: 22 });
    expect(motionProps.whileInView).toEqual({ opacity: 1, y: 0 });
    expect(motionProps.viewport).toEqual({ once: true, amount: 0.2 });
    expect(motionProps.transition).toEqual({ duration: 0.8, ease: "easeOut" });
  });
});
