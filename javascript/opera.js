// JavaScript Document
var operaUrl = "http://www.mocky.io/v2/5a3ba24b300000941682d28c";

function inyectaTipoRestaurante (jsonObj)
{
	var cadena = "";
	for (let i = 0; i < jsonObj.tipo.length; i++)
	{
		cadena +='<li><a href="#">'+ jsonObj.tipo[i] +'</a></li>';
	}
	return cadena;
}

function openAndLoad (pUrl, callback)
{
	var jsonObj = {};
	var request = new XMLHttpRequest();
	request.open ("GET", pUrl);
	request.onload = function ()
	{
		jsonObj = JSON.parse(request.response);
		console.log (jsonObj);
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//Escriu i dibuixa l'HTML
		document.getElementById("nombre").innerHTML = jsonObj.nombre;
		document.getElementById("valoracion").innerHTML = jsonObj.valoracion + "/10";
		document.getElementById("adresa").innerHTML = jsonObj.adresa;
		document.getElementById("tipo").innerHTML = callback(jsonObj);
		document.getElementById("imagen").innerHTML = '<img src='+jsonObj.imagen+' alt="foto del restaurante">';
		for (let i = 0; i < jsonObj.menu.length; i++)
		{
			document.getElementById("menu").innerHTML += '<h4>'+jsonObj.menu[i].titol+'</h4><p>'+jsonObj.menu[i].platos+'</p>';
		}
		///////////////////////
		document.getElementById("opiniones").innerHTML += '<h2>OPINIONES</h2>';
		for (let i = 0; i < jsonObj.opiniones.length; i++)
		{
			document.getElementById("opiniones").innerHTML += '<div><div class="pcol1"><img src="'+ jsonObj.opiniones[i].imagen +'" alt=""></div><div class="pcol3 float-right"><span>'+jsonObj.opiniones[i].valoracion+ '/10'+'</span></div><div class="pcol2"><h4>'+jsonObj.opiniones[i].nombre+'</h4><p>'+jsonObj.opiniones[i].comentario+'</p></div></div>';	
		}
		document.getElementById("poferta").innerHTML = '<h2>PROMOCIONES</h2><div class="p-3"><h4>'+jsonObj.promociones.promocion+'</h4><p>'+jsonObj.promociones.descripcion+'</p></div>';
		let cadena = "";
		for (let i = 0; i < jsonObj.recetas.preparacion.length;i++)
		{
			cadena += '<div><h5>'+jsonObj.recetas.preparacion[i].titulo+'</h5><p>'+jsonObj.recetas.preparacion[i].descripcion+'</p></div>';
		}
		let lista = "";
		for (let i = 0; i < jsonObj.recetas.ingredientes.length;i++)
		{
			lista += '<li>'+jsonObj.recetas.ingredientes[i]+'</li>';
		}
		document.getElementById("recetas").innerHTML += '<h2>RECETAS</h2><div><img src="'+jsonObj.recetas.imagen+'" alt="foto receta"><h3 class="mt-5 text-center">'+jsonObj.recetas.nombre+'</h3></div><div class="prep"><h4>Preparación</h4>'+cadena+'</div><div class="ingre"><h4>Ingredientes</h4><ul>'+lista+'</ul></div></div>';
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		if (this.status === 200)
		{
			console.log("Éxito!");
		}
		else
		{
			console.log("Fracaso!");
		}
		
	};
	request.send();	
}

openAndLoad(operaUrl, inyectaTipoRestaurante);