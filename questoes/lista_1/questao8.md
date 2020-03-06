# QUESTAO 8

import Pilha from "./Pilha"

class Verifica {
    constructor(string){
        this.texto = string
        this.tamanho = string.length
        this.pilha = new Pilha(this.tamanho)
    }

    verifica(){
        for(let i = 0; i<this.tamanho; i++) {
            if(this.texto.charAt(i) === '(' || this.texto.charAt(i) === '[') {
                this.pilha.push(this.texto.charAt(i))
            }
            else if(this.texto.charAt(i) === ')' || this.texto.charAt(i) === ']'){
                if(this.pilha.size()<=0){
                    throw new Error("Mal formada")
                }
                this.pilha.pop()
            }
        }
        if(this.pilha.size()===0){
            return console.log("Válida")
        }
        else {
            return console.log("Inválido")
        }
    }
}

export default Verifica

# TESTE 

import Verifica from "../src/Verifica"

test("Verficação de ()",()=>{
    let verifica = new Verifica("([()])")

    verifica.verifica()
})