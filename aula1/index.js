let alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos[0]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
alunos[3] = 'Benny';

alunos[alunos.length] = 'Israel'; // ultima posição do arrays
alunos[alunos.length] = 'Joelma'; 

alunos.push('Pedro'); // adiciona a string no final do array

alunos.unshift('Silva'); // coloca o essa string na primeira posição do array

alunos.pop();


console.log(alunos.slice(0, -1));

console.log(alunos.length);

console.log(alunos instanceof Array); //  para saber se é do tipo array