import Fila from './Fila'

class Clinica extends Fila {
    constructor(tamanho){
        super(tamanho)
        this.tokem = new Fila(tamanho)
        this.atendente = new Fila(tamanho)
    }

    distribuirSenha(pessoa) {
        this.tokem.enqueue(pessoa)

        if(!this.atendente.isFull){
            this.atendente.enqueue(this.tokem.front())
            this.tokem.dequeue()

            if(this.tokem.isEmpty()){
                this.tokem.clear()
            }
        }
    }

    atender(){
        if(this.atendente.isEmpty()) {
            throw new Error("Não há ninguém para atender")
        }
        else if (this.atendente.size() >= 3) {
            for(let i = 0; i < 3; i++){
                this.atendente.dequeue()
            }
        }
        else if(this.atendente.size() < 3 && this.atendente > 0) {
            let cont = this.atendente.size()

            while(cont > 0) {
                this.atendente.dequeue()
                cont --
            }
        }

        if(this.atendente.isEmpty()) {
            this.atendente.clear()
        }
    }
}

export default Clinica