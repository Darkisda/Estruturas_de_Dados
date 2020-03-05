import FIlaDePilha from '../src/FIlaDePIlha'

let filadepilha

beforeEach(()=>{
    filadepilha = new FIlaDePilha(5)
})

test("Fila de pilha", ()=>{
    filadepilha.enqueue(5)
    filadepilha.enqueue("A")
    filadepilha.enqueue("s")
    filadepilha.print()
    filadepilha.dequeue()
    filadepilha.print()
})