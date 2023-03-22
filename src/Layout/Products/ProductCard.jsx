import classes from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Category = ({ category }) => {
  return <div className={classes["category"]}>{category}</div>;
};
const ProductCard = ({product}) => {
  return (
    <div className={classes["product"]}>
      <div className={classes["details"]}>
        <div className={classes["product-image"]}>
          <img src={product.imageURL} alt="traditional espresso" />
        </div>
        <div className={classes["categories"]}>
          {product.categories.map((category) => (
            <Category category={category} />
          ))}
        </div>
        <h3 className={classes["product-name"]}>{product.name}</h3>
        <p className={classes["product-description"]}>
          {product.description}
        </p>
        <div className={classes["product-price-cart-container"]}>
          <div className={classes["product-price-container"]}>
            <span>R$</span>
            <span className={classes['product-price']}>{product.price.toFixed(2)}</span>
          </div>
          <div className={classes["product-cart-container"]}>
            <div className={classes["cart-add-remove-buttons"]}>
              <div>-</div>
              <div>{1}</div>
              <div>+</div>
            </div>
            <div className={classes["cart-button-container"]}>
              <button className={classes["cart-button"]}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
