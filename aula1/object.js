const pessoa1 = {
    name: 'Benny',
    sobrenome: 'Felix',
    idade: 23

}

const pessoa2 = {
    name: 'Joelma',
    sobrenome: 'Santana',
    idade: 22

}

console.log(pessoa1.idade);
console.log(pessoa2.idade);

function people(name, lastName, years){
    return {
        name,
        lastName,
        years
    };
}

const p1 = people('Benny', 'Felix', 23);

console.log(p1);