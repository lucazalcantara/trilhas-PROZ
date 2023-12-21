const receber = require('prompt-sync')({sigint: true});

var qRodas = receber("Digite a quantidade de rodas do veículo: ");
var pesoB = receber("Digite o peso bruto do veículo: ");
var qPassageiros = receber("Digite o número de passageiros: ");

function catHabilitacao(){
    if(qRodas <= 3 && pesoB <= 1000 && qPassageiros <= 2){
        console.log("Para o veículo informado, habilitação indicada seria a categoria A.");
    }else if(qRodas > 3 && pesoB <= 3500 && qPassageiros <= 8){
        console.log("Para o veículo informado, habilitação indicada seria a categoria B.");
    }else if(qRodas > 3 && pesoB <= 6000 && qPassageiros <= 8){
        console.log("Para o veículo informado, habilitação indicada seria a categoria C.");
    }else if(qRodas > 3 && pesoB <= 6000 && qPassageiros > 8){
        console.log("Para o veículo informado, habilitação indicada seria a categoria D.");
    }else if(qRodas > 3 && pesoB > 6000 && qPassageiros > 8){
        console.log("Para o veículo informado, habilitação indicada seria a categoria E.");
    };
};

catHabilitacao();