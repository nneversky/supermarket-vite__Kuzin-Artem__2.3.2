import Button from "../../ui/button";
import ShopTitle from "../../ui/shopTitle";
import "./Header.css";
import { CountItemsContext, ShowPopupContext } from "../../state/context";
import { useContext } from "react";

const Header = () => {
  const { count } = useContext(CountItemsContext);
  const { showPopup, setShowPopup } = useContext(ShowPopupContext);

  return (
    <section className="header">
      <div onClick={() => window.location.reload()}>
        <ShopTitle />
      </div>

      <div className="header__button--cart">
        <Button
          variant="filled"
          colorButton="#54B46A"
          colorCard="#FFFFFF"
          onClick={() => setShowPopup(!showPopup)}
        >
          {count > 0 ? <span className="count-items">{count}</span> : null}
          Cart
        </Button>
      </div>
    </section>
  );
};

export default Header;
