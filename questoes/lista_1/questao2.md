# QUESTÃO 2

    troca(){

        let final = new Pilha(this.maxTamanho)
        let auxiliar = new Pilha(this.maxTamanho)
        
        if(this.isEmpty()){
            throw new Error ("Empty")
        }
        else {

            final.push(this.peek())
            this.pop()
            
            while(this.maxTamanho != (this.topo + this.maxTamanho)){
                auxiliar.push(this.peek())
                this.pop()
            }

            while(auxiliar.maxTamanho != (auxiliar.topo + auxiliar.maxTamanho + 1)){
                final.push(auxiliar.peek())
                auxiliar.pop()
            }
            
            final.push(this.peek())
    }

# TESTE

    test("Troca", ()=>{
        pilha.push("A")
        pilha.push("B")
        pilha.push("C")
        pilha.push("D")
        pilha.push("E")
        pilha.push("F")
        pilha.push("G")
        pilha.troca()
    })