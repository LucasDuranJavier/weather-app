import React from "react";
import CardTemp from "./CardTemp";
import { IoCloseCircleOutline } from "react-icons/io5";
import icon_09d from "../assets/09d.png";
import icon_03n from "../assets/03n.png";
import icon_04d from "../assets/04d.png";
import icon_09n from "../assets/09n.png";
import icon_10d from "../assets/10d.png";
import icon_11d from "../assets/11d.png";
import icon_13d from "../assets/13d.png";
import icon_50d from "../assets/50d.png";
import icon_02d from "../assets/02d.png";
import styles from "./Card.module.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }

  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={handleOnClose}>
        <IoCloseCircleOutline />
      </button>
      <span className={styles.cityName}>{name}</span>
      <CardTemp label="Min" value={min} />
      <CardTemp label="Max" value={max} />
      <WeatherIcon icon={img} />
    </div>
  );
}

  function WeatherIcon({ icon }) {
    switch (icon) {
      case "02d":
        return <img src={icon_02d} alt="few clouds" />;

      case "04d":
        return <img src={icon_04d} alt="broken clouds" />;

        case "09n":
          return <img src={icon_09n} alt="shower rain" />;

          case "10d":
            return <img src={icon_10d} alt="rain" />;

            case "11d":
              return <img src={icon_11d} alt="thunderstorm" />;

              
              case "13d":
                return <img src={icon_13d} alt="snow" />;       

                case "50d":
                  return <img src={icon_50d} alt="mist" />;

      case "03n":
      return <img src={icon_03n} alt="scattered clouds" />;
      default:
        return <img src={icon_03n} alt="scattered clouds" />;
    }
  }
