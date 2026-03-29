import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "../../page";

/*
  This page renders:
  - The Background component
  - The Header component
  - The Main component
  - The Footer component
*/

// Create mock inside jest.mock to avoid hoisting issues
jest.mock("next/dynamic", () => {
  const mockDynamic = jest.fn().mockImplementation(() => {
    return function MockMain() {
      return <div data-testid="mock-main">Main Component</div>;
    };
  });
  return {
    __esModule: true,
    default: mockDynamic,
  };
});

// Store reference to the mock for assertions
const mockDynamic = jest.requireMock("next/dynamic").default;

jest.mock("../../shared/ui/Background", () => {
  return function MockBackground() {
    return <div data-testid="mock-background">Background Component</div>;
  };
});

jest.mock("../../components/sections/Header", () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header Component</div>;
  };
});

jest.mock("../../components/sections/Footer", () => {
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

  it("applies SSR to the Main component", () => {
    expect(mockDynamic).toHaveBeenCalled();
    expect(mockDynamic.mock.calls[0][1]).toMatchObject({ ssr: true });
  });
});
