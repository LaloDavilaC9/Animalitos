function fondo() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "recursos/habitat/marcoIndex.png";
    img.onload = function(){
        ctx.drawImage(img,200,200,600,20);
    }
}