const num1 = 55;
const num2 = 50;

let  teste  = num1 + num2;

if((num1 == num2) !== true){
    console.log(num1+num2);
    console.log('os dois números foram chamados')
}
else{
    console.log('os números não foram somados')
}

//              condição        se for verdade   / falso
const soma = teste >= 100 ? 'maior que 100' : 'menos que 100'; // isso se chama condição ternária
// .........................................................

console.log(soma);