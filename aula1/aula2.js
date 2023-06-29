const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu número é ${numero}</p>`;
texto.innerHTML += `<p>Raiz quadrada é ${numero ** 0,5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>é NaN ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Numero arredondado para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Numero arredondado para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Numero com duas casas decimais ${numero.toFixed(2)}</p>`;