import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/components/sections/Header";
import { NavLinksProps } from "@/app/types";

/*
  This test includes:
  - Rendering logo and search icon
  - Rendering desktop navigation
  - Rendering About Us link
  - Rendering Contact button
  - Rendering mobile navigation
*/

jest.mock("../../components/links/NavLinks", () => {
  const MockNavLinks = ({ variant, onItemClick }: NavLinksProps) => (
    <div data-testid={`nav-links-${variant}`}>
      <a href="/home" onClick={onItemClick}>
        Home
      </a>
      <a href="/about" onClick={onItemClick}>
        About
      </a>
      <a href="/services" onClick={onItemClick}>
        Services
      </a>
      {variant === "mobile" && <div data-testid="about-link-mobile">About Us Link</div>}
    </div>
  );

  const MockAboutUsLink = () => (
    <a href="/about-us" data-testid="about-us-link">
      About Us
    </a>
  );

  return {
    __esModule: true,
    default: MockNavLinks,
    AboutUsLink: MockAboutUsLink,
  };
});

jest.mock("../../shared/ui/Icons", () => ({
  MenuIcon: ({ className }: { className: string }) => (
    <div data-testid="menu-icon" className={className}>
      Menu
    </div>
  ),
  CloseIcon: ({ className }: { className: string }) => (
    <div data-testid="close-icon" className={className}>
      Close
    </div>
  ),
}));

jest.mock("../../styles/sections/Header.module.css", () => ({
  mobileMenu: "mock-mobile-menu",
  mobileMenuOpen: "mock-mobile-menu-open",
}));

describe("Header", () => {
  it("renders logo and search icon", () => {
    render(<Header />);

    expect(screen.getByAltText("Chromezy")).toBeInTheDocument();
    // Search icon now has empty alt text (decorative)
    const searchIcon = screen.getByAltText("");
    expect(searchIcon).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("renders desktop navigation", () => {
    render(<Header />);

    expect(screen.getByTestId("nav-links-desktop")).toBeInTheDocument();

    expect(screen.getByTestId("about-us-link")).toBeInTheDocument();
    expect(screen.getByTestId("about-us-link")).toHaveTextContent("About Us");

    const contactButton = screen.getByText("Contact Us");
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.closest("a")).toHaveAttribute("href", "#contact");
  });

  it("renders menu button on mobile", () => {
    render(<Header />);

    // Updated to match new aria-label
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
  });

  it("opens mobile menu when clicking menu button", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    const mobileMenu = document.querySelector(".mock-mobile-menu");

    expect(mobileMenu).not.toHaveClass("mock-mobile-menu-open");

    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("mock-mobile-menu-open");
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("menu-icon")).not.toBeInTheDocument();
  });

  it("closes mobile menu when clicking menu button again", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    const mobileMenu = document.querySelector(".mock-mobile-menu");

    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("mock-mobile-menu-open");

    // After opening, button label changes to "close menu"
    const closeButton = screen.getByRole("button", { name: /close menu/i });
    fireEvent.click(closeButton);
    expect(mobileMenu).not.toHaveClass("mock-mobile-menu-open");
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("close-icon")).not.toBeInTheDocument();
  });

  it("renders mobile navigation when menu is open", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(menuButton);

    expect(screen.getByTestId("nav-links-mobile")).toBeInTheDocument();
    expect(screen.getByTestId("about-link-mobile")).toBeInTheDocument();
  });

  it("closes mobile menu when clicking a nav link", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    const mobileMenu = document.querySelector(".mock-mobile-menu");

    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("mock-mobile-menu-open");

    const mobileNavLinks = screen.getByTestId("nav-links-mobile");
    const firstLink = mobileNavLinks.querySelector("a");
    fireEvent.click(firstLink!);

    expect(mobileMenu).not.toHaveClass("mock-mobile-menu-open");
  });
});
