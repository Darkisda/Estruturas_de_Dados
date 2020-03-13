### QUESTAO 


import Lista from './Lista'

class ListaString extends Lista {
    constructor(){
        super()
    }
    
    substring(from, to){
        let aux = new Lista()
        let cont = 0

        if(to > this.size()) {
            throw new Error("Limite Inválido")
        }
        else if(from < 0) {
            throw new Error("Entrada Inválida")
        }
        else {
            while(!this.isEmpty()) {
                let char = this.removeEnd()
                if(cont >= from && cont <= to) {
                    aux.append(char)
                }
                cont ++
            }
    
            let substring = aux.toString()
            return substring
        }
    }
}

export default ListaString


### TESTE

import ListaString from '../src/ListaString'

let ls = new ListaString()

test("Teste String", ()=>{
    ls.add('a')
    ls.add('b')
    ls.add('c')
    ls.add('d')
    ls.add('e')
    ls.add('f')

    ls.substring(2, 6)
    
    expect(()=> {
        ls.substring(0, 10)
    }).toThrowError("Limite Inválido")
})