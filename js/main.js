/*Entrando os dados do estado*/

var estados;
var estado = document.querySelector('#estado');

fetch('https://api-teste-front-end-fc.herokuapp.com/estados')
.then((response) => response.json())
.then((estados) => {
    for(let i=0;i<estados.length; i++){
        //console.log(estados[i].id) apresneta o id
        //console.log(estados[i].nome) apresenta o nome 
        //console.log(estados[i].sigla) apresenta a sigla
        estado.options[estado.options.length] = new Option(estados[i].nome, estados[i].id);
    } 
})

/*Entrando os dados da cidade*/

var cidades;
var cidade = document.querySelector('#cidade');

fetch('https://api-teste-front-end-fc.herokuapp.com/cidades')
.then((response) => response.json())
.then((cidades) => {
    for(let i=0;i<cidades.length; i++){
        //console.log(cidades[i].id) apresneta o id
        //console.log(cidades[i].nome) apresenta o nome 
        //console.log(cidades[i].estadoId) apresenta a sigla
        cidade.options[cidade.options.length] = new Option(cidades[i].nome, cidades[i].id);
    }
})

/*Entrando os dados dos especialistas*/

var especialidades;
var especialidade = document.querySelector('#especialidade');

fetch('https://api-teste-front-end-fc.herokuapp.com/especialidades')
.then((response) => response.json())
.then((especialidades) => {
    for(let i=0;i<especialidades.length; i++){
        //console.log(especialidades[i].id);
        //console.log(especialidades[i].nome);
        especialidade.options[especialidade.options.length] = new Option(especialidades[i].nome, especialidades[i].id);
    }
})

/*Entrando com dados da API dos funcionarios cadastrados*/
var perfils;
//var especialidade = document.querySelector('#especialidade');

fetch('https://api-teste-front-end-fc.herokuapp.com/profissionais')
.then((response) => response.json())
.then((perfils) => {
    for(let i=0;i<perfils.length; i++){
        console.log(perfils[i].id);
        console.log(perfils[i].nome);
        console.log(perfils[i].cpf);
        console.log(perfils[i].cidadeId);
        console.log(perfils[i].especialidadeId);
        //especialidade.options[especialidade.options.length] = new Option(especialidades[i].nome, especialidades[i].id);
    }
})

/*Armazena dados lado cliente */                                                                                                                          
var ESTADO = document.getElementById("estado");


window.localStorage.setItem('nome', document.getElementById('name').value);
window.localStorage.setItem('numero', document.querySelector('#numberCel'));
window.localStorage.setItem('CPF', document.querySelector('#CPF'));
window.localStorage.setItem('estado', ESTADO);

document.cookie=`username = ${name1.value}`;


