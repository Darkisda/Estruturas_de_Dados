# QUESTAO 6


import Fila from "./Fila"

class FilaDupla extends Fila{
    constructor(tamanho = 10){
        super(tamanho)
        this.aux = new Fila(tamanho)
    }


    inserirInicio(novoDado){
        if(this.isFull()){
            throw new Error("Is Full")
        }
        if(this.isEmpty()){
            this.enqueue(novoDado)
        }
        while(!this.isEmpty()){
            this.aux.enqueue(this.front())
            this.dequeue()
        }

        this.clear()
        this.enqueue(novoDado)

        while(!this.aux.isEmpty()){
            this.enqueue(this.aux.front())
            this.aux.dequeue()
        }

        this.clear()
    }

    inserirFinal(novoDado){
        
        if(this.isFull()){
            throw new Error("Is Full")
        }
        else if(this.isEmpty()){
            this.inicio = this.final = 0
        }
        this.enqueue(novoDado)
    }

    removerInicio(){
        if(this.isEmpty()){
            throw new Error("Underflow")
        }
        else {
            return this.dequeue()
        }
    }

    removerFinal(){
        if(this.isEmpty()){
            throw new Error ("Underflow")
        }
        else {
            for(let i = 0; i<this.size()-1; i++){
                this.aux.enqueue(this.dequeue())
            }
            let resposta =  this.dequeue()
            this.clear()

            while(!this.aux.isEmpty()){
                this.enqueue(this.aux.dequeue())
            }
            this.aux.clear()

            return resposta
        }
    }
}

export default FilaDupla


# TESTE

import FilaDupla from '../src/FilaDupla'

let filadupla

beforeEach(()=>{
    filadupla = new FilaDupla(5)
})

test("Fila Dupla", ()=> {
    filadupla.enqueue("A")
    filadupla.inserirFinal("B")
    filadupla.inserirFinal("C")
    filadupla.enqueue("d")
    filadupla.removerFinal()
    filadupla.inserirFinal("f")
    filadupla.enqueue("D")
    expect(filadupla.front()).toBe("A")
})