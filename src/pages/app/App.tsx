import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import "@mantine/core/styles.css";
import CardLIst from "../../modules/cardList";
import Header from "../../modules/header";
import Popup from "../../modules/popup";
import {
  CountItemsContext,
  PopupContext,
  ShowPopupContext,
} from "../../state/context";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="supermarket-app">
      <PopupContext.Provider value={{ cart, setCart }}>
        <CountItemsContext.Provider value={{ count, setCount }}>
          <ShowPopupContext.Provider value={{ showPopup, setShowPopup }}>
            <MantineProvider>
              <Header />
              <CardLIst />
              {showPopup && <Popup />}
            </MantineProvider>
          </ShowPopupContext.Provider>
        </CountItemsContext.Provider>
      </PopupContext.Provider>
    </section>
  );
};

export default App;
