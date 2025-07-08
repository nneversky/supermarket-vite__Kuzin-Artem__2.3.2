import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
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

  describe("First rander component", () => {
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
});
