import ListaDuplamente from '../src/ListaDuplamente'
import Lista from '../src/Lista'

let ld
let list

beforeEach(()=>{
    ld = new ListaDuplamente()
    list = new Lista()
})

test("Testando", () => {
    ld.add("A")
    ld.add("B")
    ld.add("C")

    ld.toString()

    list.add("1")
    list.add("2")
    list.add("3")

    ld.toDouble(list)
})