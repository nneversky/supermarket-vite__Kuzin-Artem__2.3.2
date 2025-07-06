import "./Card.css";
import Stepper from "../../components/stepper";
import Button from "../../ui/button";
import type { CardItem } from "../../service/supermarketApp";
import { useContext } from "react";
import { CartContext, StepperContext } from "../../state/context";
import { Image } from "antd";
import { Paper, Loader } from "@mantine/core";

type CardDataProps = {
  data: CardItem;
};

const Card = ({ data }: CardDataProps) => {
  const actionToCart = useContext(CartContext);
  const setStepperCount = useContext(StepperContext) ?? (() => {});

  const { image, name, price, count, id } = data;
  const [nameItem, weightItem] = name.split(" - ");
  return (
    <Paper p="xl" radius="24px" className="card">
      <div className="image">
        <Image
          height={276}
          width={276}
          src={image}
          preview={false}
          placeholder={
            <div className="loader__image">
              <Loader color="gray" size="lg" type="bars" />
            </div>
          }
        />
      </div>

      <div className="description">
        <div className="description__text text">
          <h4 className="text__title">{nameItem}</h4>
          <span className="text__weight">{weightItem}</span>
        </div>
        <div className="stepper">
          <Stepper id={id} count={count} onClick={setStepperCount} />
        </div>
      </div>

      <div className="price">
        <h3 className="price__text">$ {price}</h3>
        <div className="button">
          <Button
            variant="light"
            colorButton="#3B944E"
            id={id}
            colorCard="#3B944E"
            onClick={(id?: number) => id !== undefined && actionToCart(id)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default Card;
