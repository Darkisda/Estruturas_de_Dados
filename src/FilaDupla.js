import Fila from "./Fila"

class FilaDupla extends Fila{
    constructor(tamanho = 10){
        super(tamanho)
    }

    /**TODO THIS FUCKING ALL CODE */

    inserirInicio(novoDado){
        if(this.isFull()){
            throw new Error("Is Full")
        }
        else if (this.inicio === 0) {
            throw new Error ("Inicio cheio")
        }
        else if (this.isEmpty()){
            this.inicio = this.final = 0
        }
        else {
            this.dados[this.inicio++] = novoDado
        }
    }

    inserirFinal(novoDado){
        
        if(this.isFull()){
            throw new Error("Is Full")
        }
        else if(this.isEmpty()){
            this.inicio = this.final = 0
        }
        this.dados[this.final++] = novoDado
    }

    removerInicio(){
        if(this.isEmpty()){
            throw new Error("Underflow")
        }
        else if(this.size() === 1) {
            let temp = this.inicio
            this.inicio = this.final = -1
            return this.dados[temp]
        }
        return this.dado[this.inicio++]
    }

    removerFinal(){
        if(this.isEmpty()){
            throw new Error ("Underflow")
        }
        else if(this.size()===1){
            let temp = this.final
            this.inicio = this.final = -1
            return this.dados[temp]
        }
        return this.dados[this.final--]
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