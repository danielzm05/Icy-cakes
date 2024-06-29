import * as Icon from "react-feather";
import "../style/cart.css";

export function Cart({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="cart-container">
      <div className="cart">
        <button className="close-button" onClick={onClose}>
          <span>Carrito</span>
          <Icon.X />
        </button>
        <div className="buttons-container">
          <button className="comprar">Comprar</button>
        </div>
      </div>
    </div>
  );
}
