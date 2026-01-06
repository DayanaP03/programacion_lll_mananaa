import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

interface State {
  pi: number;
  radio: number;
}

interface Action {
  name: keyof State;
  value: number;
}

const initialState: State = {
  pi: 3.1416,
  radio: 0,
};

function reducer(state: State, action: Action): State {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function Circulo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      name: e.target.name as keyof State,
      value: Number(e.target.value),
    });
  }

  const area = state.pi * state.radio * state.radio;

  return (
    <form>
      <input
        type="number"
        name="radio"
        value={state.radio}
        onChange={handleChange}
        placeholder="Radio del círculo"
      />

      <h3>Área del círculo</h3>
      <p>{area.toFixed(2)}</p>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
