"use client";

/*import { useCalculator } from "./calculatorViewModel";

export default function Calculator() {
  const [
    num01,
    setNum01,
    result,
    handleParOuImpar
  ] = useCalculator();

  return (
    <div style={{ padding: "20px" }}>
      <h3>Calculadora</h3>

      <p>Digite o primeiro número:</p>
      <input
        type="number"
        placeholder="Número 1"
        value={num01}
        onChange={(e) => setNum01(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleParOuImpar}>Resultado: {result}</button>
    </div>
  );
}*/

import { Format } from "./calculatorViewModel";

export default function Calculator() {
  const [
    id,
    setId,
    nome,
    setNome,
    email,
    setEmail,
    result,
    setResult,
    handleFazerLogin,
  ] = Format();

  return (
    <div style={{ padding: "20px" }}>
      <h3>Login</h3>

      <input
        type="number"
        placeholder="ID:"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Nome:"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleFazerLogin}>Resultado: {result}</button>
    </div>
  );
}
