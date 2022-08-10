import React from "react";
import Boton from "./Boton";
import './Input.css';

const Input = (props) => {
  return (
    <div>
    <h1>Desafío Estado de los componentes y eventos.</h1>
    <div className="container">
      <form onSubmit={props.validarForm}>
        {props.error ? <p>Todos los campos son obligatorios.</p> : null}
        <div className="form-group">
          <label>Nombre</label>
          <input
            name="nombre"
            type="text"
            className="form-control"
            onChange={(e) => props.name(e.target.value)}
            value={props.valueName}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            name="contraseña"
            type="password"
            className="form-control"
            onChange={(e) => props.password(e.target.value)}
            value={props.valuePass}
          />
        </div>
        <div className="buttonContainer">
            {props.valuePass === "252525" ? <Boton /> : null}
        </div>
      </form>
    </div>
    </div>
  );
};

export default Input;
