function fondo(){
    var fondo = document.getElementById("fondo");
    var f = fondo.getContext("2d");
    var img = new Image();
    img.src = "/recursos/habitat/marcoIndex.png";
    img.onload = function(){
        f.drawImage(img, 0,0,fondo.width,fondo.height);
    }
    var logo = new Image();
    logo.src = "/recursos/habitat/logo.png";
    logo.onload = function(){
        f.drawImage(logo,fondo.width/2,1);
    }
}