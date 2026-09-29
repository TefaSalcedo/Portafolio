import { useEffect, useState } from 'react';
import AppRoutes from './router/AppRoutes';
import Splash from './components/splash/Splash';

function App() {
  const [cargando, setCargando] = useState(
    () => !sessionStorage.getItem('splash-visto')
  );

  useEffect(() => {
    if (!cargando) return;
    const timer = setTimeout(() => {
      setCargando(false);
      sessionStorage.setItem('splash-visto', '1');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {cargando && <Splash />}
      <AppRoutes />
    </>
  );
}

export default App;
