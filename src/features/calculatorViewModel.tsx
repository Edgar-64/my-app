"use client";

import { useState } from "react";
import { addNum } from "./calculatorModel";
import { multNum } from "./calculatorModel";
import { subNum } from "./calculatorModel";
import { divNum } from "./calculatorModel";

export function useCalculator() {
  const [num01, setNum01] = useState("");
  const [num02, setNum02] = useState("");
  const [result, setResult] = useState<string | number>("");

  function handleAddNum() {
    const total = addNum({ 
      num01: Number(num01), 
      num02: Number(num02) 
    });
    
    setResult(total);
  }

  function handleMultNum() {
    const total = multNum({
      num01: Number(num01), 
      num02: Number(num02)
    })

    setResult(total);
  }

  function handleSubNum() {
    const total = subNum({
      num01: Number(num01), 
      num02: Number(num02)
    })

    setResult(total);
  }

  function handleDivNum() {
    const total = divNum({
      num01: Number(num01), 
      num02: Number(num02)
    })

    setResult(total);
  }

  return [num01, num02, result, setNum01, setNum02, setResult, handleAddNum, handleMultNum, handleDivNum, handleSubNum] as const;
}