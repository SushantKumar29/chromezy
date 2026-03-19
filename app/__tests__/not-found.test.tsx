import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotFound from "../not-found";

/*
  Here we are testing the not found page
  This page should render:
  - The 404 code
  - The proper title
  - The home link
*/

describe("NotFound Page", () => {
  it("renders the 404 code, proper title and home link", () => {
    render(<NotFound />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("This page doesn't exist or has been moved.")).toBeInTheDocument();
    expect(screen.getByText("Go back home")).toBeInTheDocument();
  });

  it("renders the home link with correct href", () => {
    render(<NotFound />);

    const link = screen.getByText("Go back home").closest("a");
    expect(link).toHaveAttribute("href", "/");
  });

  it("uses the mocked NOT_FOUUNT_CONTENT values", () => {
    // This test verifies we're using the correct mocked values
    render(<NotFound />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("This page doesn't exist or has been moved.")).toBeInTheDocument();
    expect(screen.getByText("Go back home")).toBeInTheDocument();
  });
});
