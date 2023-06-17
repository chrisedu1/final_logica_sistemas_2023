function multiplicacion(){
    var primer_numero = document.getElementById( 'primer_numero').value;
    var segundo_numero = document.getElementById( 'segundo_numero').value;
    var tercer_numero = document.getElementById( 'tercer_numero').value;
    

    var resultado = parseInt(primer_numero) * parseInt(segundo_numero) * parseInt(tercer_numero);
    document.getElementById('resultado').value = resultado;
}



function suma(){
    var primer_numero = document.getElementById( 'primer_numero').value;
    var segundo_numero = document.getElementById( 'segundo_numero').value;
    var tercer_numero = document.getElementById( 'tercer_numero').value;

    var resultado = parseInt(primer_numero) + parseInt(segundo_numero) + parseInt(tercer_numero);
    document.getElementById('resultado').value = resultado;
}


if (primer_numero > tercer_numero) {
    primer_numero * segundo_numero * tercer_numero
}else{
    primer_numero + segundo_numero + tercer_numero 
}