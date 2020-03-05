import Pilha from './Pilha'

class FIlaDePilha {
    constructor(tamanho = 10){
        this.dados = []
        this.maxTamanho - tamanho
        this.pilha1 = new Pilha(tamanho)
        this.pilha2 = new Pilha(tamanho)
    }

    enqueue(novoDado){
        if(this.pilha1.isFull()){
            throw new Error ("Overflow")
        }
        else{
            this.pilha1.push(novoDado)
        }
    }

    dequeue(){
        if(this.pilha1.isEmpty()){
            throw new Error("Underflow")
        }
        else {
            while(!this.pilha1.isEmpty()){
                this.pilha2.push(this.pilha1.peek())
                this.pilha1.pop()
            }

            let res = this.pilha2.pop()

            if(this.pilha1.isEmpty){
                return res
            }

            while(!this.pilha2.isEmpty()){
                this.pilha1.push(this.pilha2.peek())
                this.pilha2.pop()
            }
            return res
        }
    }

    front(){
        while(!this.pilha1.isEmpty()){
            this.pilha2.push(this.pilha1.pop())
        }
        let inicio = this.pilha2.pop()

        this.pilha2.push(inicio)

        while(!this.pilha2.isEmpty()){
            this.pilha1.push(this.pilha2.pop())
        }

        return inicio
    }

    print(){
        let restultado = "["

        for(let i = 0; i < this.maxTamanho; i++) restultado += `${this.pilha1.dados[i]}, `

        restultado += "]"

        return console.log(restultado)
    }
}

export default FIlaDePilha