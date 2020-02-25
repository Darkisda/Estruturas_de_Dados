export default class Pilha {
    constructor(tamanho = 10) {
        this.maxTamanho = tamanho
        this.dados = []
        this.topo = -1
    }

    push(novoDado) {
		if (this.topo +1 == this.maxTamanho) {
			throw new Error("Overflow");
		}
		else {
			this.dados[++this.topo] = novoDado;
		}
    }
    
    pop() {
        if(this.topo -1 < 0) {
            throw new Error("Underflow")
        }
        else {
            return this.dados[this.topo--]
        }
    }

    peek() {
        if( (this.topo + 1) === 0) {
            return console.log("Empty")
        }
        else {
            return console.log(this.dados[this.topo])
        }
    }


    print() {
        let resultado = "["

        for(let i = 0 ; i< this.topo ; i ++) resultado += ` ${this.dados[i]}, `

        resultado += "]"

        return console.log(resultado)
    }

    clear() {
        this.topo = -1
    }

    isEmpty() {
        if( (this.topo +1) === 0 ) {
            return console.log("Vazio")
        }
    }
}