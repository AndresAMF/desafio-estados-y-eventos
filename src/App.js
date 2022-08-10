import "./App.css";
import Input from "./components/Input";


// import Boton from './components/Boton';
import React, { useState } from "react";

function App() {
  //Estados del formulario
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");

  //Estado para errores
  const [error, setError] = useState(false);

  //Validador del formulario
  const validarForm = (e) => {
    e.preventDefault();

    //Validar datos
    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }
    setError(false);
    setNombre("");
    setContraseña("");
  };

  return (
    <Input
      name={setNombre}
      password={setContraseña}
      validarForm={validarForm}
      error={error}
      valueName={nombre}
      valuePass={contraseña}
    />
  );
}

export default App;
