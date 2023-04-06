const form = document.getElementById('form-list');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionalinha();
    adcionaTabela();
});

    function adcionalinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (numeros.includes(inputNumero.value)) {
        alert(`O numero ja foi inserido!`)
    } else {
    nomes.push(inputNome.value);
    numeros.push(inputNumero.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

    function adcionaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    }

