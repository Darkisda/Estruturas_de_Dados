class Node {
    constructor(dado) {
        this.dado = dado
        this.proximo = null
    }
}

class Lista {
    constructor() {
        this.head = new Node(null)
    }

    add(dado) {
        let novo_no = new Node(dado)

        novo_no.proximo = this.head.proximo
        this.head.proximo = novo_no
    }

    append(dado) {
        let novo_no = new Node(dado)

        if(this.isEmpty()){
            this.head.proximo = novo_no
        }
        else {
            let aux = this.head.proximo
            while(aux.proximo !== null) {
                aux = aux.proximo
            }
            aux.proximo = novo_no
        }
    }

    getAt(index) {
        if(this.head.proximo == null) {
            return null
        }
        else {
            let cont = 0
            let atual = this.head.proximo
            while (cont <= index) {
                if(cont == index) {
                    return atual.dado
                }

                atual = atual.proximo
                cont++
            }
        }
        return null
    }

    removeBeginning() {
        if(this.isEmpty()) {
            throw new Error ("A lista está vazia")
        }
        else {
            let aux = this.head.proximo
            this.head.proximo = aux.proximo
        }
    }

    removeEnd() {
        if(this.isEmpty()){
            throw new Error("A lista está vazia")
        }
        let aux_a = this.head
        let aux_b = this.head.proximo
        let final

        while(aux_b.proximo !== null) {
            aux_a = aux_b
            aux_b = aux_b.proximo
        }
        final = aux_b.dado

        aux_b = null
        aux_a.proximo = null

        return final
    }

    isEmpty() {
        return this.head.proximo === null
    }

    toString() {
        let tmp = this.head.proximo
        let txt = ""

        while(tmp !== null) {
            txt += tmp.dado + (tmp.proximo ? "->" : "")
            tmp = tmp.proximo
        }

        return console.log(txt)
    }

    size() {
        let cont = 0
        let tmp = this.head.proximo

        while(tmp !==  null ) {
            tmp = tmp.proximo
            cont ++
        }

        return cont
    }

    addAt(posicao, dado) {
        if(posicao >= this.size()) {
            this.append(dado)
        }
        else {
            if(posicao <= 0) {
                this.add(dado)
            }
            else {
                let novo_no = new Node(dado)
                let i = 0

                let aux_a = this.head
                let aux_b = this.head.proximo

                while(i != posicao) {
                    aux_a = aux_b
                    aux_b = aux_b.proximo
                    i++
                }

                aux_a.proximo = novo_no
                novo_no.proximo = aux_b
            }
        }
    }

    search(dado) {
        if(this.isEmpty()) {
            return false
        }
        else {
            let tmp = this.head.proximo
            
            while(tmp !== null) {
                if(tmp.dado == dado) {
                    return true
                }

                tmp = tmp.proximo
            }
            return false
        }
    }

    addInOrder(dado) {
        let novo_no = new Node(dado)

        if(this.isEmpty()) {
            this.head.proximo = novo_no
        }
        else {
            let aux_a = this.head
            let aux_b = this.head.proximo

            while(aux_b != null) {
                if(aux_b.dado > dado) {
                    aux_a.proximo = novo_no
                    novo_no.proximo = aux_b
                    return
                }

                aux_a = aux_b
                aux_b = aux_b.proximo
            }

            aux_a.proximo = novo_no
            novo_no.proximo = null
            return
        }
    }

    top(){ 
        if(this.isEmpty()){
            throw new Error("A lista está vazia")
        }
        let aux_a = this.head
        let aux_b = this.head.proximo

        while(aux_b.proximo !== null) {
            aux_a = aux_b
            aux_b = aux_b.proximo
        }

        return aux_b.dado
    }
}

export default Lista