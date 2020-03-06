import Clinica from "../src/Clinica"

let clinica = new Clinica()

test("Testando Clinica",()=>{
    clinica.distribuirSenha('1')
    clinica.distribuirSenha('2')
    clinica.distribuirSenha('3')
    clinica.distribuirSenha('4')
    clinica.distribuirSenha('5')
    clinica.distribuirSenha('6')
    clinica.distribuirSenha('7')
    clinica.distribuirSenha('8')
    clinica.distribuirSenha('9')
    clinica.distribuirSenha('10')
    expect(clinica.tokem.size()).toBe(0)
    expect(clinica.atendente.size()).toBe(10)

    clinica.atender()

    expect(clinica.atendente.size()).toBe(7)
})