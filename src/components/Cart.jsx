import * as Icon from "react-feather";
import "../style/cart.css";
import { useCarritoContext } from "../context/CarritoContext";
import { useEffect } from "react";

export function Cart({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { carrito } = useCarritoContext();

  return (
    <div className="cart-container">
      <div className="cart">
        <button className="close-button" onClick={onClose}>
          <Icon.X />
        </button>
        <h2>Carrito</h2>

        <div className="cart-products">
          {carrito &&
            carrito.map((product) => (
              <div className="cart-product" key={product.id}>
                <img src={product.imagen} alt={product.nombre} />
                <span className="text">
                  <b>{product.nombre}</b>
                  <p>Cantidad: {product.cantidad}</p>
                </span>
              </div>
            ))}
        </div>

        <div className="buttons-container">
          <button className="comprar">Comprar</button>
        </div>
      </div>
    </div>
  );
}
