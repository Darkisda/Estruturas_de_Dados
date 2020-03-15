import PilhaDinamica from "./Questao1"

let pd

beforeEach(()=>{
    pd = new PilhaDinamica()
})

test("Pilha Dinamica", ()=> {
    pd.push("A")
    pd.push("B")
    pd.push("C")
    pd.push("D")
    expect(pd.toString()).toBe("[A, B, C, D, ]")
    pd.pop()
    pd.push("E")
    expect(pd.toString()).toBe("[A, B, C, E, ]")
    expect(pd.peek()).toBe("E")
})