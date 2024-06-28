class FormaBolo {
    constructor (nome, saborMassa, saborRecheio){
        this.nome = nome
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio} para ${this.nome}`)
    }

    assar (){
        console.log(`Assando o bolo de ${this.nome} `)
    }
}

let boloFesta = new FormaBolo("Charles", "Massa de Chocolate", "Nutela")
let boloAmor = new FormaBolo("Isabelly", "Noiva", "Caramelo")

boloFesta.escrever()
boloAmor.escrever()
boloFesta.assar()