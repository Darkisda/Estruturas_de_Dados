import Questao8 from './Questao8'
import Lista from '../../src/Lista'

let q = new Questao8()
let ld = new Lista()

test("AA", ()=> {
    ld.add("A")
    ld.append("Z")
    ld.append("U")
    ld.add("B")

    q.toDouble(ld)
})