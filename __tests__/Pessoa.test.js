import Pessoa from '../src/Pessoa'

let p = new Pessoa()

test("blah", ()=> {
    p.addPessoa("Luan", 1999)
    p.addPessoa("Ziraldo", 22)
    p.addPessoa("Araujo", 123)
    p.addPessoa("Cenourinha", 122)

    p.alfabetica()
})