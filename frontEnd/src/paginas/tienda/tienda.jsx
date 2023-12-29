import React from "react";
import { PRODUCTOS } from "../../productos";
import { Product } from "./product";
import "./tienda.css";

export const Tienda = () => {
  return (
    <div className="tienda">
      <div className="tiendaTitulo">
        <h1>Tienda del Shakatu</h1>
      </div>

      <div className="productos">
        {PRODUCTOS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
