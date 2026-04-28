export interface CalculatorData{
    num01: number;
    num02: number;
}

export function addNum(data: CalculatorData):number{
    return data.num01 + data.num02;
}

export function multNum(data: CalculatorData):number{
    return data.num01 * data.num02;
}

export function subNum(data: CalculatorData):number{
    return data.num01 - data.num02;
}

export function divNum(data: CalculatorData):number{
    return data.num01 / data.num02;
}