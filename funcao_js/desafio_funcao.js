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
    resultado = vitorias - derrotas
    return resultado
}



if (resultado < 10){
    console.log(`O herói tem de saldo positivo de ${resultado} vitórias e está no nível Ferro`)
}

else if (resultado > 10 && resultado <= 20){
    console.log(`O herói tem de saldo positivo de ${resultado} vitórias e está no nível Bronze`)
}

else if (resultado > 20 && resultado <= 50){
    console.log(`O herói tem de saldo positivo de ${resultado} vitórias e está no nível Prata`)
}

else if (resultado > 50 && resultado <= 80){
    console.log(`O herói tem de saldo positivo de ${resultado} vitórias e está no nível Ouro`)
}

else if (resultado > 80 && resultado <= 90){
    console.log(`O herói tem de saldo positivo de ${resultado} vitórias e está no nível Diamante`)
}

else if (resultado > 90 && resultado <= 100){
    console.log(`O herói tem de saldo positivo de ${resultado} vitórias e está no nível Lendário`)
}

else {
    console.log(`O herói tem de saldo positivo de ${resultado} vitórias e está no nível Imortal`)
}