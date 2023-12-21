const receber = require('prompt-sync')({sigint: true});
var i = 0;

var nome = receber("Digite o seu nome: ");


do{
    var nascimento = parseInt(receber("Digite o ano em que nasceu: "));

    if(nascimento > 1922 && nascimento < 2021){
        ano = nascimento;
        ano = 2022 - ano;
        i = 1;
    }else{
        console.log("Por favor, digite um número entre 1922 e 2021.");
    }

}while(i < 1);

console.log(`Seu nome é: ${nome}.`);
console.log(`Você tem ${ano} anos de idade.`);
