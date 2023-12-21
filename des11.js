function calculadora(a,b,c){
    var calculo = 0;
    switch (c){
        case 1:
            calculo = a + b;
            console.log(calculo);
            break;
        case 2:
            calculo = a - b;
            console.log(calculo);
            break;
        case 3:
            calculo = a * b;
            console.log(calculo);
            break;
        case 4:
            calculo = a / b;
            console.log(calculo);
            break;
        default:
            console.log(calculo);
            break;
    }   
}

calculadora(5,3,5);