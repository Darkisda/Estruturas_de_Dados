class Fila {
    constructor(tamanho = 10) {
        this.dados = []
        this.inicio = 0
        this.final = 0
        this.tamanhoMaximo = tamanho
    }

    enqueue(novoDado){
        if(this.isFull()) {
            throw new Error ("Overflow")
        }
        else {
            return this.dados[this.final++] = novoDado
        }
    
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error ("Underflow")
        }
        else {
            return this.dados[this.inicio++]
        }
    }

    front(){
        if(this.isEmpty()){
            return new Error("Underflow")
        }
        else {
            return this.dados[this.inicio]
        }
    }

    size(){
        return this.final - this.inicio
    }

    isEmpty(){
        return this.final === this.inicio
    }

    isFull(){
        return this.size() === this.tamanhoMaximo
    }
}

export default Fila