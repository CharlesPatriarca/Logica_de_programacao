/* JSON - JavaScript Object Notation
 Chave de valor com o objetivo de transferir dados*/

/*
let name = "Charles";
let age = 23;
let products = ["Mouse Gamer", "Teclado mecânico", "Monitor Acer"];
let productsValues = [50.25, 68.89, 845.75];

gerarEmail(name, age, products, productsValues)

function gerarEmail (name, age, products, productsValues){
    console.log(`O comprador é ${name}`);
    console.log(`A idade é ${age}`);
    console.log(`---------------`);
    console.log(`O produto é ${products[0]}`);
    console.log(`O valor é ${productsValues[0]}`)

}
*/

let invoice = {
    nome: "Charles",
    idade: 23,
    products: {
        0: ["Mouse Gamer", 50.25, 5],
        1: ["Teclado mecânico", 68.89, 10],
        2: ["Monitor Acer", 845.75, 3]
    }
}

gerarEmail (invoice);

function gerarEmail (invoice){
    console.log(`O comprador é ${invoice.nome}`);
    console.log(`A idade é ${invoice.idade}`);
    console.log(`---------------`);
    console.log(`Os produtos são:`);

    for (let index in invoice.products){
        let [productNome, productPreco, quantProdutos] = invoice.products[index]
        console.log(`- ${productNome}: ${quantProdutos} produtos, por ${productPreco}`)
    }
    

}