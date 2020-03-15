import Lista from '../../src/Lista'

class Questao4 extends Lista {
    constructor() {
        super()
    }

    
    inverter() {
        let aux = this.head
        let final = new Lista()
        while(aux.proximo !== null) {
            aux = aux.proximo
            final.add(aux.dado)
        }

        final.toString()
    }
}

export default Questao4