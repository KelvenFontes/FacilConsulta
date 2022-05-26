/*Mascara do CPF*/
function mascara_cpf(){
    var cpf = document.getElementById('CPF')
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += ".";
    } else if(cpf.value.length == 11) {
        cpf.value += "."
    }
}

/* Máscara do número de celular */
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


/*Mascara de moeda */
function formatarMoeda() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;
    
    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g,''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");
  
    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
  
    elemento.value = valor;
  }