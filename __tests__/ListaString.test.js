import ListaString from '../src/ListaString'

let ls = new ListaString()

test("Teste String", ()=>{
    ls.add('a')
    ls.add('b')
    ls.add('c')
    ls.add('d')
    ls.add('e')
    ls.add('f')

    ls.substring(2, 6)
    
    expect(()=> {
        ls.substring(0, 10)
    }).toThrowError("Limite Inválido")
})