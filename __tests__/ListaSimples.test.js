import ListaSimples from "../src/ListaSimples"

let ls 

beforeEach(()=>{
    ls = new ListaSimples
})

test("Teste", ()=> {
    ls.add("A")
    ls.add("B")
    ls.add("C")

})