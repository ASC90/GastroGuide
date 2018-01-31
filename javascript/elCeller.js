// JavaScript Document
var elCellerUrl = "http://www.mocky.io/v2/5a3ccf90310000b810b592de";

function openAndLoad (pUrl, callback)
{
	var jsonObj = {};
	var request = new XMLHttpRequest();
	request.open ("GET", pUrl);
	request.onload = function ()
	{
		jsonObj = JSON.parse(request.response);
		console.log (jsonObj);
		
		//////////////////////////////////////////////Escriu i dibuixa l'HTML
		var nombreRestaurante = GestorModPlantilla.procesa("../gestion_plantilla.mod/templates/formularioRestaurante/nombre.hbs");
		var adresaRestaurante = GestorModPlantilla.procesa("../gestion_plantilla.mod/templates/formularioRestaurante/adresa.hbs");
		var valoracionRestaurante = GestorModPlantilla.procesa("../gestion_plantilla.mod/templates/formularioRestaurante/valoracion.hbs");
		var tipoRestaurante = GestorModPlantilla.procesa("../gestion_plantilla.mod/templates/formularioRestaurante/tipo.hbs");				
		var imagenRestaurante = GestorModPlantilla.procesa("../gestion_plantilla.mod/templates/formularioRestaurante/imagen.hbs");		
		var menuRestaurante = GestorModPlantilla.procesa("../gestion_plantilla.mod/templates/formularioRestaurante/menu.hbs");
		var opinionesRestaurante = GestorModPlantilla.procesa("../gestion_plantilla.mod/templates/formularioRestaurante/opiniones.hbs");
		var pofertaRestaurante = GestorModPlantilla.procesa("../gestion_plantilla.mod/templates/formularioRestaurante/poferta.hbs");

		//document.getElementById("nombre").innerHTML = jsonObj.nombre;
		nombreRestaurante.then(function (value) {
    		var tmplnombre = Handlebars.compile(value[0].innerHTML);
			$('#nombre').append(tmplnombre(jsonObj));
  		})	

		//document.getElementById("valoracion").innerHTML = jsonObj.valoracion + "/10";
		valoracionRestaurante.then(function (value) {
    		var tmplvaloracion = Handlebars.compile(value[0].innerHTML);
			$('#valoracion').append(tmplvaloracion(jsonObj));
  		})			

		//document.getElementById("adresa").innerHTML = jsonObj.adresa;
		adresaRestaurante.then(function (value) {
    		var tmpladresa = Handlebars.compile(value[0].innerHTML);
			$('#adresa').append(tmpladresa(jsonObj));
  		})	

		//document.getElementById("tipo").innerHTML = cadena3;
		tipoRestaurante.then(function (value) {
    		var tmpltipo = Handlebars.compile(value[0].innerHTML);
			$('#tipo').append(tmpltipo(jsonObj));
  		})
		
		//document.getElementById("imagen").innerHTML = '<img src='+jsonObj.imagen+' alt="foto del restaurante">';
		imagenRestaurante.then(function (value) {
    		var tmplimagen = Handlebars.compile(value[0].innerHTML);
			$('#imagen').append(tmplimagen(jsonObj));
  		})	


		//document.getElementById("menu").innerHTML += '<h4>'+jsonObj.menu[i].titol+'</h4><p>'+jsonObj.menu[i].platos+'</p>';
		menuRestaurante.then(function (value) {
    		var tmplmenu = Handlebars.compile(value[0].innerHTML);
			$('#menu').append(tmplmenu(jsonObj));
  		})	

		document.getElementById("opiniones").innerHTML += '<h2>OPINIONES</h2>';
		
		//document.getElementById("opiniones").innerHTML += '<div><div class="pcol1"><img src="'+ jsonObj.opiniones[i].imagen +'" alt=""></div><div class="pcol3 float-right"><span>'+jsonObj.opiniones[i].valoracion+ '/10'+'</span></div><div class="pcol2"><h4>'+jsonObj.opiniones[i].nombre+'</h4><p>'+jsonObj.opiniones[i].comentario+'</p></div></div>';	
		opinionesRestaurante.then(function (value) {
    		var tmplopiniones = Handlebars.compile(value[0].innerHTML);
			$('#opiniones').append(tmplopiniones(jsonObj));
  		})			

		//document.getElementById("poferta").innerHTML = '<h2>PROMOCIONES</h2><div class="p-3"><h4>'+jsonObj.promociones.promocion+'</h4><p>'+jsonObj.promociones.descripcion+'</p></div>';
		pofertaRestaurante.then(function (value) {
    		var tmplpoferta = Handlebars.compile(value[0].innerHTML);
			$('#poferta').append(tmplpoferta(jsonObj));
  		})			
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

openAndLoad(elCellerUrl);