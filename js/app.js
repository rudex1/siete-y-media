/*window.onload = function(){*/


function inicio() {

}
/* Array de cartas */

var sieteYmedio = new Array();
/* Bastos */

sieteYmedio[0]="img/cartas/1_Bastos.PNG";

sieteYmedio[1]="img/cartas/2_Bastos.PNG";

sieteYmedio[2]="img/cartas/3_Bastos.PNG";
sieteYmedio[3] = new image();
sieteYmedio[3].src='img/cartas/4_Bastos.PNG';
sieteYmedio[4] = new image();
sieteYmedio[4].src='img/cartas/5_Bastos.PNG';
sieteYmedio[5] = new image();
sieteYmedio[5].src='img/cartas/6_Bastos.PNG';
sieteYmedio[6] = new image();
sieteYmedio[6].src='img/cartas/7_Bastos.PNG';
sieteYmedio[7] = new image();
sieteYmedio[7].src='img/cartas/8_Bastos.PNG';
sieteYmedio[8] = new image();
sieteYmedio[8].src='img/cartas/9_Bastos.PNG';
sieteYmedio[9] = new image();
sieteYmedio[9].src='img/cartas/10_Bastos.PNG';
sieteYmedio[10] = new image();
sieteYmedio[10].src='img/cartas/11_Bastos.PNG';
sieteYmedio[11] = new image();
sieteYmedio[11].src='img/cartas/12_Bastos.PNG';
 
/* Copas */

sieteYmedio[12] = new image();
sieteYmedio[12].src='img/cartas/1_Copas.PNG';
sieteYmedio[13] = new image();
sieteYmedio[13].src='img/cartas/2_Copas.PNG';
sieteYmedio[14] = new image();
sieteYmedio[14].src='img/cartas/3_Copas.PNG';
sieteYmedio[15] = new image();
sieteYmedio[15].src='img/cartas/4_Copas.PNG';
sieteYmedio[16] = new image();
sieteYmedio[16].src='img/cartas/5_Copas.PNG';
sieteYmedio[17] = new image();
sieteYmedio[17].src='img/cartas/6_Copas.PNG';
sieteYmedio[18] = new image();
sieteYmedio[18].src='img/cartas/7_Copas.PNG';
sieteYmedio[19] = new image();
sieteYmedio[19].src='img/cartas/8_Copas.PNG';
sieteYmedio[20] = new image();
sieteYmedio[20].src='img/cartas/9_Copas.PNG';
sieteYmedio[21] = new image();
sieteYmedio[21].src='img/cartas/10_Copas.PNG';
sieteYmedio[22] = new image();
sieteYmedio[22].src='img/cartas/11_Copas.PNG';
sieteYmedio[23] = new image();
sieteYmedio[23].src='img/cartas/12_Copas.PNG';

 
/* Oros */

sieteYmedio[24] = new image();
sieteYmedio[24].src='img/cartas/1_Oros.PNG';
sieteYmedio[25] = new image();
sieteYmedio[25].src='img/cartas/2_Oros.PNG';
sieteYmedio[26] = new image();
sieteYmedio[26].src='img/cartas/3_Oros.PNG';
sieteYmedio[27] = new image();
sieteYmedio[27].src='img/cartas/4_Oros.PNG';
sieteYmedio[28] = new image();
sieteYmedio[28].src='img/cartas/5_Oros.PNG';
sieteYmedio[29] = new image();
sieteYmedio[29].src='img/cartas/6_Oros.PNG';
sieteYmedio[30] = new image();
sieteYmedio[30].src='img/cartas/7_Oros.PNG';
sieteYmedio[31] = new image();
sieteYmedio[31].src='img/cartas/8_Oros.PNG';
sieteYmedio[32] = new image();
sieteYmedio[32].src='img/cartas/9_Oros.PNG';
sieteYmedio[33] = new image();
sieteYmedio[33].src='img/cartas/10_Oros.PNG';
sieteYmedio[34] = new image();
sieteYmedio[34].src='img/cartas/11_Oros.PNG';
sieteYmedio[35] = new image();
sieteYmedio[35].src='img/cartas/12_Oros.PNG';


/* Espadas */ 

