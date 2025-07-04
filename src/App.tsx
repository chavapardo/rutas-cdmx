import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import CrearRutaPage from "./pages/CrearRutaPage";
import RequireAuth from "./components/RequireAuth"; // agrega este import

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Nueva ruta protegida */}
        <Route 
          path="/crear-ruta" 
          element={
            <RequireAuth>
              <CrearRutaPage />
            </RequireAuth>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;