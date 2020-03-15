import Lista from '../../src/Lista'
import ListaDuplamente from '../../src/ListaDuplamente'

class Questao8 extends Lista {
    constructor() {
        super()
    }

    toDouble(listaSimples){
        let listaDuplamente = new ListaDuplamente()

        let tmp = listaSimples.head.proximo

        while(tmp !== null) {
            listaDuplamente.add(tmp.dado)
            tmp = tmp.proximo
        }

        return listaDuplamente
    }
}

export default Questao8