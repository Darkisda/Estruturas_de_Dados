# QUESTAO 5

    decToBin(numero){
        let pilha = new Pilha(8)

        for (let i = 0; i <8; i++){
            pilha.push(parseInt(numero % 2))
            numero /= 2
        }
        for (let i = 0; i<8; i++) {
            this.push(pilha.pop())
        }

        this.print()
    }

# TESTE


test("Dec To Bin", ()=> {
    pilha.decToBin(5)
})