
var generados = [] //Este es un array que permite controlar qué animales ya han sido generados
var nivel = 1
var nombreArrastrado=""
function inicializar(){
    var imagenes = document.querySelectorAll('#animales > img');
    for (var i=0;i<imagenes.length;i++){
        imagenes[i].addEventListener('dragstart',arrastrado,false);
        imagenes[i].addEventListener('dragend',arrastrado,false);
    }
    soltar = document.getElementById('lienzo');
    lienzo = soltar.getContext('2d');
    soltar.addEventListener('dragenter',eventoEnter,false);
    soltar.addEventListener('dragover',eventoOver,false);
    soltar.addEventListener('drop',soltado,false);
    iniciar();
}
function iniciar(){
    generarAleatorios();
    var j=1;
    for(var i=nivel-1;i<(3*nivel);i+=nivel){
        var imagen = new Image();
        imagen.src = '../recursos/animales/'+generados[i]+'.png';
        document.getElementById('imagen'+j).src = imagen.src;
        /* var img = new Image();
        img.src = "../recursos/habitat/"+generados[i]+".jpg";
        console.log("Sucede que: "+img.src);
        img.onload = function(){
            lienzo.drawImage(img, 500*i,0,455,700);
        } */
        j++;
    }
    
   
    var img = new Image();
    var img2 = new Image();
    var img3 = new Image();
    i = nivel-1;
    img.src = "../recursos/habitat/"+generados[i]+".jpg";
    img.onload = function(){
        lienzo.drawImage(img, -89,0,455,700);
    }
    i +=nivel;
    img2.src = "../recursos/habitat/"+generados[i]+".jpg";
    img2.onload = function(){
        lienzo.drawImage(img2, 400, 0,455,700);
    }
    i +=nivel;
    img3.src = "../recursos/habitat/"+generados[i]+".jpg";
    img3.onload = function(){
        lienzo.drawImage(img3, 900, 0,455,700);
    }
    
    
}

function eventoEnter(e){
    console.log("Soy el evento dragenter");
    e.preventDefault();

}

function eventoOver(e){
    console.log("soy el evento dragover");
    e.preventDefault();

}

function finalizado(e){
    elemento = e.target;
    console.log("soy el evento FINALIZADO");
    //elemento.style.visibility = 'hidden';
}

function arrastrado(e){
    elemento = e.target;
    e.dataTransfer.setData('Text',elemento.getAttribute('id'));
    nombreArrastrado = elemento.id;
    nombreArrastrado = nombreArrastrado[6];
    console.log("El valor es: "+nombreArrastrado);
    console.log("E target "+elemento.id);
    e.dataTransfer.setDragImage(e.target,0,0);
}

function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    var elemento = document.getElementById(id);
    var posx = e.pageX - soltar.offsetLeft;
    var posy = e.pageY - soltar.offsetTop;
    lienzo.drawImage(elemento,posx,posy);
}

function generarAleatorios(){
    for(var i=0;i<6;i++){
        do{
            //Hasta que encuentra a un valor que NO esté en el array de generados, no avanza y sigue probando
            random = Math.floor(Math.random() * 9) + 1;
        }while(generados.find(element => element == random) == random);
        //Se mete el random al arreglo de generados
        generados.push(random);
        //console.log("El random es: "+random);
    }
}


window.addEventListener('load',inicializar,false);

function cambiar(){
    generados = [];
    if(nivel==1)
        nivel=2;
    else
        nivel=1;
    iniciar();
}