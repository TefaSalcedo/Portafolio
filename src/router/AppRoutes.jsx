// src/router/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import { useRevealAnimations } from '../animaciones/useRevealAnimations';

// Pages
import Home from '../pages/Home';
import SobreMi from '../pages/SobreMi';
import Contacto from '../pages/Contacto';
import Proyectos from '../pages/Proyectos';
import Playground from '../pages/Playground';
import Certificados from '../pages/Certificados';
import Stack from '../pages/Stack';

function Animaciones() {
  useRevealAnimations();
  return null;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Animaciones />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
