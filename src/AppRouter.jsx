import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Juego from './components/Juego';
import SobrePbacc from './components/SobrePbacc';
import Desarrollador from './components/Desarrollador';
import Navbar from './components/navbar/Navbar';
import './App.css'; // Importa el archivo CSS

// Definimos los enlaces de navegación
const navLinks = [
    {
        title: 'Preguntados', path: "/Preguntados"
    },
    {
        title: 'Sobre la PBACC', path: "/Sobre"
    },
    {
        title: 'Desarrollador', path: "/Desarrollador"
    },
]

function AppRouter() {
    return (
        // Envolvemos nuestra aplicación con el Router
        <Router>
            {/* Incluimos el componente de navegación */}
            <Navbar navLinks={navLinks} />
            {/* Definimos las rutas de la aplicación */}

            {/* Contenedor para la imagen de fondo */}
            <div id="corner-background"></div>
            <Juego />

            <Routes>
                <Route path="/Preguntados" element={<Juego />} />
                <Route path="/Sobre" element={<SobrePbacc />} />
                <Route path="/Desarrollador" element={<Desarrollador />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;