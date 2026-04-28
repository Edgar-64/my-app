/*export interface CalculatorData{
    num01: number;
}
export function ParOuImpar(data: CalculatorData):string{
        if (data.num01 % 2) {
             return "par";
        }
        else {
            return "impar";
        }
}*/

export interface Login {
    Id: number;
    Nome: string;
    Email: string;
}

export function FazerLogin(user: Login):string{

    if (user.Id == 1 && user.Email == "edgar@email.com" && user.Nome == "edgar") {
        return "Bem-Vindo";
    } else {
        return "Acesso Negado";
    }
}