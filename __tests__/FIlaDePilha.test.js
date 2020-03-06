import FIlaDePilha from '../src/FIlaDePIlha'

let filadepilha

beforeEach(()=>{
    filadepilha = new FIlaDePilha(5)
})

test("Fila de pilha", ()=>{
    filadepilha.enqueue("A")
    expect(filadepilha.front()).toBe("A")
    filadepilha.enqueue("B")
    filadepilha.enqueue("C")
    filadepilha.dequeue()
    expect(filadepilha.front()).toBe("B")
})