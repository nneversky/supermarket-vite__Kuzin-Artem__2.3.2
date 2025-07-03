import "./CardPopup.css";
import { Paper, Image } from "@mantine/core";
import Stepper from "../../ui/stepper";
import type { CardItem } from "../../service/supermarketApp";

interface CardPopupInterface {
  value: CardItem;
}

const CardPopup = ({ value }: CardPopupInterface) => {
  const { image, name, price, id, count } = value;
  const [title, weight] = name.split(" - ");
  return (
    <section className="cart">
      <Paper className="cart-popup">
        <Image w={64} h={64} src={image} />
        <div className="popup-cart">
          <div className="item-cart">
            <h4 className="item-cart__title">{title}</h4>
            <span className="item-cart__weight">{weight}</span>
          </div>
          <h3 className="popup-info__price">$ {price}</h3>
        </div>
        <div className="cart__stepper">
          <Stepper id={id} count={count} />
        </div>
      </Paper>
    </section>
  );
};

export default CardPopup;
