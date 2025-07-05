import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import "@mantine/core/styles.css";
import CardLIst from "../../modules/cardList";
import Header from "../../modules/header";
import Cart from "../../modules/cart";
import {
  CountItemsContext,
  PopupContext,
  ShowPopupContext,
  StepperCartContext,
} from "../../state/context";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [stepperCart, setStepperCart] = useState({});

  return (
    <section className="supermarket-app">
      <StepperCartContext.Provider value={{ stepperCart, setStepperCart }}>
        <PopupContext.Provider value={{ cart, setCart }}>
          <CountItemsContext.Provider value={{ count, setCount }}>
            <ShowPopupContext.Provider value={{ showPopup, setShowPopup }}>
              <MantineProvider>
                <Header />
                <CardLIst />
                {showPopup && <Cart />}
              </MantineProvider>
            </ShowPopupContext.Provider>
          </CountItemsContext.Provider>
        </PopupContext.Provider>
      </StepperCartContext.Provider>
    </section>
  );
};

export default App;
