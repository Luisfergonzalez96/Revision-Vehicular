import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    cliente: "",
    placa: "",
    marca: "",
    modelo: "",
    año: "",
    kilometraje: "",
    observaciones: "",
  });

  const [status, setStatus] = useState({});
  const [logo, setLogo] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStatusClick = (item, value) => {
    setStatus({ ...status, [item]: value });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogo(url);
    }
  };

  const checklistItems = [
    "Aceite del motor",
    "Frenos",
    "Luces delanteras",
    "Luces traseras",
    "Dirección",
    "Llantas",
    "Suspensión",
    "Nivel de refrigerante",
    "Batería",
    "Escape",
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="logo-section">
          <div className="logo-upload">
            {logo ? (
              <img src={logo} alt="Logo" className="logo" />
            ) : (
              <div className="logo-placeholder">Subir Logo</div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="logo-input"
            />
          </div>
          <h1>Inspección Vehicular</h1>
        </div>
      </header>

      <section className="info-section">
        <label>
          Nombre del Cliente:
          <input
            name="cliente"
            value={formData.cliente}
            onChange={handleChange}
          />
        </label>
        <label>
          Placa:
          <input name="placa" value={formData.placa} onChange={handleChange} />
        </label>
        <label>
          Marca:
          <input name="marca" value={formData.marca} onChange={handleChange} />
        </label>
        <label>
          Modelo:
          <input
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
          />
        </label>
        <label>
          Año:
          <input name="año" value={formData.año} onChange={handleChange} />
        </label>
        <label>
          Kilometraje:
          <input
            name="kilometraje"
            value={formData.kilometraje}
            onChange={handleChange}
          />
        </label>
      </section>

      <section className="section">
        <h2>Revisión General</h2>
        <div className="checklist">
          {checklistItems.map((item, index) => (
            <div key={index} className="check-item">
              <span>{item}</span>
              <div className="status-buttons">
                <button
                  className={`status good ${
                    status[item] === "good" ? "active" : ""
                  }`}
                  onClick={() => handleStatusClick(item, "good")}
                >
                  🟢
                </button>
                <button
                  className={`status warning ${
                    status[item] === "warning" ? "active" : ""
                  }`}
                  onClick={() => handleStatusClick(item, "warning")}
                >
                  🟡
                </button>
                <button
                  className={`status bad ${
                    status[item] === "bad" ? "active" : ""
                  }`}
                  onClick={() => handleStatusClick(item, "bad")}
                >
                  🔴
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Observaciones</h2>
        <textarea
          name="observaciones"
          value={formData.observaciones}
          onChange={handleChange}
        />
      </section>

      <footer className="footer">
        <button className="save-btn">Guardar</button>
        <button className="share-btn">Compartir</button>
      </footer>
    </div>
  );
}
