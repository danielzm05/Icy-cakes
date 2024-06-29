import { useContext, createContext, useState } from "react";
export const CarritoContext = createContext();

export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  return context;
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (product) => {
    setCarrito([...carrito, product]);
    console.log(carrito);
  };

  return (
    <CarritoContext.Provider value={{ carrito, addProduct }}>
      {children}
    </CarritoContext.Provider>
  );
};
