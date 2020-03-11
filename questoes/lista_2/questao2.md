### Questão 2


import Lista from './Lista'

class FilaDinamica {
    constructor() {
        this.lista = new Lista()
    }
    
    enqueue(novoDado) {
        this.lista.append(novoDado)
    }

    dequeue() {
        return this.lista.removeBeginning()
    }

    front() {
        return this.lista.head.proximo.dado
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

export default FilaDinamica


### Testes

import FilaDinamica from '../src/FilaDinamica'

let fd

beforeEach(()=>{
    fd = new FilaDinamica()
})

test("Fila Dinamica", ()=> {
    fd.enqueue("A")
    fd.enqueue("B")
    fd.enqueue("C")
    fd.enqueue("D")
    expect(fd.toString()).toBe("[A, B, C, D, ]")

    expect(fd.front()).toBe("A")

    fd.dequeue()
    expect(fd.toString()).toBe("[B, C, D, ]")
})