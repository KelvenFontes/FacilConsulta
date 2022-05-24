var estados;
var cidades;
var estado = document.querySelector('#estado');
var cidade = document.querySelector('#cidade');

/*Entrando os dados do estado*/
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

/*Entrando os dados do estado*/
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