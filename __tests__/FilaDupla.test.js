import FilaDupla from '../src/FilaDupla'

let filadupla

beforeEach(()=>{
    filadupla = new FilaDupla(5)
})

test("Fila Dupla", ()=> {
    filadupla.enqueue("A")
    filadupla.inserirFinal("B")
    filadupla.inserirFinal("C")
    filadupla.enqueue("d")
    filadupla.removerFinal()
    filadupla.inserirFinal("f")
    filadupla.enqueue("D")
    filadupla.dequeue()
 
    filadupla.print()
})