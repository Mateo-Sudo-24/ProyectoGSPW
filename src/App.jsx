import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Location from "./Components/Location";
import Cursos from "./Components/Cursos"; // Importación actualizada
import QuienesSomos from "./Components/Quiensomos";
import Login from "./Components/Login";
import Registrate from "./Components/Registrate";
import Dashboard from "./Components/Dashboard";
import Welcome from "./Components/Welcome";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/cursos" element={<Cursos />} /> {/* Ruta actualizada */}
        <Route path="/ofertas" element={<Location />} />
        <Route path="/contactos" element={<Footer />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registrate />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;