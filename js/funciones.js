function fondo(){
    var fondo = document.getElementById("fondo");
    var f = fondo.getContext("2d");
    var img = new Image();
    img.src = "/recursos/habitat/marcoIndex.png";
    f.canvas.width  = window.innerWidth;
    f.canvas.height = window.innerHeight;
    img.onload = function(){
        f.drawImage(img, 0,0,fondo.width,fondo.height);
    }
    var logo = document.getElementById("fondo");
    var s = logo.getContext("2d");
    var ancho  = window.innerWidth/4+75;
    var alto = window.innerHeight/100-130;
    var logo = new Image();
    logo.src = "/recursos/habitat/logo.png";
    logo.onload = function(){
        s.drawImage(logo,ancho,alto,logo.width*1.5,logo.height*1.5);
    }
}