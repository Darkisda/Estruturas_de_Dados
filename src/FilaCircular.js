/**
 * Implementação de uma Fila Circular simples
 * @author {https://github.com/darkisda}
 */



class FilaCircular {
    
    /**
     * Construtor da Fila Circular
     * @param {number} [tamanho = 10] Caso o tamanho da Fila Circular não tenha sido informado 
     */
    constructor(tamanho = 10) {
        this.dados = []
        this.inicio = -1
        this.final = -1
        this.tamanhoMaximo = tamanho
    }

    /**
     * Adiciona um novo dado a Fila Circular
     * @param {any} novoDado Novo dado a ser colocado na Fila Circular
     * @throws {Error} Será lançado um erro caso a Fila Circular esteja cheia
     */
    enqueue(novoDado) {
        if(this.isFull()){
            throw new Error ("Queue is full")
        }
        if(this.isEmpty()){
            this.inicio = this.final = 0
        }
        else { 
            this.final = this.proximaPosicaoFinal()
        }
        this.dados[this.final] = novoDado
    }

    /**
     * Remove um dado da Fila Circular
     * @returns {any} Retorna o elemento removido
     * @throws {Error} Será lançado um erro caso a Fila Circular esteja vazia
     */
    dequeue(){
        if(this.isEmpty()){
            throw new Error ("Queue is empty")
        }
        let dadoInicial = this.dados[this.inicio]
        if(this.size===0){
            this.clear()
        }
        else{
            this.inicio = this.proximaPosicaoInicial()
        }
        return dadoInicial
    }

    /**
     * Retorna o dado na frente da Fila Circular sem remove-lo
     * @returns {any} Elemento na frente
     */
    front(){
        return this.dados[this.inicio]
    }

    /**
     * Retorna o tamanho da Fila Circular
     * @returns {number} Tamanho da Fila Circular
     */
    size(){
        if(this.isEmpty()){
            return 0
        }
        else if(this.inicio === this.final){
            return 1
        }
        else if(this.inicio < this.final){
            return this.final - this.inicio +1
        }
        else {
            return this.tamanhoMaximo - this.inicio + this.final +1 
        }
    }

    /**
     * Remove todos os elementos da Fila Circular
     * @returns {number} Fila Circular vazia
     */
    clear(){
        return this.inicio = this.final = -1
    }
    
    /**
     * Verifica se a Fila Circular está vazia
     * @returns {boolean} Retorna TRUE para Fila Circular vazia e FALSE para Fila Circular vazia
     */
    isEmpty(){

        return this.inicio === -1
    }

    /**
     * Verifica se a Fila Circular está cheia
     * @returns {boolean} Retorna TRUE para Fila Circular cheia e FALSE para Fila Circular vazia
     */
    isFull(){
        return (
            (this.inicio === 0 && this.final === this.tamanhoMaximo - 1) ||
            this.final === (this.inicio - 1 ) % (this.tamanhoMaximo - 1)
        )
    }


    /**
     * Mostra a Fila Circular com a formatada
     * @returns {string} Fila Circular formatada e organizada
     */
    toString(){

        let resultado = "["
        if(this.inicio < this.final) {
            for(let i = this.inicio; i <= this.final; i++) {
                resultado += ` ${this.dados[i]} `
            }
        }
        else {
            for(let i = this.inicio; i <= this.tamanhoMaximo; i++) {
                resultado += ` ${this.dados[i]}`
            }
            for(let i = 0; i<= this.final; i++) {
                resultado += ` ${this.dados[i]}`
            }
            resultado += "]"

            return console.log(resultado)
        }
    }

    /**
     * Chegar qual a proxima posição final
     * @returns Posicao final futura
     */
    proximaPosicaoFinal(){
        return this.final === this.tamanhoMaximo - 1 && this.inicio != 0 ? 0 : this.final + 1
    
    }

    /**
     * Chegar qual a proxima posição inicial
     * @returns Posicao inicial futura
     */
    proximaPosicaoInicial(){
        return this.inicio === this.tamanhoMaximo - 1 ? 0 : this.inicio + 1
    }

}

export default FilaCircular