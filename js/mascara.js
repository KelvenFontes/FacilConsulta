function mascara_cpf(){
    var cpf = document.getElementById('CPF')
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += ".";
    } else if(cpf.value.length == 11) {
        cpf.value += "."
    }
}

/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('numberCel').onkeyup = function(){
		mascara( this, mtel );
	}
}