function fondo(){
    var fondo = document.getElementById("fondo");
    var f = fondo.getContext("2d");
    var img = new Image();
    img.src = "/recursos/habitat/marcoIndex.png";
    img.onload = function(){
        f.drawImage(img, 420,0);
    }
}