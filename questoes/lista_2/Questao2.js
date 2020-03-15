import Lista from '../../src/Lista'

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