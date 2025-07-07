import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import Home from "./pages/Home"; // Tu página principal
import CrearRuta from "./pages/CrearRuta"; // Página privada
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer"; // Componente de pie de página

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Ruta protegida */}
        <Route
          path="/crear-ruta"
          element={
            <PrivateRoute>
              <CrearRuta />
            </PrivateRoute>
          }
        />
        {/* Puedes agregar más rutas aquí */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;