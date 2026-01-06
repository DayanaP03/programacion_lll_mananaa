import { useState } from 'react';

export default function SalarioMensual() {
  const [horasTrabajadas, setHorasTrabajadas] = useState('');
  const [valorPorHora, setValorPorHora] = useState('');
  const [salario, setSalario] = useState<number | null>(null);

  const calcularSalario = () => {
    const horas = parseFloat(horasTrabajadas);
    const valor = parseFloat(valorPorHora);
    if (!isNaN(horas) && !isNaN(valor) && horas >= 0 && valor >= 0) {
      setSalario(horas * valor);
    } else {
      alert('Por favor, ingresa valores válidos para horas y valor por hora.');
    }
  };

  return (
    <div>
      <h2>Calculadora de Salario Mensual</h2>
      <input
        type="number"
        value={horasTrabajadas}
        placeholder="Horas trabajadas"
        onChange={e => setHorasTrabajadas(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={valorPorHora}
        placeholder="Valor por hora"
        onChange={e => setValorPorHora(e.target.value)}
      />
      <br />
      <button onClick={calcularSalario}>
        Calcular Salario
      </button>
      {salario !== null && (
        <p>Salario mensual: ${salario.toFixed(2)}</p>
      )}
    </div>
  );
}
