import "./Popup.css";
import CardPopup from "../../components/cardPopup";
import { PopupContext, ShowPopupContext } from "../../state/context";
import { useContext, useState, useEffect, useRef } from "react";

const Popup = () => {
  const { cart } = useContext(PopupContext);
  const { showPopup, setShowPopup } = useContext(ShowPopupContext);
  const [total, setTotal] = useState(0);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup, setShowPopup]);

  useEffect(() => {
    console.dir(popupRef.current);
    const newTotal = cart.reduce((sum: number, item) => {
      return sum + item.count * item.price;
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <section ref={popupRef} className="popup">
      <div className="listItems">
        {cart.map((item) => {
          const { id } = item;
          return <CardPopup key={id} value={item} />;
        })}
      </div>
      <div className="cart__price">
        <span className="cart__price__price-total">Total</span>
        <span className="cart__price__price-sum">$ {total}</span>
      </div>
    </section>
  );
};

export default Popup;
