import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { useOutletContext } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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
});
