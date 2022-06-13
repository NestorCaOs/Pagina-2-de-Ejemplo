const contenedor = document.querySelector(".flex-container");


function crearLlave(nombre,modelo,precio,img){
	nombre = `<h2>${nombre}</h2>`;
	//modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number
}

let documentFragment = document.createDocumentFragment();

let imgg=""
for (var i = 1; i <= 4; i++){
	if (i == 1) {
			imgg = "<img class='llave-img' src='https://www.revistafamilia.ec/files/article_main/uploads/2021/08/04/610afc507d1c1.jpeg'>";
	} else if (i == 2) {
			imgg = "<img class='llave-img' src='https://img-global.cpcdn.com/recipes/98cbf269a99506bb/680x482cq70/almuerzo-de-domingo-carne-foto-principal.webp'>";
	} else if (i == 3) {
			imgg = "<img class='llave-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqSzTe_3SzlssKeFPJNosjqAhABqW6oi-6V59e1BzbCi-qmhFr3tysbJoSF2PRG51UyY&usqp=CAU'>";
	} else if (i == 4) {
			imgg = "<img class='llave-img' src='https://i.blogs.es/b8b596/apertura-apaisada-ensaladas/1024_2000.jpg'>";
	};



	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
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
