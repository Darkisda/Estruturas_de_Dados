import Lista from './Lista'

class Pessoa extends Lista {
    constructor() {
        super()
        this.nome
        this.idade
    }

    addPessoa(valor1, valor2){
        if(isNaN(valor1)) {
            this.nome = valor1
            this.idade = valor2
        }
        else {
            this.nome = valor2
            this.idade = valor1
        }

        this.add([this.nome, this.idade])
    }

    alfabetica(){
        let alfabetica = new Lista()

        for(let i =0; i<this.size(); i++) {
            let tmp = this.head.proximo
            
            
            while(tmp.proximo !== null) {
                
                if(alfabetica.search(tmp.dado[0])){
                    tmp = tmp.proximo
                }
                else if(tmp.dado[0].charAt() <= tmp.proximo.dado[0]){
                    alfabetica.add(tmp.dado)
                }
                else {
                    alfabetica.add(tmp.proximo.dado)
                }
            }

            tmp = tmp.proximo
        }

        alfabetica.toString()
    }
}

export default Pessoa