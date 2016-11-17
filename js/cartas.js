var setimedio=new Array(47)
/* Bastos */
setimedio[0]=new image();
setimedio[0].src='/img/cartas/1_Bastos.PNG';
setimedio[1]=new image();
setimedio[1].src='/img/cartas/2_Bastos.PNG';
setimedio[2]=new image();
setimedio[2].src='/img/cartas/3_Bastos.PNG';
setimedio[3]=new image();
setimedio[3].src='/img/cartas/4_Bastos.PNG';
setimedio[4]=new image();
setimedio[4].src='/img/cartas/5_Bastos.PNG';
setimedio[5]=new image();
setimedio[5].src='/img/cartas/6_Bastos.PNG';
setimedio[6]=new image();
setimedio[6].src='/img/cartas/7_Bastos.PNG';
setimedio[7]=new image();
setimedio[7].src='/img/cartas/8_Bastos.PNG';
setimedio[8]=new image();
setimedio[8].src='/img/cartas/9_Bastos.PNG';
setimedio[9]=new image();
setimedio[9].src='/img/cartas/10_Bastos.PNG';
setimedio[10]=new image();
setimedio[10].src='/img/cartas/11_Bastos.PNG';
setimedio[11]=new image();
setimedio[11].src='/img/cartas/12_Bastos.PNG';
 
/* Copas */
setimedio[12]=new image();
setimedio[12].src='/img/cartas/1_Copas.PNG';
setimedio[13]=new image();
setimedio[13].src='/img/cartas/2_Copas.PNG';
setimedio[14]=new image();
setimedio[14].src='/img/cartas/3_Copas.PNG';
setimedio[15]=new image();
setimedio[15].src='/img/cartas/4_Copas.PNG';
setimedio[16]=new image();
setimedio[16].src='/img/cartas/5_Copas.PNG';
setimedio[17]=new image();
setimedio[17].src='/img/cartas/6_Copas.PNG';
setimedio[18]=new image();
setimedio[18].src='/img/cartas/7_Copas.PNG';
setimedio[19]=new image();
setimedio[19].src='/img/cartas/8_Copas.PNG';
setimedio[20]=new image();
setimedio[20].src='/img/cartas/9_Copas.PNG';
setimedio[21]=new image();
setimedio[21].src='/img/cartas/10_Copas.PNG';
setimedio[22]=new image();
setimedio[22].src='/img/cartas/11_Copas.PNG';
setimedio[23]=new image();
setimedio[23].src='/img/cartas/12_Copas.PNG';
 
/* Oros */
setimedio[24]=new image();
setimedio[24].src='/img/cartas/1_Oros.PNG';
setimedio[25]=new image();
setimedio[25].src='/img/cartas/2_Oros.PNG';
setimedio[26]=new image();
setimedio[26].src='/img/cartas/3_Oros.PNG';
setimedio[27]=new image();
setimedio[27].src='/img/cartas/4_Oros.PNG';
setimedio[28]=new image();
setimedio[28].src='/img/cartas/5_Oros.PNG';
setimedio[29]=new image();
setimedio[29].src='/img/cartas/6_Oros.PNG';
setimedio[30]=new image();
setimedio[30].src='/img/cartas/7_Oros.PNG';
setimedio[31]=new image();
setimedio[31].src='/img/cartas/8_Oros.PNG';
setimedio[32]=new image();
setimedio[32].src='/img/cartas/9_Oros.PNG';
setimedio[33]=new image();
setimedio[33].src='/img/cartas/10_Oros.PNG';
setimedio[34]=new image();
setimedio[34].src='/img/cartas/11_Oros.PNG';
setimedio[35]=new image();
setimedio[35].src='/img/cartas/12_Oros.PNG';
 
/* Espadas */
 
setimedio[36]=new image();
setimedio[36].src='/img/cartas/1_Espadas.PNG';
setimedio[37]=new image();
setimedio[37].src='/img/cartas/2_Espadas.PNG';
setimedio[38]=new image();
setimedio[38].src='/img/cartas/3_Espadas.PNG';
setimedio[39]=new image();
setimedio[39].src='/img/cartas/4_Espadas.PNG';
setimedio[40]=new image();
setimedio[40].src='/img/cartas/5_Espadas.PNG';
setimedio[41]=new image();
setimedio[41].src='/img/cartas/6_Espadas.PNG';
setimedio[42]=new image();
setimedio[42].src='/img/cartas/7_Espadas.PNG';
setimedio[43]=new image();
setimedio[43].src='/img/cartas/8_Espadas.PNG';
setimedio[44]=new image();
setimedio[44].src='/img/cartas/9_Espadas.PNG';
setimedio[45]=new image();
setimedio[45].src='/img/cartas/10_Espadas.PNG';
setimedio[46]=new image();
setimedio[46].src='/img/cartas/11_Espadas.PNG';
setimedio[47]=new image();
setimedio[47].src='/img/cartas/12_Espadas.PNG';
 
function cartes(){
	var sieteaux=new Array(48);
	var carta;
 
	for(n=0;n<47;n++){
 
		do{
			carta=parseInt(Math.random()*47)+1;
		}while(sieteaux[carta]==1);
 
 
		if(sieteaux[carta]==0 && sieteaux[carta]<=11){
				document.images["carta01"].src=sieteimedio[carta].src;
		}
		if(sieteaux[carta]>=12 && sieteaux[carta]<=23){
				document.images["carta01"].src=sieteimedio[carta].src;
		}
		if(sieteaux[carta]>=24 && sieteaux[carta]<=35){
				document.images["carta01"].src=sieteimedio[carta].src;
		}
		if(sieteaux[carta]>=36 && sieteaux[carta]>=47){
				document.images["carta01"].src=sieteimedio[carta].src;
		}
 
	}
	//array con código de todas las imágenes.
}

ar imagenes = new Array ("foto1.jpg", "foto2.jpg", "foto3.jpg", "foto2.jpg");
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
      si se llega al final del arreglo se retorna al primero
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