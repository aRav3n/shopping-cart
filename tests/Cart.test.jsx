import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { useOutletContext } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Cart from "../src/Cart.jsx";

vi.mock("react-router-dom", () => {
  return {
    ...vi.importActual("react-router-dom"),
    useOutletContext: vi.fn(),
  };
});

describe("Cart", () => {
  beforeEach(() => {
    useOutletContext.mockReturnValue({
      cart: [],
    });
  });
  it("Shows total", () => {
    render(<Cart />);
    const totalText = screen.getByText(/total:/i);
    expect(totalText).toBeInTheDocument();
  });
  it("Shows pay now button", () => {
    render(<Cart />);
    const button = screen.getByRole("button", { name: "Pay Now!" });
    expect(button).toBeInTheDocument();
  });
  it("Shows info <p> after button click", async () => {
    const user = userEvent.setup();
    render(<Cart />);
    const button = screen.getByRole("button", { name: "Pay Now!" });

    await user.click(button);

    expect(
      screen.getByText(/you can't actually buy these items/i)
    ).toBeInTheDocument();
  });
});
