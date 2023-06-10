const form = document.getElementById('form');
const imgAprovado = '<img src="./images/aprovado.png" />'
const imgReprovado = '<img src="./images/reprovado.png" />'
let linhas = '';
const atividades = [], notas = [];
const spamAprovado = '<spam class="resultado aprovado">Aprovado</spam>';
const spamReprovado = '<spam class="resultado reprovado">Reprovado</spam>';
const notaMinima = parseFloat(prompt("digite a nota mínima:"));

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-Atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade ${inputNomeAtividade.value} ja foi inserida.`);
    }else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}<td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
};
function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}
function atualizaMedia(){
    const mediafinal = calculamedia();

    document.getElementById('mediafinalValor').innerHTML = mediafinal;
    document.getElementById('mediaResultado').innerHTML = mediafinal >= notaMinima ? spamAprovado : spamReprovado;
}
function calculamedia(){
    let somaDasnotas = 0;
    for(let i = 0; i < notas.length; i++){
        somaDasnotas += notas[i];
    }
    return somaDasnotas / notas.length;
};