sieteYmedio[36] = image();
sieteYmedio[36].src='img/cartas/1_Espadas.PNG';
sieteYmedio[37] = image();
sieteYmedio[37].src='img/cartas/2_Espadas.PNG';
sieteYmedio[38] = image();
sieteYmedio[38].src='img/cartas/3_Espadas.PNG';
sieteYmedio[39] = image();
sieteYmedio[39].src='img/cartas/4_Espadas.PNG';
sieteYmedio[40] = image();
sieteYmedio[40].src='img/cartas/5_Espadas.PNG';
sieteYmedio[41] = image();
sieteYmedio[41].src='img/cartas/6_Espadas.PNG';
sieteYmedio[42] = image();
sieteYmedio[42].src='img/cartas/7_Espadas.PNG';
sieteYmedio[43] = image();
sieteYmedio[43].src='img/cartas/8_Espadas.PNG';
sieteYmedio[44] = image();
sieteYmedio[44].src='img/cartas/9_Espadas.PNG';
sieteYmedio[45] = image();
sieteYmedio[45].src='img/cartas/10_Espadas.PNG';
sieteYmedio[46] = image();
sieteYmedio[46].src='img/cartas/12_Espadas.PNG';
function cargarImagen(){ 

document.write('<img src="'+sieteYmedio[2]+'">');
}
var imagenes = new Array ("img/cartas/1_Bastos.PNG", "img/cartas/2_Bastos.PNG", "img/cartas/3_Bastos.PNG", "img/cartas/4_Bastos.PNG");
// el arreglo imagenes contiene la secuencia de imágenes
largo = imagenes.length;
// en la variable largo se guarda la cantidad de elementos del arreglo imagenes,
// esta variable servirá para que al llegar al final del arreglo vuelva a la primera foto.
i=0; // esta variable de control permite recorrer el arreglo y parte en 0 que es
// que corresponde al primer elemento del arreglo

// Función Siguiente
function Siguiente()
{
      i++; // se incrementa i
      if(i==largo) i=0;
      //si se llega al final del arreglo se retorna al primero
      foto.src = imagenes[i]; // se cambia la imagen
}

// Función Anterior
function Anterior()
{
      i--; // se decrementa i
      if(i<0) i=largo-1;
      // si sse llega aun valor menor del primer elemento pasamos la último
      foto.src = imagenes[i]; // se cambia la imagen
}

/*function cargarImagen(){     
    var imagen = document.getElementById("imagen");  

    for (sieteYmedio=0; sieteYmedio<47; sieteYmedio++) {
        imagen[sieteYmedio] = (sieteYmedio+ 1) + '.PNG';
        imagen = parseInt(Math.random()*47)+1;
    }
     
    for (i=0; i<imagen.size(); i++) {
        document.write('<img src="'+sieteYmedio[i]+'">');
        document.write("<br>");
    }   
   
} 
/** cambio de imagen **/   
   
var imagen = document.getElementById("galeria");
    imagen.addEventListener('mouseover',cambiarImagen);
    imagen.addEventListener('mouseout',imagenIniciar);
   
    function cambiarImagen(){
        this.setAttribute('src','img/sieteYmedio');   
    }
   
    function imagenIniciar(){
        this.setAttribute('src',"img/cartas/card_back.png");
    }


/** cambio de imagen **/
/*
function cambiar(MyImage) {
    var IMG = MyImage.src = imagen;
    console.log(IMG);
}
function volver(MyImage) {    
     var volev =MyImage.src = "img/cartas/cartaoculta.jpg";
     console.log(volver);
}//cambio de imagen */


/* Borra todas las cartas */
function rese() { 

     form.imagen0c.src="blanco.gif";
     form.imagen1c.src="blanco.gif";
     form.imagen0j.src="blanco.gif";
     form.imagen1j.src="blanco.gif";
     form.imagen2j.src="blanco.gif";
     form.imagen3j.src="blanco.gif";
     form.imagen4j.src="blanco.gif";
     form.imagen5j.src="blanco.gif";
     form.imagen6j.src="blanco.gif";
     form.imagen7j.src="blanco.gif";
     form.imagen8j.src="blanco.gif";
     form.imagen9j.src="blanco.gif";
      
}
/* incremento de creditos */
var creditos = document.juego.creditos.value = 10;
var contador = 0;

function incrementar() {
    if(contador==100)
    alert('Maximo permitido alcanzado: 100');
    else {
    document.juego.creditos.value= contador++;
    }
}
function decrementar() {
    if(contador==10){
    alert('Minimo permitido alcanzado: 10');    
    }
    
    else {
    document.juego.creditos.value= contador--;
    }
}
/* ayuda */
function apareceayuda(){
	ayuda.style.visibility="visible";
    return true;
}

function desapareceayuda(){
	ayuda.style.visibility="hidden";
	return true;
}

/* redireccion de paginas */
function redireccionarinicio(){
	location.href = "index.html";
}
function redireccionar() {
location.href = "reglas.html";
}

function redireccionarRegistro(){
    location.href = "registrar.html"
}

//setTimeout ("redireccionar()", 20000);


/*} cierre de carga de pagina */