import React, { useContext, useState } from "react";
import { TiendaContext } from "../../context/tienda-context";
import { PRODUCTOS } from "../../productos";
import { CartaArticulo } from "./carta-articulo";
import { useNavigate } from "react-router-dom";
import "./carta.css";

export const Carta = () => {
  const { cartaArticulos, getTotalCartaCantidad, checkout } = useContext(TiendaContext);
  const totalCantidad = getTotalCartaCantidad();
  const [popupVisible, setPopupVisible] = useState(false);
  const [compraExitosa, setCompraExitosa] = useState(false);

  const navigate = useNavigate();

  const handleCompra = async () => {
    try {
      const response = await axios.post("http://localhost:4567/compra", { cartaArticulos });
      setCompraExitosa(response.data.exitosa);
    } catch (error) {
      console.error("Error al realizar la compra", error);
    } finally {
      setPopupVisible(true);
    }
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    navigate("/");
  };

  return (
    <div className="carta">
      <div>
        <h1>Tus Articulos de carta</h1>
      </div>
      <div className="carta">
        {PRODUCTOS.map((producto) => {
          if (cartaArticulos[producto.id] !== 0) {
            return <CartaArticulo key={producto.id} data={producto} />;
          }
        })}
      </div>

      {totalCantidad > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalCantidad} </p>
          <button onClick={() => navigate("/")}> Continuar Comprando </button>
          <button onClick={handleCompra}> Terminar Comprar </button>
        </div>
      ) : (
        <h1> Tu Carta de Compras está Vacía</h1>
      )}

      {popupVisible && (
        <div className="checkout">
          <p>{compraExitosa ? "Compra exitosa" : "Error al realizar la compra"}</p>
          <button onClick={handlePopupClose}>Cerrar</button>
        </div>
      )}
    </div>
  );
};
