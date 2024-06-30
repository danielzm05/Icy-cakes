import { useCarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Cart } from "../components/Cart";
import * as Icon from "react-feather";
import "../style/products.css";

export function Products() {
  const [openCart, setOpenCart] = useState(false);
  const [products, setProducts] = useState([]);
  const { addProduct } = useCarritoContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);

  const handleAddToCart = (product) => {
    addProduct(product);
    setOpenCart(true);
  };

  return (
    <>
      <header className="products-page-header">
        <h1>NUESTROS PRODUCTOS</h1>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => setOpenCart(true)}>
            <Icon.ShoppingCart />
          </li>
        </ul>
      </header>
      <main className="products-page">
        <div className="products-container">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.imagen} alt={product.nombre} />
              <span className="title">{product.nombre}</span>
              <span className="description">{product.descripcion}</span>
              <span
                className="add-product"
                title="Agregar al carrito"
                onClick={() => handleAddToCart(product)}
              >
                <Icon.Plus />
              </span>
            </div>
          ))}
        </div>
        <Cart isOpen={openCart} onClose={() => setOpenCart(false)} />
      </main>
    </>
  );
}
