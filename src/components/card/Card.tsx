import "./Card.css";
import Stepper from "../../ui/stepper";
import Button from "../../ui/button";

import { Paper } from "@mantine/core";

const Card = () => {
  return (
    <Paper p="xl" radius="24px" className="card">
      <div className="image"></div>

      <div className="description">
        <div className="description__text text">
          <h4 className="text__title">Brocolli</h4>
          <span className="text__weight">1 kg</span>
        </div>
        <Stepper />
      </div>

      <div className="price">
        <h3 className="price__text">$ 120</h3>
        <Button variant="light" color="#3B944E">
          Add to cart
        </Button>
      </div>
    </Paper>
  );
};

export default Card;
