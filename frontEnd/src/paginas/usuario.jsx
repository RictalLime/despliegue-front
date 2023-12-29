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
    <div>
      <form>
        <fieldset class="inicio">
        <legend>
        <h2>Iniciar Sesión</h2>
        <label>Nombre</label>
        <input
          class="input1"
          type="text"
          value={loginData.nombre}
          onChange={(e) => setLoginData({ ...loginData, nombre: e.target.value })}
          placeholder="nombre"
        />
        <label class="con">Contraseña</label>
        <input
          class="input2"
          type="password"
          value={loginData.contraseña}
          onChange={(e) => setLoginData({ ...loginData, contraseña: e.target.value })}
          placeholder="contraseña"
        />
        <button className="sesionBttn" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        </legend>
        </fieldset>
      </form>

      <h2 class="nuevaCuenta">¿No tienes una cuenta? Regístrate aquí:</h2>
      <button onClick={() => setRegistroVisible(true)} class="nueva">Registrar Usuario</button>

      {registroVisible && <Registrar onRegistroExitoso={handleRegistroExitoso} />}
    </div>
  );
};

export default Usuario;
