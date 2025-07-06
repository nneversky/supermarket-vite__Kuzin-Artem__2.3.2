import { createContext } from "react";
import type { SetStateAction, Dispatch } from "react";
import type { CardItem } from "../service/supermarketApp";

export const StepperContext = createContext<
  ((id: number, action: "plus" | "minus") => void) | null
>(null);

type PopupContextType = {
  cart: CardItem[];
  setCart: Dispatch<SetStateAction<CardItem[]>>;
};

type ShowPopupContextType = {
  showPopup: boolean;
  setShowPopup: Dispatch<SetStateAction<boolean>>;
};

export const ShowPopupContext = createContext<ShowPopupContextType>({
  showPopup: false,
  setShowPopup: () => {},
});

export const PopupContext = createContext<PopupContextType>({
  cart: [],
  setCart: () => {},
});

type StepperCartContextType = {
  stepperCart: { id?: number; action?: "plus" | "minus" };
  setStepperCart: Dispatch<
    SetStateAction<{ id: number; action: "plus" | "minus" }>
  >;
};

export const StepperCartContext = createContext<StepperCartContextType>({
  stepperCart: { id: 0, action: "plus" },
  setStepperCart: () => {},
});

export const CartContext = createContext<(id: number) => void>(() => {
  throw new Error();
});

type CountItemsContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const CountItemsContext = createContext<CountItemsContextType>({
  count: 0,
  setCount: () => {},
});
