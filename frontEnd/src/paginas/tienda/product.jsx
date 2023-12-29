import React, { useContext } from "react";
import { TiendaContext } from "../../context/tienda-context";

export const Product = (props) => {
  const { id, productoNombre, precio, productoImagen } = props.data;
  const { agregarCarta, cartaArticulos } = useContext(TiendaContext);

  const cartaArticuloContador = cartaArticulos[id];

  return (
    <div className="producto">
      <img src={productoImagen} />
      <div className="descripcion">
        <p>
          <b>{productoNombre}</b>
        </p>
        <p> ${precio}</p>
      </div>
      <button className="agregarCartaBttn" onClick={() => agregarCarta(id)}>
        Agregar a la Carta {cartaArticuloContador > 0 && <> ({cartaArticuloContador})</>}
      </button>
    </div>
  );
};
