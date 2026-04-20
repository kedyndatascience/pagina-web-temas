import { useState } from "react";
import "./App.css"; 

function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const cambiarTema = () => {
    setTemaOscuro(!temaOscuro);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        transition: "0.3s",
        backgroundColor: temaOscuro ? "#1a1a1a" : "#ffffff",
        color: temaOscuro ? "#eaee0e" : "#111111",
      }}
    >
      <h1 style={{ color: temaOscuro ? "#fdf900" : "#1a1a1a" }}>
  {temaOscuro ? "Tema Oscuro" : "Tema Claro"}
</h1>


      <button
        onClick={cambiarTema}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: temaOscuro ? "#4f46e5" : "#2563eb",
          color: "white",
          fontSize: "16px",
        }}
      >
        {temaOscuro ? "Tema Claro" : "Tema Oscuro"}
      </button>

      <p>
        El martín pescador chileno (Megaceryle torquata) es un ave nativa de Chile conocida por su plumaje azul grisáceo
        , su pecho rojizo y su gran pico en forma de lanza. Habita principalmente en ríos, lagos y estuarios, 
        donde se posa en ramas o rocas para 
        lanzarse en picada y capturar peces, su alimento principal. Es un ave solitaria, muy territorial y 
        uno de los símbolos más característicos de los ecosistemas de agua dulce del sur de Chile.
      </p>

      
      <img
        src="https://guiadeavesdemisiones.com/wp-content/uploads/2020/03/hembra-scaled.jpg"
        alt="Martin Pescador Chileno"
        style={{
          width: "300px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default App;
