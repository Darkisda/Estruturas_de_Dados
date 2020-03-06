# QUESTAO 3

import Fila from "./Fila"


class PilhaDeFila{
    constructor(tamanho = 10){
        this.maxTamanho = tamanho
        this.dados = []
        this.topo = -1
        this.fila1 = new Fila(tamanho)
        this.fila2 = new Fila(tamanho)
    }

    push(novoDado){
        if(this.isFull()){
            throw new Error("Overflow")
        }
        else{
            this.topo++
            while(!this.fila1.isEmpty()){
                this.fila2.enqueue(this.fila1.front())
                this.fila1.dequeue()
            }

            this.fila1.enqueue(novoDado)

            while(!this.fila2.isEmpty()){
                this.fila1.enqueue(this.fila2.front())
                this.fila2.dequeue()
            }

            this.dados[this.topo] = this.fila1.front()
        }
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Underflow")
        }
        else {
            this.dados[this.topo] = this.fila1.front()
            this.fila1.dequeue()
            return this.dados[this.topo--]
        }
    }

    isFull(){
        return this.topo+1 === this.maxTamanho
    }

    isEmpty(){
        return this.size() === 0
    }

    size(){
        return this.topo+1
    }

    print() {
        let resultado = "["

        for(let i = 0 ; i< this.topo +1 ; i ++) resultado += ` ${this.dados[i]}, `

        resultado += "]"

        return console.log(resultado)
    }
}

export default PilhaDeFila


# TESTE

import PilhaDeFila from '../src/PIlhaDeFila'

let pf

beforeEach(()=>{
    pf = new PilhaDeFila(5)
})


test("Pilha de Fila", ()=>{
    pf.push(1)
    pf.push(3)
    pf.push(5)
    pf.push(2)
    pf.push(4)

    pf.print()

    pf.pop()

    pf.print()
})