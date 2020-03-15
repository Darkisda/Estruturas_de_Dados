import ListaSimples from "./Questao3"

let ls 

beforeEach(()=>{
    ls = new ListaSimples()
})

test("Teste", ()=> {
    ls.add("A")
    ls.add("B")
    ls.add("C")

    ls.print()

    ls.append("Z")
    ls.append("AZ")
    ls.add("U")

    ls.print()

    ls.removeEnd()
    ls.removeBeginning()

    ls.print()

})