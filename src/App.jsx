import { useEffect, useState } from 'react';
import AppRoutes from './router/AppRoutes';
import Splash from './components/splash/Splash';

function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 1500);
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
