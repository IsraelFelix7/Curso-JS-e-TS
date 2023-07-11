function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

   function recebeEventoForm(evento){
    evento.preventDefault();

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

        pessoas.push({
            peso: peso.value,
            altura: altura.value
        });

    const imc = Number(peso.value / altura.value ** 2);

    if(imc < 18.5){
        resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} você está abaixo do peso <p>`; 
    }
    else if(imc > 18.5 && imc < 24.9 ){
        resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} seu peso está normal <p>`; 
    }
    else if(imc > 25 && imc < 29.9 ){
        resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} você está com sobre peso <p>`; 
    }
    else if(imc > 30 && imc < 34.9 ){
        resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} você está Obesidade grau 1 <p>`; 
    }
    else if(imc > 35 && imc < 39.9 ){
        resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} você está Obesidade grau 2 <p>`; 
    }
    else if(imc > 40 ){
        resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} você está Obesidade grau 3 <p>`; 
    }
    
    

    

    console.log(pessoas)
   }

   form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();