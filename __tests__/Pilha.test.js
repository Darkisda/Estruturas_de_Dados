import Pilha from "../src/Pilha"

let pilha

beforeEach(()=>{
    pilha = new Pilha(8)  //Designando um novo valor para o tamanho da pilha

})

/*
test("TestePush", ()=> {
    
    pilha.push(1)
    pilha.push(2)
    pilha.push(3)
    pilha.push(4)
    pilha.push(5)

    expect(()=> {
        pilha.push(6)
    }).toThrowError("Overflow")

})

test("TestePop", ()=> {
    
    expect(()=>{
        pilha.pop()
    }).toThrowError("Underflow")

})


test("TestePeek1", ()=> {
 
    expect(()=>{
        pilha.peek()
    }).toThrowError("Empty")
})



test("TestePeek2", ()=> {
    pilha.push(3)

    expect(pilha.peek()).toBe(3)
})

test("TestePrint", ()=> {
    pilha.push(4)
    pilha.push(6)
    pilha.push(9)
    pilha.pop()
    pilha.push(10)
    pilha.push(123)
    pilha.push(333333)
    pilha.pop()
    pilha.push(123)

    pilha.print()

    pilha.clear()
    pilha.isEmpty()
    pilha.print()

    pilha.push(3)
    pilha.push(1)
    pilha.pop()
    pilha.push(234)

    pilha.print()
})
*/
/*
test("Troca", ()=>{
    pilha.push("A")
    pilha.push("B")
    pilha.push("C")
    pilha.push("D")
    pilha.push("E")
    pilha.push("F")
    pilha.push("G")
    pilha.print()
    pilha.troca()
})
*/

test("Dec To Bin", ()=> {
    pilha.decToBin(5)
})