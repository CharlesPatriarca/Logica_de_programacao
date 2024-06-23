torrar ("Pão integral", "Isabelly", 24.35)

// se não definir o valor do parametro, ele fica cliente
// se definir a prioridade é o que foi definido
function torrar (pao, nome = "cliente", valor){
    
    console.log(pao + " está pronto")
    console.log("Pode levar para o " + nome)
    console.log("O valor do pedido é " + valor)
}


createStringConnection("db_products", "Charles", 1234)
function createStringConnection (databaseName, user, pass){
    console.log(`connect: DBCONNECT; user = ${user}; pass = ${pass}; initial_database = ${databaseName}`)
}