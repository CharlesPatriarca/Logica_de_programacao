/*
Calculadora de partidas rankeadas

o que deve ser utilizado:
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão
- Funções

Obejetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para a uma variável, o saldo de rankeadas deve ser feito do calculo (Vitorias - derrotas)

Se vitorias for menor do que 10 = Ferro
Se vitorias for entre 11 e 20 = Bronze
Se vitorias for entre 21 e 50 = Prata
Se vitorias for entre 52 e 80 = Ouro
Se vitorias for entre 81 e 90 = Diamante
Se vitorias for entre 91 e 100 = Lendário
Se vitorias for igual ou maior a 110 = Imortal

Ao final deve se exibir uma mensagem: "O herói tem de saldo de {saldoVitorias} vitótrias e está no nível {nivel}"
*/



let resultado = saldoRankeada(vitorias, derrotas)
function saldoRankeada(vitorias, derrotas){
    vitorias = parseInt(prompt("Qual seu saldo de vitórias: "))
    derrotas = parseInt(prompt("Qual seu saldo de derrotas: "))
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}



if (saldoVitorias < 10){
    console.log(`O herói tem de saldo positivo de ${saldoVitorias} vitórias e está no nível Ferro`)
}

else if (saldoVitorias > 10 && saldoVitorias <= 20){
    console.log(`O herói tem de saldo positivo de ${saldoVitorias} vitórias e está no nível Bronze`)
}

else if (saldoVitorias > 20 && saldoVitorias <= 50){
    console.log(`O herói tem de saldo positivo de ${saldoVitorias} vitórias e está no nível Prata`)
}

else if (saldoVitorias > 50 && saldoVitorias <= 80){
    console.log(`O herói tem de saldo positivo de ${saldoVitorias} vitórias e está no nível Ouro`)
}

else if (saldoVitorias > 80 && saldoVitorias <= 90){
    console.log(`O herói tem de saldo positivo de ${saldoVitorias} vitórias e está no nível Diamante`)
}

else if (saldoVitorias > 90 && saldoVitorias <= 100){
    console.log(`O herói tem de saldo positivo de ${saldoVitorias} vitórias e está no nível Lendário`)
}

else {
    console.log(`O herói tem de saldo positivo de ${saldoVitorias} vitórias e está no nível Imortal`)
}