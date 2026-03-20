import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BrandStrip from "@/app/components/sections/BrandStrip";
import { BRAND_LOGOS } from "@/app/mock/constants";

/*
  Here we are testing the BrandStrip component
  This test includes:
  - Rendering correct number of brand logos
  - Rendering images with correct alt text
*/

describe("BrandStrip", () => {
  it("renders the correct number of brand logos", () => {
    render(<BrandStrip />);

    const logos = screen.getAllByRole("img");
    expect(logos).toHaveLength(BRAND_LOGOS.length);
  });

  it("renders each logo with correct src and alt text", () => {
    render(<BrandStrip />);

    BRAND_LOGOS.forEach((src, index) => {
      const logo = screen.getByAltText(`Client logo ${index + 1}`);
      expect(logo).toHaveAttribute("src", src);
      expect(logo).toBeInTheDocument();
    });
  });
});
