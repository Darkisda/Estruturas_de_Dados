import Pessoa from '../src/Pessoa'

let p = new Pessoa()

test("blah", ()=> {
    p.addPessoa("Luan", 19)
    p.addPessoa("Bananinha", 22)
    p.addPessoa("Cenourinha", 122)
    p.addPessoa("pipipipopopo", 123)

    p.alfabetica()
})