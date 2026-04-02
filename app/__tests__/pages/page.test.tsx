import { render, screen } from "@testing-library/react";
import HomePage from "../../page";

/*
  This page renders:
  - The Background component
  - The Header component
  - The Main component
  - The Footer component
*/

// Mock next/dynamic to return a simple component
jest.mock("next/dynamic", () => ({
  __esModule: true,
  default: () => {
    return function MockMain() {
      return <div data-testid="mock-main">Main Component</div>;
    };
  },
}));

// Mock other components
jest.mock("@/app/shared/ui/Background", () => {
  return function MockBackground() {
    return <div data-testid="mock-background">Background Component</div>;
  };
});

jest.mock("@/app/components/sections/Header", () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header Component</div>;
  };
});

jest.mock("@/app/components/sections/Footer", () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Footer Component</div>;
  };
});

describe("Home Page", () => {
  it("renders all main components", () => {
    render(<HomePage />);

    expect(screen.getByTestId("mock-background")).toBeInTheDocument();
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-main")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });

  it("renders components in the correct order", () => {
    render(<HomePage />);

    const container = screen.getByTestId("mock-background").parentElement;
    const children = container?.children;

    expect(children?.[0]).toHaveAttribute("data-testid", "mock-background");
    expect(children?.[1]).toHaveAttribute("data-testid", "mock-header");
    expect(children?.[2]).toHaveAttribute("data-testid", "mock-main");
    expect(children?.[3]).toHaveAttribute("data-testid", "mock-footer");
  });

  it("uses dynamic import for Main component", () => {
    render(<HomePage />);

    expect(screen.getByTestId("mock-main")).toBeInTheDocument();

    const mainElement = screen.getByTestId("mock-main");
    expect(mainElement).toBeTruthy();
  });
});
