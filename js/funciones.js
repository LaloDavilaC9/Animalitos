function fondo(){
    var fondo = document.getElementById("fondo");
    var f = fondo.getContext("2d");
    var img = new Image();
    img.src = "/recursos/habitat/fondo.png";
    f.canvas.width  = window.innerWidth;
    f.canvas.height = window.innerHeight;
    img.onload = function(){
        f.drawImage(img, 0,0,fondo.width,fondo.height);
    }
}
/*function validarForm(form) {
    var correcto=true;
    var formulario=document.formNombre;
    var aux=0;
    var er_tel = /^\d{10}$/
    for (var i=0; i<formulario.length; i++) {
        if(formulario.type =='text') {
            if (formulario[i].value == null || formulario[i].value.length == 0 || /^[A-Z]+$/i.test(formulario.value)){
                document.getElementById('nombreCompleto').focus();
                alert ('Por favor complete todos los campos del formulario');
                correcto=false;
                break;
            }
        }
    }
    if (correcto ==true) {
        formulario.submit();
    }
}*/
function guardarNombre() {
    localStorage.nombre = document.getElementById("nombreCompleto").value;
    alert("Iniciando juego");
    document.getElementById("nombreCompleto").value="";
    window.open('nivel.html','_self');
}