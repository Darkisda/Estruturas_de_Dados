### Questão 1

import Lista from './Lista'

class PilhaDinamica {
    constructor(){
        this.lista = new Lista()
    }

    push(novoDado) {
        this.lista.append(novoDado)
    }

    pop() {
        return this.lista.removeEnd()
    }

    peek() {
        return this.lista.top()
    }

    toString() {
        let resultado = "["
        let tmp = this.lista.head.proximo

        while(tmp !== null) {
            resultado += tmp.dado + ", "
            tmp = tmp.proximo
        }

        resultado += "]"

        return resultado
    }
}
export default PilhaDinamica


### Testes

import PilhaDinamica from "../src/PilhaDinamica"

let pd

beforeEach(()=>{
    pd = new PilhaDinamica()
})

test("Pilha Dinamica", ()=> {
    pd.push("A")
    pd.push("B")
    pd.push("C")
    pd.push("D")
    expect(pd.toString()).toBe("[A, B, C, D, ]")
    pd.pop()
    pd.push("E")
    expect(pd.toString()).toBe("[A, B, C, E, ]")
    expect(pd.peek()).toBe("E")
})