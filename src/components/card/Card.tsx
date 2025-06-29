import "./Card.css";
import Stepper from "../../ui/stepper";
import Button from "../../ui/button";
import type { CardItem } from "../../service/supermarketApp";

import { Paper, Image } from "@mantine/core";

type CardDataProps = {
  data: CardItem;
};

const Card = ({ data }: CardDataProps) => {
  const { image, name, price } = data;
  const [nameItem, weightItem] = name.split(" - ");
  return (
    <Paper p="xl" radius="24px" className="card">
      <div className="image">
        <Image h={230} w={276} src={image} />
      </div>

      <div className="description">
        <div className="description__text text">
          <h4 className="text__title">{nameItem}</h4>
          <span className="text__weight">{weightItem}</span>
        </div>
        <div className="stepper">
          <Stepper />
        </div>
      </div>

      <div className="price">
        <h3 className="price__text">$ {price}</h3>
        <div className="button">
          <Button variant="light" color="#3B944E">
            Add to cart
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default Card;
