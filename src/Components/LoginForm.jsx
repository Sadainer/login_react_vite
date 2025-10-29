import { useState, useEffect } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=>{
    localStorage.removeItem("token");
  },[]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const rutaURL = "https://webapijwt.onrender.com/";
    const response = await fetch(rutaURL+"api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.token);
      localStorage.setItem("token", data.token); // Solo si no usas cookies HttpOnly
      alert("Login exitoso");
      setUsername("");
      setPassword("");
    } else {
      alert("Credenciales incorrectas");
    }
  };

 
  return (
    <form onSubmit={handleLogin}>
      <h2>Inicio de sesión</h2>
      <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;