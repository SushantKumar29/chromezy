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

jest.mock("@/app/components/links/NavLinks", () => {
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

// Mock all icons properly
jest.mock("@/app/shared/ui/Icons", () => ({
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
  ContactUsIcon: ({ className }: { className: string }) => (
    <svg data-testid="contact-icon" className={className} />
  ),
}));

// Mock the CSS module
jest.mock("@/app/styles/sections/Header.module.css", () => ({
  header: "mock-header",
  logo: "mock-logo",
  desktopOnly: "mock-desktop-only",
  mobileOnly: "mock-mobile-only",
  navContainer: "mock-nav-container",
  contactButton: "mock-contact-button",
  menuButton: "mock-menu-button",
  mobileMenu: "mock-mobile-menu",
  mobileMenuOpen: "mock-mobile-menu-open",
  searchContainer: "mock-search-container",
  searchInput: "mock-search-input",
}));

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it("toggles search input when clicking search button", () => {
    render(<Header />);

    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(searchButton).toBeInTheDocument();

    // Initially search should not be visible
    expect(screen.queryByPlaceholderText("Search...")).not.toBeInTheDocument();

    // Click to open search
    fireEvent.click(searchButton);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();

    // Click overlay to close
    const overlay = document.querySelector(".fixed.inset-0");
    if (overlay) {
      fireEvent.click(overlay);
      expect(screen.queryByPlaceholderText("Search...")).not.toBeInTheDocument();
    }
  });
});
