/**
 * Implementação de uma TAD Fração
 *  @author {https://github.com/darkisda}
 */

class Fracao{
    constructor(numerador, denominador = 1){
        this.numerador = numerador
        this.denominador = denominador
    }
    
    multiplicacao(numeradorMultiplicacao, denominadorMultiplicacao = 1){
        let numeradorResposta = numeradorMultiplicacao * this.numerador
        let denominadorResposta = denominadorMultiplicacao * this.denominador

        if(denominadorResposta === 0) {
            return console.log("Denominador é igual a 0")
        }
        else {
            return console.log(`${numeradorResposta}` + "/" + `${denominadorResposta}`)
        }
    }

    divisao(numeradorDiviao, denominadorDivisao = 1){
        let numeradorResposta = numeradorDiviao * this.denominador
        let denominadorResposta = denominadorDivisao * this.numerador

        if(denominadorResposta === 0) {
            return console.log("Denominador é igual a 0")
        }
        else {
            return console.log(`${numeradorResposta}` + "/" + `${denominadorResposta}`)
        }
    }
}

export default Fracao