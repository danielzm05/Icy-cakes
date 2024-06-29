import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/products.css";
import { useCarritoContext } from "../context/CarritoContext";
export function Products() {
  const [products, setProducts] = useState([]);
  const { addProduct } = useCarritoContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("../../public/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);

  return (
    <>
      <main className="products-page">
        <h1>NUESTROS PRODUCTOS</h1>
        <div className="products-container">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.imagen} alt={product.nombre} />
              <span className="title">{product.nombre}</span>
              <span className="description">{product.descripcion}</span>
              <button onClick={() => addProduct(product)}>
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
