import Fila from '../src/Fila'


let fila

beforeEach(()=>{
    fila = new Fila(5)
})

test("FilaTeste", ()=>{
    expect(fila.size()).toBe(0)
    fila.enqueue("A")
    expect(fila.size()).toBe(1)
    expect(fila.front()).toBe("A")
    fila.enqueue("B")
    expect(fila.front()).toBe("A")
    expect(fila.size()).toBe(2)
    fila.enqueue("C")
    fila.enqueue("D")
    fila.enqueue("E")
    expect(()=>{
        fila.enqueue("F")
    }).toThrowError("Overflow")
    expect(fila.dequeue()).toBe("A")
    expect(fila.dequeue()).toBe("B")
    expect(fila.dequeue()).toBe("C")
    expect(fila.dequeue()).toBe("D")
    expect(fila.dequeue()).toBe("E")
    expect(()=> {
        fila.dequeue()
    }).toThrowError("Underflow")
    expect(fila.size()).toBe(0)
})