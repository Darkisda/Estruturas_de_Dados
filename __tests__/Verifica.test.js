import Verifica from "../src/Verifica"

test("Verficação de ()",()=>{
    let verifica = new Verifica("([()])")

    verifica.verifica()
})