import Pilha from './Pilha'

class FIlaDePilha {
    constructor(tamanho = 10){
        this.maxTamanho = tamanho
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
            let resposta = this.pilha2.peek()
            this.pilha2.pop()

            if(this.pilha2.isEmpty()){
                return resposta
            }
            while(this.pilha2.isEmpty()){
                this.pilha1.push(this.pilha2.peek())
                this.pilha2.pop()
            }
        }
    }

    front(){
        while(!this.pilha1.isEmpty()){
            this.pilha2.push(this.pilha1.pop())
        }
        let inicial = this.pilha2.pop()

        this.pilha2.push(inicial)

        while(!this.pilha2.isEmpty()){
            this.pilha1.push(this.pilha2.pop())
        }

        return inicial
    }
}

export default FIlaDePilha