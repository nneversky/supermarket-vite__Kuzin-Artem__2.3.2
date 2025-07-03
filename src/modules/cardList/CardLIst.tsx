import SupermarketApp from "../../service";
import type { CardItem } from "../../service/supermarketApp";
import { Table, Loader } from "@mantine/core";
import { useState, useEffect, useContext } from "react";
import Card from "../../components/card";
import {
  StepperContext,
  CartContext,
  CountItemsContext,
  PopupContext,
} from "../../state/context";
import "./CardLIst.css";

const CardLIst = () => {
  const [items, setItem] = useState<CardItem[] | null>(null);
  const [cartItems, setCartItems] = useState<CardItem[]>([]);
  const [load, setLoad] = useState(true);
  const { setCount } = useContext(CountItemsContext);
  const { setCart } = useContext(PopupContext);

  useEffect(() => {
    const market = new SupermarketApp();
    market.getJsonList().then((data) => {
      const newData = data.map((item) => {
        return { count: 0, ...item };
      });
      setItem(newData);
      setLoad(false);
    });
  }, []);

  useEffect(() => {
    setCount(cartItems.length);
    setCart(cartItems);
  }, [cartItems]);

  const handleAddCart = (id: number) => {
    if (!items) return;

    const itemToAdd = items.find((item) => item.id === id);
    if (!itemToAdd) return;

    setCartItems((prevCartItems) => {
      const existingItemIndex =
        prevCartItems?.findIndex((item) => item.id === id) ?? -1;

      if (existingItemIndex >= 0) {
        return prevCartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, count: item.count + itemToAdd.count }
            : item
        );
      } else {
        return [...prevCartItems, { ...itemToAdd }];
      }
    });

    setItem((prevItems) => {
      if (!prevItems) return null;
      return prevItems.map((item) =>
        item.id === id ? { ...item, count: 0 } : item
      );
    });
  };

  const handleClickStepper = (id: number, action: string) => {
    const newItems = items?.map((item) => {
      if (id === item.id) {
        if (action === "minus" && item.count > 0) {
          item.count -= 1;
        } else if (action === "plus") {
          item.count += 1;
        }
      }
      return item;
    });
    setItem(newItems);
  };

  const RanderCards = () => {
    let saveCards: Array<React.ReactElement> = [];
    let counter: number;

    if (items) {
      counter = items.length;
      return (
        <>
          {load && (
            <div className="loader">
              <Loader color="blue" size="xl" />
            </div>
          )}
          <section className="card-list">
            <h2 className="catalog">Catalog</h2>
            <CartContext.Provider value={handleAddCart}>
              <StepperContext.Provider value={handleClickStepper}>
                <Table>
                  <Table.Tbody>
                    {items.map((card) => {
                      const { id } = card;

                      saveCards.push(
                        <Table.Td key={id}>
                          <Card data={card} />
                        </Table.Td>
                      );
                      if (counter < 4 && counter === saveCards.length)
                        return (
                          <Table.Tr key={crypto.randomUUID()}>
                            {saveCards}
                          </Table.Tr>
                        );

                      if (saveCards.length === 4) {
                        counter -= 4;

                        const newSaveCards = [...saveCards];
                        saveCards = [];
                        return (
                          <Table.Tr key={crypto.randomUUID()}>
                            {newSaveCards}
                          </Table.Tr>
                        );
                      }
                    })}
                  </Table.Tbody>
                </Table>
              </StepperContext.Provider>
            </CartContext.Provider>
          </section>
        </>
      );
    }
  };

  return (
    <>
      <RanderCards />
    </>
  );
};

export default CardLIst;
