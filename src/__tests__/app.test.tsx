import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import App from "../pages/app";

vi.mock("../service", () => ({
  default: vi.fn().mockImplementation(() => ({
    getJsonList: () =>
      Promise.resolve([
        {
          id: 1,
          name: "Brocolli",
          price: 120,
          count: 5,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
          category: "vegetables",
        },
      ]),
  })),
}));

describe("App component", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);
    });
  });

  describe("first rander App", () => {
    it("rander title catalog", async () => {
      expect(await screen.findByText("Catalog")).toBeInTheDocument();
    });

    it("rander card name", async () => {
      expect(await screen.findByText("Brocolli")).toBeInTheDocument();
    });

    it("rander button Cart", async () => {
      expect(await screen.findByText("Cart")).toBeInTheDocument();
    });

    it("rander price", async () => {
      expect(await screen.findByText("$ 120")).toBeInTheDocument();
    });
  });

  describe("check Stepper component", () => {
    it("increase by 1", async () => {
      const countText = await screen.findByText("5");
      const plusBtn = await screen.findByTestId("plus-button");
      expect(countText).toBeInTheDocument();
      fireEvent.click(plusBtn);
      await waitFor(() => {
        expect(screen.getByText("6")).toBeInTheDocument();
      });
    });

    it("decrease by 1", async () => {
      const countText = await screen.findByText("5");
      const minusBtn = await screen.findByTestId("minus-button");
      expect(countText).toBeInTheDocument();
      fireEvent.click(minusBtn);
      await waitFor(() => {
        expect(screen.getByText("4")).toBeInTheDocument();
      });
    });
  });

  describe("check Cart component", () => {
    it("open cart", async () => {
      const cartBtn = await screen.findByText("Cart");
      fireEvent.click(cartBtn);
      expect(await screen.findByTestId("cart")).toBeInTheDocument();
    });

    it("add item to cart", async () => {
      const addCartBtn = await screen.findByText("Add to cart");
      const cartBtn = await screen.findByText("Cart");
      fireEvent.click(addCartBtn);
      fireEvent.click(cartBtn);
      expect(await screen.findByTestId("cart")).toBeInTheDocument();
      expect(await screen.findByText("Total")).toBeInTheDocument();
      expect(await screen.findByText("$ 600")).toBeInTheDocument();
    });

    it("decrease stepper in cart", async () => {
      const addCartBtn = await screen.findByText("Add to cart");
      const cartBtn = await screen.findByText("Cart");
      fireEvent.click(addCartBtn);
      fireEvent.click(cartBtn);
      const cartScope = within(await screen.findByTestId("cart"));
      expect(await cartScope.findByText("5")).toBeInTheDocument();
      const minusBtn = await cartScope.findByTestId("minus-button");
      fireEvent.click(minusBtn);
      await waitFor(() => {
        expect(cartScope.getByText("4")).toBeInTheDocument();
      });
    });

    it("increase stepper in cart", async () => {
      const addCartBtn = await screen.findByText("Add to cart");
      const cartBtn = await screen.findByText("Cart");
      fireEvent.click(addCartBtn);
      fireEvent.click(cartBtn);
      const cartScope = within(await screen.findByTestId("cart"));
      expect(await cartScope.findByText("5")).toBeInTheDocument();
      const plusBtn = await cartScope.findByTestId("plus-button");
      fireEvent.click(plusBtn);
      await waitFor(() => {
        expect(cartScope.getByText("6")).toBeInTheDocument();
      });
    });

    it("close cart", async () => {
      const cartBtn = await screen.findByText("Cart");
      fireEvent.click(cartBtn);
      expect(await screen.findByTestId("cart")).toBeInTheDocument();
      fireEvent.click(cartBtn);
      await waitFor(() => {
        expect(screen.queryByTestId("cart")).not.toBeInTheDocument();
      });
    });
  });
});
