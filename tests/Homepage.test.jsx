import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import Homepage from "../src/Homepage";

describe("Homepage content", () => {
  it("Has heading", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    const headingText = screen.getByRole("heading").textContent;
    expect(headingText).toMatch(/our story/i);
  });
  it("Has main paragraph", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    const mainParagraphText = screen.getByText(
      /assumenda doloremque doloribus/i
    );
    expect(mainParagraphText).toBeInTheDocument();
  });
  it("Has final paragraph", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    
    const finalParagraphText = screen.getByText(/become a part of the legend/i);
    const link = finalParagraphText.querySelector("a");

    expect(finalParagraphText).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/shop/products");
  });
});
