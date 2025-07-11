// src/router/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import SobreMi from '../pages/SobreMi';
import Contacto from '../pages/Contacto';
import Proyectos from '../pages/Proyectos';
import Playground from '../pages/Playground';
import Certificados from '../pages/Certificados';
import Stack from '../pages/Stack';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/stack" element={<Stack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
