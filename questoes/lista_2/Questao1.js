import Lista from '../../src/Lista'

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