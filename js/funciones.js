function fondo(){
    var fondo = document.getElementById("fondo");
    var f = fondo.getContext("2d");
    var img = new Image();
    img.src = "/recursos/habitat/marcoIndex.png";
    img.onload = function(){
        f.drawImage(img, 0,0,1920,1050);
    }
    var c = document.getElementById("fondo");
    var ctx = c.getContext("2d");
    ctx.font = "75px Courier New";
    ctx.textAlign = "center";
    ctx.fillText("Animal Chooser", c.width/2, c.height/7);
}