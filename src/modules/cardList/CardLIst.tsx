import SupermarketApp from "../../service";
import type { CardItem } from "../../service/supermarketApp";
import { Table, Loader } from "@mantine/core";
import { useState, useEffect } from "react";
import Card from "../../components/card";
import { StepperContext } from "../../state/context";

const CardLIst = () => {
  const [items, setItem] = useState<CardItem[] | null>(null);

  useEffect(() => {
    const market = new SupermarketApp();
    market.getJsonList().then((data) => {
      const newData = data.map((item) => {
        return { count: 1, ...item };
      });
      setItem(newData);
    });
  }, []);

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
        <StepperContext.Provider value={handleClickStepper}>
          {/* <Loader color="blue" size="xl" /> */}
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
                    <Table.Tr key={crypto.randomUUID()}>{saveCards}</Table.Tr>
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
      );
    }
  };

  return (
    <div>
      <RanderCards />
    </div>
  );
};

export default CardLIst;
