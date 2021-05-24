let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercício 1
console.log(`Bem vinda, ${info.personagem}!`);

//Exercício 2
info['recorrente'] = 'Sim';

for (let key in info) {
  console.log(`${key} : ${info[key]}`);
}

//Exercício 3
for (let key in info) {
  console.log(key);
}

//Exercício 4
for (let key in info) {
  console.log(info[key]);
}

//Exercício 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Montain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let key in info) {
  if (info[key] === info.recorrente && info[key] === 'Sim' && info[key] === info2[key]) {
    console.log('Ambos recorrentes');
  } else {
  console.log (`${info[key]} e ${info2[key]}`);
  }
}