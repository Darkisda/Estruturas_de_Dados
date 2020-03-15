import Lista from './Lista'

class Pessoa {
    constructor() {
        this.lista = new Lista()
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

        this.lista.add([this.nome, this.idade])
    }

    alfabetica(){
        let listaAlfabetica = new Lista()
        let tmp = this.lista.head.proximo

        console.log(tmp.proximo.dado[0])
        console.log(tmp.proximo.dado[0].charAt())

        while (tmp.proximo !== null) {

            console.log(tmp.dado)

            if(tmp.dado[0].charAt() < tmp.proximo.dado[0].charAt()) {
                listaAlfabetica.add(tmp.dado)
            } 
            else{
                listaAlfabetica.add(tmp.proximo.dado)
            }

            tmp = tmp.proximo
        }

        return listaAlfabetica.toString()
    }

    numerica(){
        let listaNumerica = new Lista()

        return listaNumerica.toString()
    }
}

export default Pessoa