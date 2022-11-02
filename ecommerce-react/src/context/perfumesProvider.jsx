import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const PerfumesContext = createContext();

const PerfumesProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  const addCarrito = (producto) => {
    if (carrito.some((productoState) => productoState.id === producto.id)) {
      const carritoActualizado = carrito?.map((productoState) => {
        if (productoState.id === producto.id) {
          productoState.cantidad = producto.cantidad;
        }
        return productoState;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
    toast.success("Agregado correctamente");
  };

  const actualizarCantidad = (producto) => {
    const newCarrito = carrito.map((productoState) => {
      if (productoState.id === producto.id) {
        productoState.cantidad = producto.cantidad;
      }
      return productoState;
    });
    setCarrito(newCarrito);
  };

  const eliminarProducto = (id) => {
    const newCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(newCarrito);
    toast.error("Eliminado correctamente");
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <PerfumesContext.Provider
      value={{
        addCarrito,
        carrito,
        actualizarCantidad,
        eliminarProducto,
      }}
    >
      {children}
    </PerfumesContext.Provider>
  );
};

export { PerfumesProvider };

export default PerfumesContext;
