import { useState } from 'react';

export default function AreaTriangulo() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const calcularArea = () => {
    const b = Number(base);
    const h = Number(altura);

    if (b <= 0 || h <= 0) {
      setMensaje(' Ingresa valores válidos');
      setArea(null);
      return;
    }

    const resultado = (b * h) / 2;
    setArea(resultado);
    setMensaje(' Cálculo realizado correctamente');
    };

  return (
    <div>
      <h3>Área del triángulo</h3>

      <input
        type="number"
        placeholder="Base"
        value={base}
        onChange={e => setBase(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Altura"
        value={altura}
        onChange={e => setAltura(e.target.value)}
      />
      <br />

      <button onClick={calcularArea}>
        Calcular
      </button>

      {mensaje && <p>{mensaje}</p>}
      {area !== null && <p> Área = {area}</p>}
    </div>
  );
}
