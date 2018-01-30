var GestorModPlantilla = (function(){
	var template = null;

	function renderiza(templateURL, queContenido){
		return _renderizadorHBS(templateURL,queContenido);
	}

	function _renderizadorHBS (templateURL,queContenido){
		console.log(templateURL,queContenido)
		if(!template){
			return $.get(templateURL, 'html').then(function (data) {
				template=Handlebars.compile(data);
				return template(queContenido);	
			});
		}
	}	

	return {
		render:renderiza
	}
})();