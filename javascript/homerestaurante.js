//////////////////////FOTO/////////////////////////////////////////////////////////

document.getElementById("imgsrc").onchange = function(){
  var temporal = URL.createObjectURL(event.target.files[0]);
  document.getElementById("pub-con-gal").innerHTML += '<div><img src="'+ temporal +'"></div>'; 
}

//////////////////////VIDEO/////////////////////////////////////////////////////////

function validarVideo() {
  var titulo = document.getElementById("titVideo").value;
  var descripcion = document.getElementById("descVideo").value;
  var url = document.getElementById("urlVideo").value;
  var texto = document.getElementById("textoVideo").value;

  if (!titulo) 
    document.getElementById("titVideoOK").innerText = "Campo vacío";

  if (!descripcion) 
    document.getElementById("descVideoOK").innerText = "Campo vacío";

  if (!url) 
    document.getElementById("urlVideoOK").innerText = "Campo vacío";

  if (!texto)
    document.getElementById("textoVideoOK").innerText = "Campo vacío";

}

document.getElementById("btnVideos").onclick = function(evt){
  evt.preventDefault();

  document.getElementById("titVideoOK").innerText = "";
  document.getElementById("descVideoOK").innerText = "";
  document.getElementById("urlVideoOK").innerText = "";
  document.getElementById("textoVideoOK").innerText = "";
  
  validarVideo();
}


///////////////////////////////MENU/////////////////////////////////////////////////

function validarMenu(){
  var entrante = document.getElementById("entrante").value;
  var primer = document.getElementById("primerPlato").value;
  var segund = document.getElementById("segundoPlato").value;
  var postr = document.getElementById("postre").value;
  var tmenu = document.getElementById("titMenu").value;
  var nmenu = document.getElementById("nombreMenu").value;

  if (!entrante) 
    document.getElementById("entranteOK").innerText = "Campo vacío";

  if (!primer) 
    document.getElementById("primerPlatoOK").innerText = "Campo vacío";

  if (!segund) 
    document.getElementById("segundoPlatoOK").innerText = "Campo vacío";

  if (!postr) 
    document.getElementById("postreOK").innerText = "Campo vacío";

  if (!tmenu) 
    document.getElementById("titMenuOK").innerText = "Campo vacío";

  if (!nmenu) 
    document.getElementById("nombreMenuOK").innerText = "Campo vacío";

}

document.getElementById("btnMenu").onclick = function(evt){
  evt.preventDefault(); //para que no se ejecute el submit del formulario por defecto

  document.getElementById("entranteOK").innerText = "";
  document.getElementById("primerPlatoOK").innerText = "";
  document.getElementById("segundoPlatoOK").innerText = "";
  document.getElementById("postreOK").innerText = "";
  document.getElementById("titMenuOK").innerText = ""; 
  document.getElementById("nombreMenuOK").innerText = "";
  
  validarMenu();
}


/////////////////////////OFERTAS///////////////////////////////

function validarOferta(){
  radioOf1 = document.getElementById("radioOferta1").checked;
  radioOf2 = document.getElementById("radioOferta2").checked;
  txtOf = document.getElementById("textoOferta").value;

  if(radioOf1 || radioOf2){
  }
  else{

    document.getElementById("radioOfertaOK").innerText = "Campo vacío";
  }

  if (!txtOf) 
    document.getElementById("textoOfertaOK").innerText = "Campo vacío";

}

document.getElementById("btnOferta").onclick = function(evt){
  evt.preventDefault(); //para que no se ejecute el submit del formulario por defecto

  document.getElementById("radioOfertaOK").innerText = "";
  document.getElementById("textoOfertaOK").innerText = "";
  
  validarOferta();
}

///////////////////////////////////////RECETAS//////////////////////////////////////////


function validarReceta(){
  var titreceta = document.getElementById("receta").value;
  var txtreceta = document.getElementById("textoReceta").value;

  if(!titreceta)
    document.getElementById("recetaOK").innerText = "Campo vacío";

  if(!txtreceta)
    document.getElementById("textoRecetaOK").innerText = "Campo vacío";    

}

document.getElementById("btnIngredientes").onclick = function(){
  let ingredientes = document.getElementById("ingredientes");
  
  if(!ingredientes.value){
    document.getElementById("ingredientesOK").innerText = "Campo vacío";

  }
  
  if(ingredientes.value){
    document.getElementById("listaIngredientes").innerHTML += '<li>'+ ingredientes.value +'</li>'; 
    ingredientes.value = "";
    document.getElementById("ingredientesOK").innerText = "";
  }
}

document.getElementById("imgsrc2").onchange = function(){
  var temporal = URL.createObjectURL(event.target.files[0]);
  document.getElementById("pub-con-gal2").innerHTML += '<div class="formresflo"><img src="'+ temporal +'"></div>'; 
}

document.getElementById("imgsrc").onchange = function(){
  var temporal = URL.createObjectURL(event.target.files[0]);
  document.getElementById("pub-con-gal").innerHTML += '<div><img src="'+ temporal +'"></div>'; 
}

document.getElementById("btnReceta").onclick = function(evt){
  evt.preventDefault(); //para que no se ejecute el submit del formulario por defecto

  document.getElementById("recetaOK").innerText = "";
  document.getElementById("textoRecetaOK").innerText = "";
  
  validarReceta();
}

