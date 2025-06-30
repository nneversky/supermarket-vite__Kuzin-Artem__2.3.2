import { createContext } from "react";

export const StepperContext = createContext<
  ((id: number, action: "plus" | "minus") => void) | null
>(null);