import React, { useState } from "react";
import axios from "axios";
import "./regusu.css";

const Registrar = ({ onRegistroExitoso }) => {
  const [registroData, setRegistroData] = useState({ nombre: "", contraseña: "" });

  const handleRegistro = async () => {
    try {
      const response = await axios.post("http://localhost:4567/registro", registroData);
      console.log(response.data);
      onRegistroExitoso();
    } catch (error) {
      console.error("Error al registrar usuario", error);
    }
  };

  return (
    <div className="form-container">
      <form className="registrar">
        <fieldset>
          <legend className="legend-container">
            <h2>Registro de Nuevo Usuario</h2>
          </legend>
          <label>Nombre</label>
          <input
            className="input3"
            type="text"
            value={registroData.nombre}
            onChange={(e) => setRegistroData({ ...registroData, nombre: e.target.value })}
            placeholder="Nombre"
          />
          <label>Contraseña</label>
          <input
            className="input4"
            type="password"
            value={registroData.contraseña}
            onChange={(e) => setRegistroData({ ...registroData, contraseña: e.target.value })}
            placeholder="Contraseña"
          />
          <button className="registrarBttn" onClick={handleRegistro}>
            Registrar
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Registrar;
