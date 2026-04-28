"use client";

/*import { useState } from "react";
import { ParOuImpar } from "./calculatorModel";

export function useCalculator() {
  const [num01, setNum01] = useState("");
  const [result, setResult] = useState<string | number>("");

  function handleParOuImpar() {
    const total = ParOuImpar({ 
      num01: Number(num01)
    });
    
    setResult(total);
  }

  return [num01, setNum01, result, setResult, handleParOuImpar] as const;
}*/

import { useState } from "react";
import { FazerLogin } from "./calculatorModel";

export function Format() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<string | number>("");

  function handleFazerLogin() {
    const login = FazerLogin({ 
      Id: Number(id),
      Nome: String(nome),
      Email: String(email)
    });
    
    setResult(login);
  }

  return [id, setId, nome, setNome, email, setEmail, result, setResult, handleFazerLogin] as const;
}