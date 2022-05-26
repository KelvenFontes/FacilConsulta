/*Verifica se todos os campos estão preenchidos da página01*/
function verificar(){

    const campName = document.getElementById('name');
    const campCPF = document.getElementById('CPF');
    const campNumeroCelular = document.getElementById('numberCel');
    const campEstado = document.getElementById('estado');
    const campCidade = document.getElementById('cidade');
    const btn_sub = document.getElementById('proximaPagina');

    btn_sub.addEventListener('click', function() {
    if(campName.value && campCPF.value && campNumeroCelular.value && campEstado.value && campCidade.value) {
        window.location.href = "../html/pagina-2.html";
        return;
    }
    alert('Todos os campos devem ser preenchidos')
    });
}