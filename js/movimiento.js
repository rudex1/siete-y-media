//Capturamos en variables el tamaño de la división objeto y la división cuerpo, y situamos el objeto en el centro de la div cuerpo:

var ancho_cuerpo;
var alto_cuerpo;
var ancho_objeto;
var alto_objeto;

function inicializar(){
	ancho_cuerpo=parseInt(document.getElementById("cuerpo").style.width);
	alto_cuerpo=parseInt(document.getElementById("cuerpo").style.height);
	ancho_objeto=parseInt(document.getElementById("objeto").style.width);
	alto_objeto=parseInt(document.getElementById("objeto").style.height);
	
	document.getElementById("objeto").style.left=(ancho_cuerpo-ancho_objeto)/2+"px";
	document.getElementById("objeto").style.top=(alto_cuerpo-alto_objeto)/2+"px";
	activar_movimiento();
}

//Ahora creamos la función que moverá el objeto aleatoriamente:

function mover(direccion){
	var x=parseInt(document.getElementById("objeto").style.left);
	var y=parseInt(document.getElementById("objeto").style.top);
		switch(direccion){
			case 0:
			if(x<ancho_cuerpo-ancho_objeto)x+=10;
			break;

			case 1:
			if(x>0)x-=10;
			break;

			case 2:
			if(y<alto_cuerpo-alto_objeto)y+=10;
			break;

			case 3:
			if(y>0)y-=10;
			break;
}

document.getElementById("objeto").style.left=x+"px";
document.getElementById("objeto").style.top=y+"px";
}
function activar_movimiento(){ var x=parseInt(Math.random()*4);
if(x==4)
x=3;
mover(x);
setTimeout("activar_movimiento()",100);
}