const contenedor = document.querySelector(".flex-container");


function crearLlave(nombre,modelo,precio,img){
	nombre = `<h2>${nombre}</h2>`;
	//modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
	modelo = `<h3>${modelo}</h3>`;
	//precio = `<p>Precio: <b>$${precio}</b></p>`;
	precio = `<p><b>${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}

// const changeHidden = (number)=>{
// 	document.querySelector(".key-data").value = number
// }

let documentFragment = document.createDocumentFragment();

let imgg=""
for (var i = 1; i <= 10; i++){
	let modeloRandom = "";
	let precioRandom = "";

precioRandom = "";
	if (i == 1) {
		modeloRandom = "Plato Principal - Opción 1";
		imgg = "<img class='llave-img' src='https://www.xn--vialosvascos-bhb.cl/Flash/parawebgif.gif'>";
	} else if (i == 2) {
		modeloRandom = "Plato Principal - Opción 2";
		imgg = "<img class='llave-img' src='https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/11/que-comida-se-puede-acompanar-con-arroz-blanco.jpg'>";
	} else if (i == 3) {
		modeloRandom = "Hipocalórico";
		imgg = "<img class='llave-img' src='https://chilerecetas.cl/images/fotos/guiso_de_zapallito_italiano.jpg'>";
	} else if (i == 4) {
		modeloRandom = "Ensalada - Opción 1";
		imgg = "<img class='llave-img' src='https://www.midiariodecocina.com/wp-content/uploads/2015/06/Ensalada-a-la-chilena01.jpg'>";
	} else if (i == 5) {
		modeloRandom = "Ensalada - Opción 2";
		imgg = "<img class='llave-img' src='https://img-global.cpcdn.com/recipes/759fd918f391ebbb/640x640sq70/photo.webp'>";
	} else if (i == 6) {
		modeloRandom = "Ensalada - Opción 3";
		imgg = "<img class='llave-img' src='https://cocinachilena.cl/wp-content/uploads/2010/05/ensalada-porotos-verdes-tomate-4-scaled.jpg'>";
	} else if (i == 7) {
		modeloRandom = "Postre - Opción 1";
		imgg = "<img class='llave-img' src='https://comidastipicaschilenas.cl/wp-content/uploads/2020/10/Receta-de-colegial-chileno.jpg'>";
	} else if (i == 8) {
		modeloRandom = "Postre - Opción 2";
		imgg = "<img class='llave-img' src='https://d1y76wkgrgotg6.cloudfront.net/content/recetas/1/large/semola-con-leche.webp'>";
	} else if (i == 9) {
		modeloRandom = "Postre - Opción 3";
		imgg = "<img class='llave-img' src='https://www.nicepng.com/png/full/97-971544_imgenes-de-frutas-y-verduras-variadas-american-supply.png'>";
	} else if (i == 10) {
		modeloRandom = "Extras";
		imgg = "<img class='llave-img' src='https://okdiario.com/img/2018/09/29/sopa-de-fideos-con-pollo-655x368.jpg'>";
	};



	//let modeloRandom = Math.round(Math.random()*10000);
	//let precioRandom = Math.round(Math.random()*10+30);
	let llave = crearLlave(`Llave ${i}`,`Modelo ${modeloRandom}`, precioRandom,imgg);
	let div = document.createElement("DIV");
	// div.addEventListener("click",()=>{changeHidden(modeloRandom)});
	div.addEventListener("click",()=>{
		document.querySelector(".key-data").value = modeloRandom
		});
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];;
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);	
