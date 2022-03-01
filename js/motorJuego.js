
var generados = []; //Este es un array que permite controlar qué animales ya han sido generados
var repetidos = []; //Este es un array que nos ayuda a barajear opciones para que salgan en diferentes posiciones
var posiciones = [];
var nivel = 1;
var nombreArrastrado="";
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
    generarAleatorios();
    iniciar();
}
function iniciar(){
    
    var j=1;
    for(var i=(nivel*3 - 3);i<(3*nivel);i++){
        console.log("Valor de I = "+i);
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
    azar();
    img.src = "../recursos/habitat/"+repetidos[0]+".jpg";
    img.onload = function(){
        lienzo.drawImage(img, 0,0,455,700);
    }
    
    img2.src = "../recursos/habitat/"+repetidos[1]+".jpg";
    img2.onload = function(){
        lienzo.drawImage(img2, 455, 0,455,700);
    }

   
    img3.src = "../recursos/habitat/"+repetidos[2]+".jpg";
    img3.onload = function(){
        lienzo.drawImage(img3, 910, 0,455,700);
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
   
    //console.log("El valor es: "+nombreArrastrado);
    //console.log("E target "+elemento.id);
    e.dataTransfer.setDragImage(e.target,0,0);
}

function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    /* console.log("EL ATRIBUTO ES: "+id); */

    var elemento = document.getElementById(id);
    img = elemento.src;
    img = img.substring(img.length-5,img.length-4); //Se obtiene el nombre de la imagen que se está arrastrando (el cual es un número sin la extensión png)


    /* console.log("El valor es: "+img); */
    var posx = e.pageX - soltar.offsetLeft;
    var posy = e.pageY - soltar.offsetTop;
    /* console.log("Repetidos = "+repetidos);
    console.log("X = "+posx);
    console.log("Y = "+posy); 
    console.log("Aparición: "+repetidos.indexOf(parseInt(img)));*/
    //Se verifican las posiciones y el arrastre
    if(repetidos.indexOf(parseInt(img)) == 0 && posx>=0 && posx<=455 && posy>=0 && posy<=700 ){
        lienzo.drawImage(elemento,posx,posy);
    }
    else if(repetidos.indexOf(parseInt(img)) == 1 && posx>=456 && posx<=910 && posy>=0 && posy<=700 ){
        lienzo.drawImage(elemento,posx,posy);
    }
    else if(repetidos.indexOf(parseInt(img)) == 2 && posx>=911 && posx<=1365 && posy>=0 && posy<=700 ){
        lienzo.drawImage(elemento,posx,posy);
    }
    else{
        console.log("NO ATINADO");
    }
   
    
}

function generarAleatorios(){
    for(var i=0;i<6;i++){
        do{
            //Hasta que encuentra a un valor que NO esté en el array de generados, no avanza y sigue probando
            random = Math.floor(Math.random() * 9) + 1;
        }while(generados.find(element => element == random) == random);
        //Se mete el random al arreglo de generados
        generados.push(random);
        /* console.log("El random es: "+random); */
    }
}

function azar(){
    var j = nivel*3-3;
    for(var i=0;i<3;i++){
        repetidos.push(generados[j++]);
    }
    /* console.log("Generados: "+generados);
    console.log("Repetidos: "+repetidos); */
    shuffle(repetidos);   
}

window.addEventListener('load',inicializar,false);

function cambiar(){
    //generados = [];
    if(nivel==1)
        nivel=2;
    else
        nivel=1;
    document.getElementById("titulo").innerHTML="Nivel de juego #"+nivel;
    repetidos = [];
    iniciar();
}

function shuffle(array) {
    //Esta función barajea el array
    array.sort(() => Math.random() - 0.5);
  }