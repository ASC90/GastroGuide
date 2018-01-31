var GestorModPlantilla = (function(){
	var template = null;
	var templ = null; 

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

	function procesaPlantilla(plantilla){	
		return $.get(plantilla).then(function(data){
			templ = $.parseHTML(data).filter(function(){
				return 'div';
			});
			return templ;		
		});		
	}

	return {
		render:renderiza,
		procesa:procesaPlantilla
	}
})(); 





