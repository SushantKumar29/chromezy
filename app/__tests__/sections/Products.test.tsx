import { render, screen } from "@testing-library/react";
import Products from "@/app/components/sections/Products";
import { PRODUCTS_CONTENT, IMAGE_BASE } from "@/app/mock/constants";
import { ImageProps } from "next/image";
import { ProductCardProps } from "@/app/types";
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
    if (imgProps.fill === true) {
      imgProps.fill = "true";
    }
    return <img {...imgProps} alt={props.alt} />;
  },
}));

jest.mock("@/app/components/cards/ProductCard", () => {
  return function MockProductCard({ title, description, cta, tone }: ProductCardProps) {
    return (
      <div data-testid="product-card" data-tone={tone}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button type="button">{cta}</button>
      </div>
    );
  };
});

jest.mock("@/app/components/wrappers/MotionWrapper", () => {
  return function MockMotionWrapper({
    children,
    className,
    motionProps,
    as: Component = "div",
    id,
    ...props
  }: MockMotionWrapperProps) {
    return (
      <Component
        data-testid="motion-wrapper"
        data-motion-props={JSON.stringify(motionProps)}
        className={className}
        id={id}
        {...props}
      >
        {children}
      </Component>
    );
  };
});

jest.mock("@/app/styles/sections/Products.module.css", () => ({
  bgBallImage: "mock-bg-ball-image",
  title: "mock-title",
  description: "mock-description",
}));

describe("Products", () => {
  it("renders title and description", () => {
    render(<Products />);

    const title = screen.getByText(PRODUCTS_CONTENT.title);
    const description = screen.getByText(PRODUCTS_CONTENT.description);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();

    expect(title).toHaveClass("mock-title");
    expect(description).toHaveClass("mock-description");
  });

  it("renders all product cards", () => {
    render(<Products />);

    const cards = screen.getAllByTestId("product-card");
    expect(cards).toHaveLength(PRODUCTS_CONTENT.cards.length);
  });

  it("passes correct props to each ProductCard", () => {
    render(<Products />);

    PRODUCTS_CONTENT.cards.forEach((card, index) => {
      const cardElement = screen.getAllByTestId("product-card")[index];
      expect(cardElement).toHaveTextContent(card.title);
      expect(cardElement).toHaveTextContent(card.description);
      expect(cardElement).toHaveTextContent(card.cta);
      expect(cardElement).toHaveAttribute("data-tone", card.tone);
    });
  });

  it("renders background ball image", () => {
    render(<Products />);

    const ballImage = screen.getByAltText("Main-Ball");
    expect(ballImage).toBeInTheDocument();
    expect(ballImage).toHaveAttribute("src", `${IMAGE_BASE}/main-ball.png`);
    expect(ballImage).toHaveClass("mock-bg-ball-image");
  });

  it("renders MotionWrapper with correct motion props", () => {
    render(<Products />);

    const wrappers = screen.getAllByTestId("motion-wrapper");
    const mainWrapper = wrappers[0];
    const motionProps = JSON.parse(mainWrapper.getAttribute("data-motion-props") || "{}");

    expect(motionProps.initial).toEqual({ opacity: 0, y: 40 });
    expect(motionProps.whileInView).toEqual({ opacity: 1, y: 0 });
    expect(motionProps.viewport).toEqual({ once: true, amount: 0.2 });
    expect(motionProps.transition).toEqual({ duration: 0.9 });
  });
});
