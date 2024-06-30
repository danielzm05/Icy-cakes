import * as Icon from "react-feather";
import "../style/cart.css";
import { useCarritoContext } from "../context/CarritoContext";

export function Cart({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { carrito, removeProduct, increaseQuantity, decreaseQuantity } =
    useCarritoContext();

  return (
    <div className="cart-container">
      <div className="cart">
        <button className="close button" onClick={onClose}>
          <Icon.X />
        </button>
        <h2>Carrito</h2>

        <div className="cart-products">
          {carrito.length > 0 ? (
            carrito.map((product) => (
              <div className="cart-product" key={product.id}>
                <button
                  className="delete button"
                  onClick={() => removeProduct(product.id)}
                >
                  <Icon.X />
                </button>
                <img src={product.imagen} alt={product.nombre} />
                <span className="text">
                  <b>{product.nombre}</b>
                  <span className="quantity">
                    Cantidad:
                    <button
                      className="button"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      <Icon.Minus />
                    </button>
                    {product.cantidad}
                    <button
                      className="button"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      <Icon.Plus />
                    </button>
                  </span>
                </span>
              </div>
            ))
          ) : (
            <p>El carrito esta vacío</p>
          )}
        </div>

        <div className="buttons-container">
          {carrito.length > 0 ? (
            <button className="comprar">Comprar</button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
