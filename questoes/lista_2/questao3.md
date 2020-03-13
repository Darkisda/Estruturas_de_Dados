### QUESTÃO 3

class ListaSimples {
    
    constructor() {
        this.array = []
    }


    add(novoDado) {
        this.array.unshift(novoDado)
    }

    append(novoDado) {
        this.array.push(novoDado)
    }

    removeBeginning(){
        return this.array.shift()
    }

    removeEnd() {
        return this.array.pop()
    }

    addAt(posicao, dado) {
        if(posicao >= this.array.length) {
            this.append(dado)
        }
        else if (posicao == 0 ) {
            this.add()
        }
        else {
            let aux = []
            for(let i = 0; i<= posicao; i++) {
                if(i == posicao) {
                    aux.unshift(dado)
                    break
                }
                aux.unshift(this.array.pop())
            }
            this.array = this.array.concat(aux)
        }
    }
    

    print() {
        let resultado = "["

        for(let i = 0; i< this.array.length; i ++) resultado += ` ${this.array[i]}, `

        resultado += "]"

        return console.log(resultado)
    }
}

export default ListaSimples



### TESTES 

import ListaSimples from "../src/ListaSimples"

let ls 

beforeEach(()=>{
    ls = new ListaSimples()
})

test("Teste", ()=> {
    ls.add("A")
    ls.add("B")
    ls.add("C")

    ls.print()

    ls.append("Z")
    ls.append("AZ")
    ls.add("U")

    ls.print()

    ls.removeEnd()
    ls.removeBeginning()

    ls.print()

})