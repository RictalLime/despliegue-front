import React, { useState } from "react";
import axios from "axios";
import Registrar from "./registrar";
import "./regusu.css";

const Usuario = () => {
  const [loginData, setLoginData] = useState({ nombre: "", contraseña: "" });
  const [registroVisible, setRegistroVisible] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4567/login", loginData);
      console.log(response.data);
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  const handleRegistroExitoso = () => {
    setRegistroVisible(false);
  };

  return (
    <div className="form-container">
      <form className="inicio">
        <fieldset>
          <legend className="legend-container">
            <h2>Iniciar Sesión</h2>
          </legend>
          <label>Nombre</label>
          <input
            className="input1"
            type="text"
            value={loginData.nombre}
            onChange={(e) => setLoginData({ ...loginData, nombre: e.target.value })}
            placeholder="Nombre"
          />
          <label>Contraseña</label>
          <input
            className="input2"
            type="password"
            value={loginData.contraseña}
            onChange={(e) => setLoginData({ ...loginData, contraseña: e.target.value })}
            placeholder="Contraseña"
          />
          <div className="button-container">
            <button className="sesionBttn" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </div>
        </fieldset>
      </form>

      <h2 className="nuevaCuenta">¿No tienes una cuenta? Regístrate aquí:</h2>
      <div className="button-container">
        <button onClick={() => setRegistroVisible(true)} className="nueva">
          Registrar Usuario
        </button>
      </div>

      {registroVisible && <Registrar onRegistroExitoso={handleRegistroExitoso} />}
    </div>
  );
};

export default Usuario;
