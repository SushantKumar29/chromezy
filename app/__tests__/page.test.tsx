import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

/*
  Here we are testing the Home page
  This page should render:
  - The Background component
  - The Header component
  - The Main component
  - The Footer component
*/

// Here we are mocking the Background component
jest.mock("../shared/ui/Background", () => {
  return function MockBackground() {
    return <div data-testid="mock-background">Background Component</div>;
  };
});

// Here we are mocking the Header component
jest.mock("../components/sections/Header", () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header Component</div>;
  };
});

// The Main component is being imported with the next/dynamic
const mockMain = jest.fn().mockImplementation(() => {
  return function MockMain() {
    return <div data-testid="mock-main">Main Component</div>;
  };
});

// Here we are mocking the Footer component
jest.mock("../components/sections/Footer", () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Footer Component</div>;
  };
});

// Calling jest.mock("next/dynamic", ...), indicates Jest to replace the actual next/dynamic module with a fake version whenever any file imports it
jest.mock("next/dynamic", () => ({
  __esModule: true, // Here it tells Jest this is an ES module
  default: mockMain, // Here it replaces the default export with our dynamic import
}));

describe("Home Page", () => {
  it("renders all main components", () => {
    const Page = require("../page").default;
    render(<Page />);

    expect(screen.getByTestId("mock-background")).toBeInTheDocument();
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-main")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });

  it("renders components in the correct order", () => {
    const Page = require("../page").default;
    render(<Page />);

    const container = screen.getByTestId("mock-background").parentElement; // THis extracts the parent element of the rendered components (here a <div>)
    const children = container?.children;

    expect(children?.[0]).toHaveAttribute("data-testid", "mock-background");
    expect(children?.[1]).toHaveAttribute("data-testid", "mock-header");
    expect(children?.[2]).toHaveAttribute("data-testid", "mock-main");
    expect(children?.[3]).toHaveAttribute("data-testid", "mock-footer");
  });

  it("applies SSR to the Main component", () => {
    expect(mockMain).toHaveBeenCalled();

    const calls = mockMain.mock.calls;
    expect(calls[0][1]).toMatchObject({ ssr: true }); // Here it checks that the ssr is true in the import options
  });
});
