import { useState } from "react";

export default function Consultar (){
    
  const[resAPI, setRestAPI] = useState("");
  
  const handleGet = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token"); // O de donde lo tengas guardado

  const rutaURL = "https://webapijwt.onrender.com/";
  fetch(rutaURL + "api/Personas", {
    method: "GET",
    //credentials: "include",
    headers: {
     "Authorization": `Bearer ${token}`, // <- Aquí va el token
     "Content-Type": "application/json"
    }
  })
    .then((res) => {
      if (!res.ok) throw new Error("Error en la respuesta del servidor");
      return res.json();
    })
    .then((data) => setRestAPI(data))
    .catch(err => setRestAPI("Error al cargar"));
};
    
      return (
        
        <form onSubmit={handleGet}>
            <h2>Consulta de personas</h2>
          <button type="submit">Consultar</button>
          <h2>{JSON.stringify(resAPI)}</h2>
        </form>
      );
}