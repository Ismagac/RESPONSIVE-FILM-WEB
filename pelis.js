var peliculass = [
	{
		nombre: "Iron Man",
		imagen: "img/ironman2008.jpg",
		descripcion: "Tony Stark, un brillante industrial y genio inventor, construye un traje blindado para combatir el mal y proteger al mundo como Iron Man.",
		año: 2008,
		director: "Jon Favreau",
		youtubeURL: "https://www.youtube.com/watch?v=kg4Na-RbSrA&ab_channel=Slyfer2812",
		// trailerPreview: "https://www.youtube.com/embed/9rfxSqPNTmw", así se pondría el iframe, pero la mayoría de vídeos no lo permiten, dejo los gifs por estética
		trailerPreview: "img/imgif.gif",
		valoracionIMDB: 7.9
	},
	{
		nombre: "The Amazing Spider-Man",
		imagen: "img/amazingspidermanhor.jpg",
		descripcion: "Peter Parker, un estudiante de secundaria, se convierte en Spider-Man después de ser mordido por una araña genéticamente modificada y lucha contra el crimen en Nueva York.",
		año: 2012,
		director: "Marc Webb",
		youtubeURL: "https://www.youtube.com/watch?v=3wEnSKsuYlU&ab_channel=RhinoTV",
		trailerPreview: "img/spidygif.gif",
		valoracionIMDB: 6.6
	},
	{
		nombre: "Maze Runner",
		imagen: "img/mazerunner.jpg",
		descripcion: "Thomas despierta en un lugar llamado El Área, donde un grupo de jóvenes debe correr en un laberinto lleno de peligros para descubrir su verdadera identidad y escapar.",
		año: 2014,
		director: "Wes Ball",
		youtubeURL: "https://www.youtube.com/watch?v=z9ZsrliOLqs&ab_channel=EvelynJackson",
		trailerPreview: "img/mazegif.gif",
		valoracionIMDB: 6.8
	},
	{
		nombre: "Pacific Rim",
		imagen: "img/pacificrim.jpg",
		descripcion: "En un futuro donde monstruos gigantes llamados Kaijus emergen del océano, la humanidad construye enormes robots llamados Jaegers para enfrentarse a ellos en una batalla épica.",
		año: 2013,
		director: "Guillermo del Toro",
		youtubeURL: "https://www.youtube.com/watch?v=FCPZrf1xtyU&ab_channel=xRav3n",
		trailerPreview: "img/prgif.gif",
		valoracionIMDB: 6.9
	},
	{
		nombre: "Spiderman: Un Nuevo Universo",
		imagen: "img/miles.jpg",
		descripcion: "Miles Morales, un adolescente de Brooklyn, se convierte en el nuevo Spider-Man y se une a otros Spider-Men de diferentes dimensiones para detener una amenaza interdimensional.",
		año: 2018,
		director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
		youtubeURL: "https://www.youtube.com/watch?v=BM5Bqhn9I94&ab_channel=DavidVarela",
		trailerPreview: "img/milesgif.gif",
		valoracionIMDB: 8.4
	},
	{
		nombre: "Capitán América: Civil War",
		imagen: "img/civilwar.jpg",
		descripcion: "Enfrentados por sus diferentes puntos de vista, el Capitán América y Iron Man lideran bandos opuestos de superhéroes en una guerra civil que amenaza con dividir a los Avengers.",
		año: 2016,
		director: "Anthony Russo, Joe Russo",
		youtubeURL: "https://www.youtube.com/watch?v=bLe6JS8r_eA&ab_channel=psychokai",
		trailerPreview: "img/cwgif.gif",
		valoracionIMDB: 7.8
	},
	{
		nombre: "Gentlemen: Los Señores de la Mafia",
		imagen: "img/gentleman.jpg",
		descripcion: "Un talentoso expatriado estadounidense intenta vender su lucrativo imperio de marihuana en Londres, desencadenando conspiraciones, planes y chantajes en todos los niveles.",
		año: 2019,
		director: "Guy Ritchie",
		youtubeURL: "https://www.youtube.com/watch?v=tTdBf6shRR0&ab_channel=LM",
		trailerPreview: "img/gentlegif.gif",
		valoracionIMDB: 7.8
	},
	{
		nombre: "Guardianes de la Galaxia Vol. 3",
		imagen: "img/guardianes3.jpg",
		descripcion: "Los Guardianes de la Galaxia se enfrentan a nuevas amenazas mientras descubren los misterios del pasado de Peter Quill. Además, Rocket finalmente encuentra amor en el camino.",
		año: 2023,
		director: "James Gunn",
		youtubeURL: "https://www.youtube.com/watch?v=cbAfhBNQ2qU&ab_channel=TopMovieClips",
		trailerPreview: "img/guardianes2gif.gif",
		valoracionIMDB: 8.0
	},
	{
		nombre: "Ready Player One",
		imagen: "img/ready.jpg",
		descripcion: "En un futuro distópico, la humanidad pasa la mayor parte de su tiempo en el Oasis, un universo de realidad virtual. Un joven se embarca en una aventura para encontrar un tesoro oculto en el juego.",
		año: 2018,
		director: "Steven Spielberg",
		youtubeURL: "https://www.youtube.com/watch?v=tZHIat7ToWE&ab_channel=BraveOrder",
		trailerPreview: "img/readygif.gif",
		valoracionIMDB: 7.4
	},
	{
		nombre: "El Juego de Ender",
		imagen: "img/ender.jpg",
		descripcion: "En un futuro donde la Tierra está en guerra con una raza alienígena, un niño prodigio llamado Ender es reclutado y entrenado para liderar la batalla final contra los invasores.",
		año: 2013,
		director: "Gavin Hood",
		youtubeURL: "https://www.youtube.com/watch?v=BHJBKd6P3eQ&ab_channel=Laetri",
		trailerPreview: "img/endergif.gif",
		valoracionIMDB: 6.6
	},
	{
		nombre: "Avengers: Infinity War",
		imagen: "img/infinitywar.jpg",
		descripcion: "Los Avengers y sus aliados se unen para enfrentarse a Thanos, un ser despiadado que busca recolectar las Gemas del Infinito y desatar su poder para destruir el universo.",
		año: 2018,
		director: "Anthony Russo, Joe Russo",
		youtubeURL: "https://www.youtube.com/watch?v=6ZfuNTqbHE8&ab_channel=MarvelEntertainment",
		trailerPreview: "img/thorgif.gif",
		valoracionIMDB: 8.4
	}
];



