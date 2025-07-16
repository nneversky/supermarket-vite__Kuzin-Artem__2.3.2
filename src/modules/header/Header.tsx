import Button from "../../ui/button";
import ShopTitle from "../../ui/shopTitle";
import "./Header.css";
import { CountItemsContext, ShowPopupContext } from "../../state/context";
import { useContext } from "react";

const Header = () => {
  const { count } = useContext(CountItemsContext);
  const { showPopup, setShowPopup } = useContext(ShowPopupContext);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="header">
      <div
        onClick={() => setShowPopup(false)}
        className={`header__background ${showPopup ? "background--active" : "background--disable"}`}
      ></div>
      <div onClick={() => window.location.reload()}>
        <ShopTitle />
      </div>

      <div
        className={`header__button ${showPopup ? "cart--open" : "cart--close"}`}
      >
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
