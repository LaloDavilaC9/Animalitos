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
    localStorage.nombre = document.getElementById("validationCustom01").value;
    alert("Iniciando juego");
    document.getElementById("validationCustom01").value="";
    window.open('nivel.html','_self');
}

function fondoFinal(){
    var fondo = document.getElementById("fondoFinal");
    var f = fondo.getContext("2d");
    var img = new Image();
    img.src = "/recursos/habitat/fondopt2.jpg";
    f.canvas.width  = window.innerWidth;
    f.canvas.height = window.innerHeight;
    img.onload = function(){
        f.drawImage(img,0,0,fondo.width,fondo.height);
    }
    document.getElementById("nombre").innerHTML = localStorage.getItem("nombre");
}

function creditos(){
    var credit;
    var dia = new Date();
    var anio, mes, day;
    anio = dia.getFullYear();
    mes = dia.getMonth() + 1;
    day = dia.getDate();

    credit = "NOMBRE DE LOS INTEGRANTES:\n";
    credit += "Beltran Arroyo Luis\n";
    credit += "Davila Campos Eduardo\n";
    credit += "Delgado Luna Victor Emilio\n";
    credit += "Valdez Rodriguez Luis Adrian\n\n";
    credit += "UNIVERSIDAD: Universidad Autonoma de Aguascalientes\n";
    credit += "CARRERA: Ing. Sistemas Computacionales\n";
    credit += "MATERIA: Tecnologias Web\n";
    credit += "PROFESORA: Salazar Partida Georgina\n";
    credit += "SEMESTRE: 6°\n";
    credit += "GRUPO: A\n";
    credit += "DIA ACTUAL: " + day + "/" + mes + "/" + anio;

    alert(credit);
}

function jugarDeNuevo(){
    window.location.href="../index.html";
}