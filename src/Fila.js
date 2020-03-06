/**
 * Implementação de um Fila simples
 * @author {https://github.com/darkisda}
 */



class Fila {

    /**
     * Construtor da Fila
     * @param {number} [tamanho = 10] Caso o tamanho da Fila não tenha sido informado 
     */
    constructor(tamanho = 10) {
        this.dados = []
        this.inicio = 0
        this.final = 0
        this.tamanhoMaximo = tamanho
    }

    /**
     * Adiciona um novo dado a Fila
     * @param {any} novoDado Novo dado a ser colocado na Fila
     * @throws {Error} Será lançado um erro caso a Fila esteja cheia
     */
    enqueue(novoDado){
        if(this.isFull()) {
            throw new Error ("Queue is full")
        }
        else {
            this.dados[this.final++] = novoDado
        }
    
    }

    /**
     * Remove um dado da Fila
     * @returns {any} Retorna o elemento removido
     * @throws {Error} Será lançado um erro caso a Fila esteja vazia
     */
    dequeue(){
        if(this.isEmpty()){
            throw new Error ("Queue is empty")
        }
        else {
            return this.dados[this.inicio++]
        }
    }

    /**
     * Retorna o dado na frente da Fila sem remove-lo
     * @returns {any} Elemento na frente
     * @throws {Error} Será lançado um erro caso a Fila esteja vazia
     */
    front(){
        if(this.isEmpty()){
            return new Error("Queue is Empty")
        }
        else {
            return this.dados[this.inicio]
        }
    }

    /**
     * Retorna o tamanho da Fila
     * @returns {number} Tamanho da Fila
     */
    size(){
        return this.final - this.inicio
    }

    /**
     * Verifica se a Fila está vazia
     * @returns {boolean} Retorna TRUE para fila vazia e FALSE para fila vazia
     */
    isEmpty(){
        return this.final === this.inicio
    }

    /**
     * Verifica se a Fila está cheia
     * @returns {boolean} Retorna TRUE para fila cheia e FALSE para fila vazia
     */
    isFull(){
        return this.size() === this.tamanhoMaximo
    }
    
    clear(){
        return this.inicio = this.final
    }
}

export default Fila