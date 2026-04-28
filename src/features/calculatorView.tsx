"use client";

import { useCalculator } from "./calculatorViewModel";

export default function Calculator() {
  const [
    num01,
    num02,
    result,
    setNum01,
    setNum02,
    setResult,
    handleAddNum,
    handleMultNum,
    handleDivNum,
    handleSubNum
  ] = useCalculator();


  return (
    <div style={{ padding: '20px' }}>
      <h3>Calculadora</h3>

      <p>Digite o primeiro número:</p>
      <input
        type="number"
        placeholder="Número 1"
        value={num01}
        onChange={(e) => setNum01(e.target.value)}
      />

      <p>Digite o segundo número:</p>
      <input
        type="number"
        placeholder="Número 2"
        value={num02}
        onChange={(e) => setNum02(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAddNum}>Somar</button>
      <br/>
      <button onClick={handleMultNum}>Multi</button>
      <br/>
      <button onClick={handleDivNum}>Dividir</button>
      <br/>
      <button onClick={handleSubNum}>Subtrair</button>

      <p>Resultado: {result}</p>
    </div>
  );
}