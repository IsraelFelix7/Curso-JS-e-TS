function saudacao(nome){
    return `bom dia ${nome}`;
}

saudacao('benny');
saudacao('Joelma');

const variavel = saudacao('benny');
console.log(variavel);


// segunda parte da aula


function soma(x, y){
    const resultado = x + y;
    return resultado;
}


let resultado = soma(100, 50);
console.log(resultado);