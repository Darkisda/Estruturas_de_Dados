/**
 * Implementação de uma TAD Fração
 *  @author {https://github.com/darkisda}
 */

class Fracao{
    constructor(numerador, denominador = 1){
        this.numerador = numerador
        this.denominador = denominador
    }
    
    multiplicacao(fracao){
        let numeradorResposta = fracao.numerador * this.numerador
        let denominadorResposta = fracao.denominador * this.denominador

        if(denominadorResposta === 0) {
            return console.log("Denominador é igual a 0")
        }
        else {
            let fracaoResposta = new Fracao(numeradorResposta, denominadorResposta)

            this.print(fracaoResposta)
        }
    }

    divisao(fracao){
        let numeradorResposta = fracao.numerador * this.denominador
        let denominadorResposta = fracao.denominador * this.numerador

        if(denominadorResposta === 0) {
            return console.log("Denominador é igual a 0")
        }
        else {
            let fracaoResposta = new Fracao(numeradorResposta, denominadorResposta)

            this.print(fracaoResposta)
        }
    }

    print(fracao){
        return console.log(`${fracao.numerador}` + "/" + `${fracao.denominador}`)
    }
}

export default Fracao