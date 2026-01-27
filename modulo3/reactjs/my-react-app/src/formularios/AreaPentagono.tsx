import { useState } from 'react';


export default function AreaPentagono(props: any) {
  const [perimetro, setPerimetro] = useState("");
  const [apotema, setApotema] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const area = (Number(perimetro) * Number(apotema)) / 2;
    props.onCalcular(area);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Perímetro"
        value={perimetro}
        onChange={e => setPerimetro(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Apotema"
        value={apotema}
        onChange={e => setApotema(e.target.value)}
      /><br />

      <button type="submit">Calcular área</button>
    </form>
  );
}
