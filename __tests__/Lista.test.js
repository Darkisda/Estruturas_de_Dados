import Lista from "../src/Lista"

let lista 

beforeEach(()=> {
    lista = new Lista
})

test("Testando", ()=> {
    lista.add("A")
    lista.add("B")
    lista.add("C")
    lista.add("D")
    lista.add("E")

    lista.toString()
    lista.inverter()
})