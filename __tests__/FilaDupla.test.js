import FilaDupla from '../src/FilaDupla'

let filadupla

beforeEach(()=>{
    filadupla = new FilaDupla(5)
})

test("Fila Dupla", ()=> {
    filadupla.inserirInicio("A")
    filadupla.inserirFinal("B")
    filadupla.inserirInicio("C")
    filadupla.inserirFinal("D")
    filadupla.inserirInicio("E")

    filadupla.print()

    filadupla.removerFinal()
    filadupla.removerInicio()

    filadupla.print()
})