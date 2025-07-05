import "./CartElement.css";
import { Paper, Image } from "@mantine/core";
import Stepper from "../stepper";
import type { CardItem } from "../../service/supermarketApp";
import { useContext } from "react";
import { StepperCartContext } from "../../state/context";

interface CartElementInterface {
  value: CardItem;
}

const CartElement = ({ value }: CartElementInterface) => {
  const { setStepperCart } = useContext(StepperCartContext);
  const { image, name, price, id, count } = value;
  const [title, weight] = name.split(" - ");

  const handleClick = (id: number, action: string) => {
    setStepperCart({ id: id, action: action });
  };

  return (
    <section className="cart">
      <Paper className="cart-popup">
        <Image w={64} h={64} src={image} />
        <div>
          <div className="item-cart">
            <h4 className="item-cart__title">{title}</h4>
            <span className="item-cart__weight">{weight}</span>
          </div>
          <h3 className="popup-info__price">$ {price}</h3>
        </div>
        <div className="cart__stepper">
          <Stepper id={id} count={count} onClick={handleClick} />
        </div>
      </Paper>
    </section>
  );
};

export default CartElement;
