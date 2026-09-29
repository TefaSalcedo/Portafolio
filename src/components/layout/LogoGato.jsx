// Icono de marca: cara de gatito con degradado rosado.
function LogoGato() {
  return (
    <svg
      className="logo-gato"
      width="30"
      height="30"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-rosa" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec5c9c" />
          <stop offset="100%" stopColor="#ff85a9" />
        </linearGradient>
      </defs>
      <path
        d="M10 20 L8 6 L20 12 Q24 10 28 12 L40 6 L38 20 Q44 26 44 32 C44 41 35 45 24 45 C13 45 4 41 4 32 C4 26 6 22 10 20 Z"
        fill="url(#logo-rosa)"
      />
      <circle cx="17" cy="30" r="2.4" fill="#fff" />
      <circle cx="31" cy="30" r="2.4" fill="#fff" />
      <path d="M22 36 q2 2 4 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default LogoGato;
