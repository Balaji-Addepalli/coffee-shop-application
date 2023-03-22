import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div>
          <img
            src="https://coffe-delivery-lemon.vercel.app/assets/coffe-delivery-logo.e98727a6.svg"
            alt="Location"
          />
        </div>
        <div className={classes["location-cart-button-container"]}>
          <div className={classes.location}>
            <FontAwesomeIcon className={classes['location-icon']} icon={faLocationDot} color="#8047f8" />
            <span>Fortaleza, CE</span>
          </div>
          <button className={classes["cart-button"]}>
            <FontAwesomeIcon className={classes.icon} icon={faCartShopping} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
