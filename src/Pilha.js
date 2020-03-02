/**
 * Implementação de um pilha básica
 * @author {https://github.com/darkisda}
 */



class Pilha {

    /**
     * Construtor da pilha
     * @param {number} [tamanho = 10] Caso o tamanho da Pilha não tenha sido informado 
     */
    constructor(tamanho = 10) {
        this.maxTamanho = tamanho
        this.dados = []
        this.topo = -1
    }

    /**
     * Adiciona um novo dado a pilha
     * @param {any} novoDado Novo dado a ser colocado na Pilha
     * @throws {Error} Será lançado um erro caso a pilha esteja cheia
     */
    push(novoDado) {
		if (this.topo +1 == this.maxTamanho) {
			throw new Error("Overflow");
		}
		else {
			this.dados[++this.topo] = novoDado;
		}
    }

    /**
     * Remove último dado da pilha
     * @returns {any} Elemento removido
     * @throws {Error} Será lançado um erro caso a pilha esteja vazia
     */
    pop() {
        if(this.isEmpty()) {
            throw new Error("Underflow")
        }
        else {
            return this.dados[this.topo--]
        }
    }

    /**
     * Retorna o elemento que está no topo sem remover
     * @returns {any} Elemento do topo
     * @throws {Error} Será lançado um erro caso a pilha esteja vazia
     */
    peek() {
        if(this.isEmpty()) {
            throw new Error ("Empty")
        }
        else {
            return this.dados[this.topo]
        }
    }

    /**
     * Mostra toda a pilha e seus elementos
     * @returns {string} Retorna a pilha
     */
    print() {
        let resultado = "["

        for(let i = 0 ; i< this.topo +1 ; i ++) resultado += ` ${this.dados[i]}, `

        resultado += "]"

        return console.log(resultado)
    }

    /**
     * Remove todos os elemntos da pilha
     */
    clear() {
        this.topo = -1
    }

    /**
     * Verifica se a pilha está vazia
     * @returns {boolean} Retorna TRUE se a pilha estiver vazia e FALSE se ela estiver preenchida
     */
    isEmpty() {
        return this.size() === 0
    }

    /**
     * Verifica o tamanho da pilha
     * @returns {number} Tamanho da pilha
     */
    size() {
        return this.topo +1
    }

    /**
     * Troca de lugar o elemento do topo da pilha, com oque está em último
     */
    troca(){
        let auxiliar

        if(this.isEmpty()){
            throw new Error ("Empty")
        }
        else {
            auxiliar = this.dados[this.topo]
            this.dados[this.topo] = this.dados[0]
            this.dados[0] = auxiliar
        }
    }
}

export default Pilha