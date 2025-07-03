import "./Stepper.css";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";

import { StepperContext } from "../../state/context";
import { useContext } from "react";

type StepperProps = {
  count: number;
  id: number;
};

const Stepper = ({ id, count }: StepperProps) => {
  const setStepperCount = useContext(StepperContext);
  
  return (
    <div className="stepper">
      <div
        onClick={() => setStepperCount(id, "minus")}
        className="stepper__button"
      >
        <MinusIcon condition="default" />
      </div>
      <div className="stepper__title">
        <span>{count}</span>
      </div>
      <div
        onClick={() => setStepperCount(id, "plus")}
        className="stepper__button plus"
      >
        <PlusIcon condition="default" />
      </div>
    </div>
  );
};

export default Stepper;
