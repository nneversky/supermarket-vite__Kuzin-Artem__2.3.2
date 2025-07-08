import "./Stepper.css";
import MinusIcon from "../../ui/stepperIcons/MinusIcon";
import PlusIcon from "../../ui/stepperIcons/PlusIcon";

type StepperProps = {
  count: number;
  id: number;
  onClick: (id: number, action: "plus" | "minus") => void;
};

const Stepper = ({ id, count, onClick }: StepperProps) => {
  return (
    <div data-testid="stepper" className="stepper">
      <div onClick={() => onClick(id, "minus")} className="stepper__button">
        <MinusIcon condition="default" />
      </div>
      <div className="stepper__title">
        <span>{count}</span>
      </div>
      <div
        onClick={() => onClick(id, "plus")}
        data-testid="plus-button"
        className="stepper__button plus"
      >
        <PlusIcon condition="default" />
      </div>
    </div>
  );
};

export default Stepper;
