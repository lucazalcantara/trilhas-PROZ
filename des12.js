const receber = require('prompt-sync')({sigint: true});
var i = 0;

do{

    function displayInicial(){
        console.log("1.Soma");
        console.log("2.Subtração");
        console.log("3.Multiplicação");
        console.log("4.Divisão");
        console.log("0.Sair");

        var operacao = parseInt(receber("Digite o número da operação desejada: "));
        var a = parseInt(receber("Digite o primeiro número: "));
        var b = parseInt(receber("Digite o segundo número: "));
        var calculo = 0;

        switch (operacao){
            case 1:
                calculo = a + b;
                console.log(`Você escolheu a operação de soma. O resultado foi: ${calculo.toFixed(2)}`);
                break;
            case 2:
                calculo = a - b;
                console.log(`Você escolheu a operação de subtração. O resultado foi: ${calculo.toFixed(2)}`);
                break;
            case 3:
                calculo = a * b;
                console.log(`Você escolheu a operação de multiplicação. O resultado foi: ${calculo.toFixed(2)}`);
                break;
            case 4:
                calculo = a / b;
                console.log(`Você escolheu a operação de divisão. O resultado foi: ${calculo.toFixed(2)}`);
                break;
            case 0:
                calculo = -1;
                console.log("Você saiu do sistema.");
                break;          
            default:
                console.log("Essa opção não existe.");
                break;
        }    

        function verificaSaida(){
            if(calculo < 0){
                i = 1;
            }
        }
    
        verificaSaida();
        
    }

    displayInicial();
 
}while(i < 1);
