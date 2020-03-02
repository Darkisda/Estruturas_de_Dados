import Fracao from '../src/Fracao'

test("Multiplicacao1", ()=>{
    let fracao = new Fracao(4)

    fracao.multiplicacao(4,5)
})

test("Multiplicacao2", ()=>{
    let fracao = new Fracao(4,8)

    fracao.multiplicacao(3,0)
})

test("Divisao", ()=>{
    let fracao = new Fracao(5)

    fracao.divisao(5,3)
})

test("Divisao2", ()=>{
    let fracao = new Fracao(4,5)

    fracao.divisao(7,0)
})