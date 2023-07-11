const paragrafos = document.querySelector('.paragrafo');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundColor = estilosBody.backgroundColor;
console.log(backGroundColor);



for (let p of ps){

p.style.backgroundColor = backGroundColor;
p.style.color = '#FFFFFF';


}