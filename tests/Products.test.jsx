import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useOutletContext } from "react-router-dom";

import Products from "../src/Products.jsx";

vi.mock("react-router-dom", () => {
  return {
    ...vi.importActual("react-router-dom"),
    useOutletContext: vi.fn(),
  };
});

vi.mock("node-fetch", () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.stubGlobal(
  "fetch",
  vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: "Product 1",
            price: 10,
            description: "Description for Product 1",
            rating: { rate: 4 },
            image: "https://example.com/product1.jpg",
          },
          {
            id: 2,
            title: "Product 2",
            price: 20,
            description: "Description for Product 2",
            rating: { rate: 5 },
            image: "https://example.com/product2.jpg",
          },
        ]),
    })
  )
);

describe("Product element test", () => {
  beforeEach(() => {
    useOutletContext.mockReturnValue({
      cart: [],
      setCart: vi.fn(),
      itemAdded: Boolean,
    });
  });
  it("Shows loading...", () => {
    render(<Products />);
    const loadingMessage = screen.getByRole("heading", {
      name: /loading.../i,
    });
    expect(loadingMessage).toBeInTheDocument();
  });
  it("displays product cards", async () => {
    render(<Products />);

    await waitFor(() => {
      expect(screen.getByText(/Solid Gold Petite Micropave/i)).toBeInTheDocument();
      expect(screen.getByText(/John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet/i)).toBeInTheDocument();
    })
  });
});
