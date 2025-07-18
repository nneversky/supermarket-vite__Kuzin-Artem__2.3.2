import "./Cart.css";
import CartElement from "../../components/cartElement";
import { PopupContext } from "../../state/context";
import { useContext, useState, useEffect, useRef } from "react";
import { Image } from "@mantine/core";
import emptyCart from "../../assets/image/emptyCart.svg";

const Cart = () => {
  const { cart } = useContext(PopupContext);
  const [total, setTotal] = useState(0);
  const [showImgemptyCart, setShowImgemptyCart] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cart.length !== 0) setShowImgemptyCart(false);
    const newTotal = cart.reduce((sum: number, item) => {
      return sum + item.count * item.price;
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <section ref={popupRef} data-testid="cart" className="popup">
      {showImgemptyCart && (
        <div className="emty-cart">
          <Image src={emptyCart} w="auto" h={200} />
          <span className="emty-cart--text">You cart is empty!</span>
        </div>
      )}
      <div className="listItems">
        {cart.map((item) => {
          const { id } = item;
          return <CartElement key={id} value={item} />;
        })}
      </div>
      {!showImgemptyCart && (
        <div className="cart__price">
          <span className="cart__price__price-total">Total</span>
          <span className="cart__price__price-sum">$ {total}</span>
        </div>
      )}
    </section>
  );
};

export default Cart;
