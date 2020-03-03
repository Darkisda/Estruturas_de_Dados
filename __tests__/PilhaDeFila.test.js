import PilhaDeFila from '../src/PIlhaDeFila'

let pf

beforeEach(()=>{
    pf = new PilhaDeFila(5)
})


test("Seila", ()=>{
    pf.push(1)
    pf.push(3)
    pf.push(5)
    pf.push(2)
    pf.push(4)

    pf.print()

    pf.pop()

    pf.print()
})