document.addEventListener("DOMContentLoaded", function () {
	var peliculasContainer = document.getElementById("peliculas-container");

	peliculass.forEach(function (pelicula) {
		var tarjeta = document.createElement("div");
		tarjeta.className = "pelicula-card";

		var imagenPelicula = document.createElement("img");
		imagenPelicula.src = pelicula.imagen;
		tarjeta.appendChild(imagenPelicula);

		var overlay = document.createElement("div");
		overlay.className = "overlay";

		var overlayContent = document.createElement("div");
		overlayContent.className = "overlay-content";

		var tituloPelicula = document.createElement("div");
		tituloPelicula.className = "movie-title";
		tituloPelicula.textContent = pelicula.nombre;
		overlayContent.appendChild(tituloPelicula);

		overlay.appendChild(overlayContent);
		tarjeta.appendChild(overlay);

		tarjeta.addEventListener("click", function () {
			window.location.href = "pelicula.html?" + encodeURIComponent(JSON.stringify(pelicula));
		});

		peliculasContainer.appendChild(tarjeta);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var peliculasContainer = document.getElementById("peliculas-container");
	var filtroSelect = document.getElementById("filtro-select");
	var filtroInput = document.getElementById("filtro-input");

	filtroSelect.addEventListener("change", filtrarPeliculas);
	filtroInput.addEventListener("input", filtrarPeliculas);

	function filtrarPeliculas() {
		var filtro = filtroSelect.value;
		var valorFiltro = filtroInput.value.toLowerCase();

		var peliculasFiltradas = peliculass;
		if (filtro === "nombre" && valorFiltro !== "") {
			peliculasFiltradas = peliculasFiltradas.filter(function (pelicula) {
				return pelicula.nombre.toLowerCase().includes(valorFiltro);
			});
		} else if (filtro === "año" && valorFiltro !== "") {
			peliculasFiltradas = peliculasFiltradas.filter(function (pelicula) {
				return pelicula.año.toString().includes(valorFiltro);
			});
		} else if (filtro === "director" && valorFiltro !== "") {
			peliculasFiltradas = peliculasFiltradas.filter(function (pelicula) {
				return pelicula.director.toLowerCase().includes(valorFiltro);
			});
		}

		mostrarPeliculas(peliculasFiltradas);
	}

	function mostrarPeliculas(peliculas) {
		peliculasContainer.innerHTML = "";

		peliculas.forEach(function (pelicula) {
			var tarjeta = document.createElement("div");
			tarjeta.className = "pelicula-card";

			var imagenPelicula = document.createElement("img");
			imagenPelicula.src = pelicula.imagen;
			tarjeta.appendChild(imagenPelicula);

			var overlay = document.createElement("div");
			overlay.className = "overlay";

			var overlayContent = document.createElement("div");
			overlayContent.className = "overlay-content";

			var tituloPelicula = document.createElement("div");
			tituloPelicula.className = "movie-title";
			tituloPelicula.textContent = pelicula.nombre;
			overlayContent.appendChild(tituloPelicula);

			overlay.appendChild(overlayContent);
			tarjeta.appendChild(overlay);
			tarjeta.addEventListener("click", function () {
				window.location.href = "pelicula.html?" + encodeURIComponent(JSON.stringify(pelicula));
			});

			peliculasContainer.appendChild(tarjeta);
		});
	}

	mostrarPeliculas(peliculass);
});


document.addEventListener("DOMContentLoaded", function () {
	var pelicula = JSON.parse(decodeURIComponent(window.location.search.substring(1)));

	console.log(pelicula.nombre);
	console.log(pelicula.descripcion);
	console.log(pelicula.año);
	console.log(pelicula.director);
	console.log(pelicula.youtubeURL);
	console.log(pelicula.trailerPreview);
	console.log(pelicula.valoracionIMDB);

	document.getElementById("nombre-pelicula").textContent = pelicula.nombre;
	document.getElementById("descripcion-pelicula").textContent = pelicula.descripcion;
	document.getElementById("ano-pelicula").textContent = pelicula.año;
	document.getElementById("director-pelicula").textContent = pelicula.director;

	var youtubeURL = document.getElementById("youtube-url");
	youtubeURL.href = pelicula.youtubeURL;
	youtubeURL.textContent = "Ver trailer";

	var trailerPreview = document.getElementById("trailer-preview");
	trailerPreview.src = pelicula.trailerPreview;
	trailerPreview.style.display = "block";

	document.getElementById("valoracion-imdb").textContent = pelicula.valoracionIMDB;
});
