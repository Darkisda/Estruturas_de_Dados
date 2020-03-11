class ListaSimples {
    constructor() {
        this.dados = []
        this.dado = {
            atual:  null,
            proximo:  null
        }
        this.topo = -1
    }
    add(novoDado) {
        this.dado.atual = novoDado
        this.dados[++this.topo] = this.dado.atual
        console.log(this.dado)
    }

    print() {
        let resultado = "["

        for(let i = 0 ; i< this.topo +1 ; i ++) resultado += ` ${this.dados[i]}, `

        resultado += "]"

        return console.log(resultado)
    }
}

export default ListaSimples