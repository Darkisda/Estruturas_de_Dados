import Questao4 from './Questao4'

let q = new Questao4()

test("ASD", ()=>{
    q.add("AAA")
    q.add("VVV")
    q.add("ASDASD")
    q.add("AQWE")

    q.toString()

    q.inverter()
})