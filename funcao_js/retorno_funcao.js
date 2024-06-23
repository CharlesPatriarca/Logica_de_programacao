let saldoVitorias = soma (8,9)

console.log(`O resultado é ${saldoVitorias}`)


function soma (numA, numB){
    let somatorio = numA + numB
    return somatorio
}

console.log()

let userName = getFirstName("Charles Patriarca", " ")
console.log(`Seja bem vindo senhor ${userName}`)

userName = getFirstName("Isabelly-Xavier-Patriarca", "-")
console.log(`Seja bem vindo senhora ${userName}`)


function getFirstName (name, splitChar){
    let firstName = name.split (splitChar) [0]
    return firstName
}