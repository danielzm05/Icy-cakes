import { useContext, createContext, useState } from "react";
export const CarritoContext = createContext();

export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  return context;
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (newProduct) => {
    setCarrito((prevCarrito) => {
      if (prevCarrito.find((item) => item.id === newProduct.id)) {
        return prevCarrito.map((item) =>
          item.id === newProduct.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...newProduct, cantidad: 1 }];
      }
    });
  };

  const removeProduct = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((product) => product.id !== id)
    );
  };

  return (
    <CarritoContext.Provider value={{ carrito, addProduct, removeProduct }}>
      {children}
    </CarritoContext.Provider>
  );
};
