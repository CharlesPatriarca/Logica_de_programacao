injetarPao()

function torrar (){
    console.log("Torrando pão")
    console.log("Finalizado")
    
}

function injetarPao (colocar){
    let colocar = prompt("Deseja colocar o pão: ")
    if (colocar == "S" || colocar == "s") {
        console.log("Insira o pão para começar")
    } else {
        console.log("Pode desligar a torradeira")
    }
    torrar()
        
}

