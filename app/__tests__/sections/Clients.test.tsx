import { render, screen, fireEvent } from "@testing-library/react";
import Clients from "@/app/components/sections/Clients";
import { CLIENTS_CONTENT } from "@/app/mock/constants";
import { MockMotionWrapperProps } from "@/app/types/motionWrapper";
import { ClientCardProps } from "@/app/types";

/*
  This test includes:
  - Rendering title and subtitle
  - Rendering the cards with correct props
  - Rendering the navigation buttons and scrolling the cards
*/

beforeAll(() => {
  Element.prototype.scrollTo = jest.fn();
});

jest.mock("@/app/components/cards/ClientCard", () => {
  return function MockClientCard({ client }: ClientCardProps) {
    return (
      <div data-testid="client-card" data-selected={client.selected}>
        <h3>{client.name}</h3>
        <p>{client.role}</p>
        <p>{client.quote}</p>
        <p>{client.rating}</p>
        <p>{client.project}</p>
        <p>{client.country}</p>
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

const mockScrollCard = jest.fn();
const mockGetScrollPosition = jest.fn();

jest.mock("@/app/utils/cardUtils", () => ({
  getScrollPosition: (...args: unknown[]) => mockGetScrollPosition(...args),
  scrollCard: (...args: unknown[]) => mockScrollCard(...args),
}));

describe("Clients", () => {
  it("renders title and subtitle", () => {
    render(<Clients />);

    expect(screen.getByText(CLIENTS_CONTENT.title)).toBeInTheDocument();
    expect(screen.getByText(CLIENTS_CONTENT.subtitle)).toBeInTheDocument();
  });

  it("renders all client cards", () => {
    render(<Clients />);

    const cards = screen.getAllByTestId("client-card");
    expect(cards).toHaveLength(CLIENTS_CONTENT.clients.length);
  });

  it("passes correct client data to each ClientCard", () => {
    render(<Clients />);

    CLIENTS_CONTENT.clients.forEach((client, index) => {
      const cardElement = screen.getAllByTestId("client-card")[index];
      expect(cardElement).toHaveTextContent(client.name);
      expect(cardElement).toHaveTextContent(client.role);
      expect(cardElement).toHaveTextContent(client.quote);
      expect(cardElement).toHaveTextContent(client.rating);
      expect(cardElement).toHaveTextContent(client.project);
      expect(cardElement).toHaveTextContent(client.country);
      expect(cardElement).toHaveAttribute("data-selected", String(client.selected));
    });
  });

  it("renders navigation buttons", () => {
    render(<Clients />);

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("calls scrollCard with 'left' when clicking previous button", () => {
    render(<Clients />);

    const prevButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(prevButton);

    expect(mockScrollCard).toHaveBeenCalledWith(expect.any(Object), "left");
  });

  it("calls scrollCard with 'right' when clicking next button", () => {
    render(<Clients />);

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockScrollCard).toHaveBeenCalledWith(expect.any(Object), "right");
  });

  it("calls getScrollPosition on mount when there's a selected client", () => {
    render(<Clients />);

    const selectedIndex = CLIENTS_CONTENT.clients.findIndex((client) => client.selected);
    expect(mockGetScrollPosition).toHaveBeenCalledWith(expect.any(Object), selectedIndex);
  });

  it("renders MotionWrapper with correct motion props", () => {
    render(<Clients />);

    const wrapper = screen.getByTestId("motion-wrapper");
    const motionProps = JSON.parse(wrapper.getAttribute("data-motion-props") || "{}");

    expect(motionProps.initial).toEqual({ opacity: 0, y: 40 });
    expect(motionProps.whileInView).toEqual({ opacity: 1, y: 0 });
    expect(motionProps.viewport).toEqual({ once: true, amount: 0.2 });
    expect(motionProps.transition).toEqual({ duration: 0.9 });
  });
});
