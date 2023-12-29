import { createContext, useEffect, useState } from "react";
import { PRODUCTOS } from "../productos";

export const TiendaContext = createContext(null);

const getDefaultCarta = () => {
  let carta = {};
  for (let i = 1; i < PRODUCTOS.length + 1; i++) {
    carta[i] = 0;
  }
  return carta;
};

export const TiendaContextProvider = (props) => {
  const [cartaArticulos, setCartaArticulos] = useState(getDefaultCarta());

  const getTotalCartaCantidad = () => {
    let totalCantidad = 0;
    for (const articulo in cartaArticulos) {
      if (cartaArticulos[articulo] > 0) {
        let articuloInfo = PRODUCTOS.find((producto) => producto.id === Number(articulo));
        totalCantidad += cartaArticulos[articulo] * articuloInfo.precio;
      }
    }
    return totalCantidad;
  };

  const agregarCarta = (articuloId) => {
    setCartaArticulos((prev) => ({ ...prev, [articuloId]: prev[articuloId] + 1 }));
  };

  const removerCarta = (articuloId) => {
    setCartaArticulos((prev) => ({ ...prev, [articuloId]: prev[articuloId] - 1 }));
  };

  const updateCartaArticuloContador = (nuevaCantidad, articuloId) => {
    setCartaArticulos((prev) => ({ ...prev, [articuloId]: nuevaCantidad }));
  };

  const verificar = () => {
    setCartaArticulos(getDefaultCarta());
  };

  const contextValue = {
    cartaArticulos,
    agregarCarta,
    updateCartaArticuloContador,
    removerCarta,
    getTotalCartaCantidad,
    verificar,
  };

  return (
    <TiendaContext.Provider value={contextValue}>
      {props.children}
    </TiendaContext.Provider>
  );
};
