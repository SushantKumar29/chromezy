import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/components/sections/Header";
import { NavLinksProps } from "@/app/types";

/*
  Here we are testing the Header component
  This test includes:
  - Rendering logo and search icon
  - Rendering desktop navigation
  - Rendering About Us link
  - Rendering Contact button
  - Rendering mobile navigation
*/

// Here we are mocking the NavLinks component to render the navigation links
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

// Here we are mocking the menu Icons component
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

// Here we are mocking the style classes for the mobile menu toggle
jest.mock("../../styles/sections/Header.module.css", () => ({
  mobileMenu: "mock-mobile-menu",
  mobileMenuOpen: "mock-mobile-menu-open",
}));

describe("Header", () => {
  it("renders logo and search icon", () => {
    render(<Header />);

    expect(screen.getByAltText("Chromezy")).toBeInTheDocument();
    expect(screen.getByAltText("Search Icon")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("renders desktop navigation", () => {
    render(<Header />);
    // Here we are testing the rendering of the desktop navigations
    expect(screen.getByTestId("nav-links-desktop")).toBeInTheDocument();

    // Here we are testing the rendering of the About Us link
    expect(screen.getByTestId("about-us-link")).toBeInTheDocument();
    expect(screen.getByTestId("about-us-link")).toHaveTextContent("About Us");

    // Here we are testing the rendering of the Contact button
    const contactButton = screen.getByText("Contact Us");
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.closest("a")).toHaveAttribute("href", "#contact");
  });

  // Here we are checking the menu button rendering on mobile screens
  it("renders menu button on mobile", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
  });

  // When the menu button is clicked, then the close button should appear and the menu should open
  it("opens mobile menu when clicking menu button", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    const mobileMenu = document.querySelector(".mock-mobile-menu");

    // Here we are checking the initial closed state of the mobile menu.
    expect(mobileMenu).not.toHaveClass("mock-mobile-menu-open");

    // Here, on clicking the menu button, we are checking that the mobile menu is opened and the menu icon is replaced by the close icon
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("mock-mobile-menu-open");
    expect(screen.getByTestId("close-icon")).toBeInTheDocument(); // getByTestId throws error if the element is not found
    expect(screen.queryByTestId("menu-icon")).not.toBeInTheDocument(); // queryByTestId returns null if the element is not found
  });

  // When the menu is opened and the menu button is clicked again, then the menu should close
  it("closes mobile menu when clicking menu button again", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    const mobileMenu = document.querySelector(".mock-mobile-menu");

    // Here we are checking the initial opened state of the mobile menu.
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("mock-mobile-menu-open");

    // Here, on clicking the close button, we are checking that the mobile menu is closed
    fireEvent.click(menuButton);
    expect(mobileMenu).not.toHaveClass("mock-mobile-menu-open");
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument(); // getByTestId throws error if the element is not found
    expect(screen.queryByTestId("close-icon")).not.toBeInTheDocument(); // queryByTestId returns null if the element is not found
  });

  // This checks the rendering of the mobile navigarion menu
  it("renders mobile navigation when menu is open", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton);

    expect(screen.getByTestId("nav-links-mobile")).toBeInTheDocument();
    expect(screen.getByTestId("about-link-mobile")).toBeInTheDocument();
  });

  // When we click on any mobile nav link, we expect the menu to be closed
  it("closes mobile menu when clicking a nav link", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    const mobileMenu = document.querySelector(".mock-mobile-menu");

    // Here we are opening the mobile menu on clicking the menu icon
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("mock-mobile-menu-open");

    // Here we are clicking on any nav link to close the menu
    const mobileNavLinks = screen.getByTestId("nav-links-mobile");
    const firstLink = mobileNavLinks.querySelector("a");
    fireEvent.click(firstLink!);

    // Here we are checking the close status of the mobile menu
    expect(mobileMenu).not.toHaveClass("mock-mobile-menu-open");
  });
});
