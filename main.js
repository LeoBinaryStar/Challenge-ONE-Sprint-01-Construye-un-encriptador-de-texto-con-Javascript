	/*Obteniendo el texto al dar click en el botón de encriptar*/
	document.getElementById("encriptar").addEventListener("click", function () {
		let textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();
		let textoEncriptado = encriptar(textoIngresado);
		document.getElementById("textoProcesado").innerHTML = textoEncriptado;


		/*Se remueve el contenido del div*/
		let imagen = document.getElementById("ImgNoEncontrado");
		let strong = document.getElementById("NoEncontrado");
		let textoProcesado = document.getElementById("textoProcesado");

		// Eliminar la imagen y la etiqueta
		imagen.classList.remove("aparecer");
		strong.classList.remove("aparecer");
		imagen.classList.add("desaparecer");
		strong.classList.add("desaparecer");
		textoProcesado.style.height = "25em";
	});

	/*Se ingresa la cadena de texto y se toma cada posición para que en esta se pueda hacer la manipulación
	en caso de ser una vocal.*/

	function encriptar(textoIngresado) {
		let contador = 0;
		let longitud = textoIngresado.length;
		let textoEncriptado = "";
		while (contador < longitud) {
			let letraActual = textoIngresado[contador];

			if (letraActual === "a") {
				textoEncriptado += "ai";
			} else if (letraActual === "e") {
				textoEncriptado += "enter";
			} else if (letraActual === "i") {
				textoEncriptado += "imes";
			} else if (letraActual === "o") {
				textoEncriptado += "ober";
			} else if (letraActual === "u") {
				textoEncriptado += "utaf";
			} else {
				textoEncriptado += letraActual;
			}
			contador++;
		}

		return textoEncriptado;
	}

	document.getElementById("desencriptar").addEventListener("click", function () {
		let textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();
		let textoEncriptado = desencriptar(textoIngresado);
		document.getElementById("textoProcesado").innerHTML = textoEncriptado;


		/*Se remueve el contenido del div*/
		let imagen = document.getElementById("ImgNoEncontrado");
		let strong = document.getElementById("NoEncontrado");
		let textoProcesado = document.getElementById("textoProcesado");

		// Eliminar la imagen y la etiqueta
		imagen.classList.remove("aparecer");
		strong.classList.remove("aparecer");
		imagen.classList.add("desaparecer");
		strong.classList.add("desaparecer");
		textoProcesado.style.height = "25em";
	});

	function desencriptar(textoEncriptado) {
		let textoDesencriptado = "";
		let i = 0;
		while (i < textoEncriptado.length) {
			if (textoEncriptado.slice(i, i + 2) === "ai") {
				textoDesencriptado += "a";
				i += 2;
			} else if (textoEncriptado.slice(i, i + 5) === "enter") {
				textoDesencriptado += "e";
				i += 5;
			} else if (textoEncriptado.slice(i, i + 4) === "imes") {
				textoDesencriptado += "i";
				i += 4;
			} else if (textoEncriptado.slice(i, i + 4) === "ober") {
				textoDesencriptado += "o";
				i += 4;
			} else if (textoEncriptado.slice(i, i + 4) === "utaf") {
				textoDesencriptado += "u";
				i += 4;
			} else {
				textoDesencriptado += textoEncriptado[i];
				i += 1;
			}
		}
		return textoDesencriptado;
	}

	let textoProcesado = document.getElementById("textoProcesado");
	let btnCopiar = document.getElementById("btnCopiar");

	btnCopiar.addEventListener("click", function () {
		let texto = textoProcesado.textContent;
		navigator.clipboard.writeText(texto)
			/*.then se usa cuando se cumple una "promesa" e este caso se usa para imprimir un alert*/
			.then(() => {
				let mensaje = document.createElement("div");
				mensaje.classList.add("mensaje")
				mensaje.innerText = "¡Texto copiado con éxito!";

				// Agregar el mensaje al div
				document.body.appendChild(mensaje);

				// Remover el div después de un intervalo de tiempo
				setTimeout(function () {
					mensaje.classList.add("mover");
				}, 1750);
				setTimeout(function () {
					mensaje.remove();
				}, 3000);
			});
	});

	function desencriptar(textoEncriptado) {
		let textoDesencriptado = "";
		let i = 0;
		while (i < textoEncriptado.length) {
			if (textoEncriptado.slice(i, i + 2) === "ai") {
				textoDesencriptado += "a";
				i += 2;
			} else if (textoEncriptado.slice(i, i + 5) === "enter") {
				textoDesencriptado += "e";
				i += 5;
			} else if (textoEncriptado.slice(i, i + 4) === "imes") {
				textoDesencriptado += "i";
				i += 4;
			} else if (textoEncriptado.slice(i, i + 4) === "ober") {
				textoDesencriptado += "o";
				i += 4;
			} else if (textoEncriptado.slice(i, i + 4) === "utaf") {
				textoDesencriptado += "u";
				i += 4;
			} else {
				textoDesencriptado += textoEncriptado[i];
				i += 1;
			}
		}
		return textoDesencriptado;
	}

	document.getElementById("btnLimpiar").addEventListener("click", function () {
		/*Elimina el contenido de los textos ingresados previamente.*/
		document.getElementById("textoProcesado").innerHTML = "";
		/*Se devuelve la imagen y el strong*/
		/*Se remueve el contenido del div*/
		let imagen = document.getElementById("ImgNoEncontrado");
		let strong = document.getElementById("NoEncontrado");
		let textoProcesado = document.getElementById("textoProcesado");

		// Eliminar la imagen y la etiqueta
		imagen.classList.add("aparecer");
		strong.classList.add("aparecer");
		textoProcesado.style.height = "initial";
		textoProcesado.innerText = "Ingresa el texto que desees encriptar o desencriptar";
	});