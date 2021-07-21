function createStateSelected() {
  const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  let getSelected = document.querySelector('#estados');

  for (let index = 0; index < estados.length; index += 1) {
    let stateSelected = document.createElement('option');
    getSelected.appendChild(stateSelected).innerText = estados[index];
    getSelected.appendChild(stateSelected).value = estados[index];
  };
}

createStateSelected();
