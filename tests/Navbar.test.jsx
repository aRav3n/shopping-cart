import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Navbar from "../src/Navbar.jsx";

describe("Navigation bar", () => {
  it("Has nav element", () => {
    render(
      <MemoryRouter>
        <Navbar cart={[]} />
      </MemoryRouter>
    );
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  it("Has home button", () => {
    render(
      <MemoryRouter>
        <Navbar cart={[]} />
      </MemoryRouter>
    );
    const homeButton = screen.getByRole("button", { name: "Home" } );
    expect(homeButton).toBeInTheDocument();
  });
  it("Has products button", () => {
    render(
      <MemoryRouter>
        <Navbar cart={[]} />
      </MemoryRouter>
    );
    const productButton = screen.getByRole("button", { name: "Products" } );
    expect(productButton).toBeInTheDocument();
  });
  it("Has cart button", () => {
    render(
      <MemoryRouter>
        <Navbar cart={[]} />
      </MemoryRouter>
    );
    const cartButton = screen.getByRole("button", { name: /cart/i } );
    expect(cartButton).toBeInTheDocument();
  });
});