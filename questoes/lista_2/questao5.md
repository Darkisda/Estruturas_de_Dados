### Questão 5


    embaralhar() { 
        for (let i = 0; i < this.size(); i++) {
            this.addAt(Math.floor(Math.random() * this.size()), this.removeEnd())
        }

        return
    }


### Testes


import Lista from "../src/Lista"

let lista 

beforeEach(()=> {
    lista = new Lista
})

test("Testando", ()=> {
    lista.add("A")
    lista.add("B")
    lista.add("C")
    lista.add("D")
    lista.add("E")

    lista.embaralhar()
    lista.toString()
})