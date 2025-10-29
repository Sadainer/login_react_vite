import { useState } from "react";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const rutaURL = "https://webapijwt.onrender.com/";
    const response = await fetch(rutaURL + "api/login/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, nombre, apellido, password }),
    });

    if (response.ok) {
      alert("Registro exitoso");
      setUsername("");
      setNombre("");
      setApellido("");
      setPassword("");
    } else {
      const error = await response.text();
      alert("Error al registrar: " + error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br/>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <br/>
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        required
      />
      <br/>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br/>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;