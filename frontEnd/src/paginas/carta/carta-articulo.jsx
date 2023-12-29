import React, { useContext } from "react";
import { TiendaContext } from "../../context/tienda-context";

export const CartaArticulo = (props) => {
  const { id, productoNombre, precio, productoImagen } = props.data;
  const { cartaArticulos, agregarCarta, removerCarta, updateCartaArticuloContador } =
    useContext(TiendaContext);

  return (
    <div className="cartaArticulo">
      <img src={productoImagen} />
      <div className="descripcion">
        <p>
          <b>{productoNombre}</b>
        </p>
        <p> Precio: ${precio}</p>
        <div className="contadorUso">
          <button onClick={() => removerCarta(id)}> - </button>
          <input
            value={cartaArticulos[id]}
            onChange={(e) => updateCartaArticuloContador(Number(e.target.value), id)}
          />
          <button onClick={() => agregarCarta(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
