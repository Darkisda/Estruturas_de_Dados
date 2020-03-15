import Lista from '../../src/Lista'

class Questao5 extends Lista {
    constructor(){
        super()
    }

    embaralhar() { 
        for (let i = 0; i < this.size(); i++) {
            this.addAt(Math.floor(Math.random() * this.size()), this.removeEnd())
        }

        return this.toString()
    }
}

export default Questao5