### Questão 4

    inverter() {
        let aux = this.head
        let final = new Lista()
        while(aux.proximo !== null) {
            aux = aux.proximo
            final.add(aux.dado)
        }

        final.toString()
    }