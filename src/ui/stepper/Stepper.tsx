import "./Stepper.css";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";

const Stepper = () => {
  return (
    <div className="stepper">
      <div className="stepper__button">
        <MinusIcon condition = "default"/>
      </div>
      <div className="stepper__title">
        <span>0</span>
      </div>
      <div className="stepper__button">
        <PlusIcon condition = "default"/>
      </div>
    </div>
  );
};

export default Stepper;
