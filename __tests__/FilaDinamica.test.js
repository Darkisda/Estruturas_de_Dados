import FilaDinamica from '../src/FilaDinamica'

let fd

beforeEach(()=>{
    fd = new FilaDinamica()
})

test("Fila Dinamica", ()=> {
    fd.enqueue("A")
    fd.enqueue("B")
    fd.enqueue("C")
    fd.enqueue("D")
    expect(fd.toString()).toBe("[A, B, C, D, ]")

    expect(fd.front()).toBe("A")

    fd.dequeue()
    expect(fd.toString()).toBe("[B, C, D, ]")
})