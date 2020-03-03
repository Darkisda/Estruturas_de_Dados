class FilaDupla{
    constructor(tamanho = 10){
        this.dados = []
        this.inicio = 0
        this.final = 0
        this.tamanhoMaximo = tamanho
        this.anterior = 0
        this.proximo = 0
    }

    /**TODO THIS FUCKING ALL CODE */

    inserirInicio(novoDado){
        if(this.isFull()){
            throw new Error("Is Full")
        }
        else {
            return this.dados[this.final++] = novoDado
        }
    }

    inserirFinal(novoDado){
        
        if(this.isFull()){
            throw new Error("Is Full")
        }
        else {
            return this.dados[--this.auxiliar] = novoDado
        }
    }

    removerInicio(){
        if(this.isEmpty()){
            throw new Error("Is Empty")
        }
        else {
            return this.dados[--this.inicio]
        }
    }

    removerFinal(){
        if(this.isEmpty()){
            throw new Error("Is Empty")
        }
        else {
            return this.dados[this.auxiliar--]
        }
    }


    print(){
        let resposta = "["

        for(let i = 0; i< this.tamanhoMaximo; i++) resposta += `${this.dados[i]}, `

        resposta += "]"

        return console.log(resposta)
    }

    isEmpty(){
        return this.final === this.inicio
    }

    isFull(){
        return this.size() === this.tamanhoMaximo
    }

    size(){
        return this.final - this.inicio
    }
}

export default FilaDupla