import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import Feature from "./Feature";
import classes from "./Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Banner = () => {
  const features = [
    {
      id: 1,
      icon: faCartShopping,
      description: "Compra simples e segura",
    },
    {
      id: 2,
      icon: faBoxesPacking,
      description: "Embalagem mantém o café intacto",
    },
    {
      id: 3,
      icon: faStopwatch,
      description: "Entrega rápida e rastreada",
    },
    {
      id: 4,
      icon: faMugHot,
      description: "O café chega fresquinho até você",
    },
  ];
  return (
    <div className={classes["banner-container"]}>
      <div className={classes["banner"]}>
        <section className={classes["banner-section"]}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <div className={classes["banner-features"]}>
            {features.map((feature) => (
              <Feature
                key={feature.id}
                id={feature.id}
                description={feature.description}
              >
                <FontAwesomeIcon icon={feature.icon} />
              </Feature>
            ))}
          </div>
        </section>

        <div className={classes["banner-image"]}>
          <img
            src="https://coffe-delivery-lemon.vercel.app/assets/hero-image.731f3849.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;