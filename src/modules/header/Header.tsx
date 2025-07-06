import Button from "../../ui/button";
import ShopTitle from "../../ui/shopTitle";
import "./Header.css";
import { CountItemsContext, ShowPopupContext } from "../../state/context";
import { useContext, useState } from "react";

const Header = () => {
  const { count } = useContext(CountItemsContext);
  const { setShowPopup } = useContext(ShowPopupContext);
  const [stateCartButton, setStateCartButton] = useState("cart--close");

  const handleClick = () => {
    if (stateCartButton === "cart--close") {
      setShowPopup(true);
      return setStateCartButton("cart--open");
    }
    setShowPopup(false);
    return setStateCartButton("cart--close");
  };

  return (
    <section className="header">
      <div onClick={() => window.location.reload()}>
        <ShopTitle />
      </div>

      <div className={`header__button ${stateCartButton}`}>
        <Button
          variant="filled"
          colorButton="#54B46A"
          colorCard="#FFFFFF"
          onClick={() => handleClick()}
        >
          {count > 0 ? <span className="count-items">{count}</span> : null}
          Cart
        </Button>
      </div>
    </section>
  );
};

export default Header;
