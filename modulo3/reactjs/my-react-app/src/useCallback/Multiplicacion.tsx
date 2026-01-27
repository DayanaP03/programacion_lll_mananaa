
import { useCallback } from 'react';

interface MultiplicacionProps {
  items: string[];
}

export default function Multiplicacion({ items }: MultiplicacionProps) {
  const handleClick = useCallback((item: string) => {
    console.log("Seleccionado:", item);
  }, []);


  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          <button onClick={() => handleClick(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
}
