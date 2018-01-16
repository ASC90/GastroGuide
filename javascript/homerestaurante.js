//////////////////////FOTO/////////////////////////////////////////////////////////

document.getElementById("imgsrc").onchange = function () {
  var temporal = URL.createObjectURL(event.target.files[0]);
  document.getElementById("pub-con-gal").innerHTML += '<div class="col-md-6 col-sm-12 mt-5"><img class="img-thumbnail" src="' + temporal + '"></div>';
}

//////////////////////VIDEO/////////////////////////////////////////////////////////

function validarVideo() {
  var titulo = document.getElementById("titVideo").value;
  var descripcion = document.getElementById("descVideo").value;
  var url = document.getElementById("urlVideo").value;
  var texto = document.getElementById("textoVideo").value;
  var ok = true;

  if (!titulo) {
    document.getElementById("titVideoOK").innerText = "Campo vacío";
    var ok = false;
  };
  if (!descripcion) {
    document.getElementById("descVideoOK").innerText = "Campo vacío";
    var ok = false;
  };

  if (!url){
    document.getElementById("urlVideoOK").innerText = "Campo vacío";
  var ok = false;};

  if (!texto){
    document.getElementById("textoVideoOK").innerText = "Campo vacío";
  var ok = false;};
  if(ok){
    var urlOK = "http://www.mocky.io/v2/5a54dda32d000000315b1de3";
    var urlNOK = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
    Ajax("POST",urlNOK, limpiar(), serialize(document.getElementById("form-video")),"errorVideoResturante");

  }

}

function limpiar(){
  document.getElementById("titVideoOK").innerText = "";
  document.getElementById("descVideoOK").innerText = "";
  document.getElementById("urlVideoOK").innerText = "";
  document.getElementById("textoVideoOK").innerText = "";
  
}
document.getElementById("btnVideos").onclick = function (evt) {
  evt.preventDefault();

  validarVideo();

}
//BORRA FORMULARIO AL HACER CLIC EN LAS OTRAS TABS
$("#fotos-tab").add("#menu-tab").add("#ofertas-tab").add("#recetas-tab").click( function (){
   $("input").val("");
   $("textarea").val("");
   $("#errorVideoResturante").html("");
});

///////////////////////////////MENU/////////////////////////////////////////////////

function validarMenu() {
  var entrante = document.getElementById("entrante").value;
  var primer = document.getElementById("primerPlato").value;
  var segund = document.getElementById("segundoPlato").value;
  var postr = document.getElementById("postre").value;
  var tmenu = document.getElementById("titMenu").value;
  var nmenu = document.getElementById("nombreMenu").value;
  var ok = true;

  if (!entrante){
    document.getElementById("entranteOK").innerText = "Campo vacío";
    var ok = false;
  };

  if (!primer){
    document.getElementById("primerPlatoOK").innerText = "Campo vacío";
    var ok = false;
  };

  if (!segund){
    document.getElementById("segundoPlatoOK").innerText = "Campo vacío";
    var ok = false;
  };

  if (!postr){
    document.getElementById("postreOK").innerText = "Campo vacío";
    var ok = false;
  }

  if (!tmenu){
    document.getElementById("titMenuOK").innerText = "Campo vacío";
    var ok = false;
  };

  if (!nmenu){
    document.getElementById("nombreMenuOK").innerText = "Campo vacío";
    var ok = false;
  };

  if(ok){
    var urlOK = "http://www.mocky.io/v2/5a54dda32d000000315b1de3";
    var urlNOK = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
    Ajax("POST",urlNOK, limpiar(), serialize(document.getElementById("form-menu-restaurante")),"errorMenuRestaurante");

  }

}

document.getElementById("btnMenu").onclick = function (evt) {
  evt.preventDefault(); //para que no se ejecute el submit del formulario por defecto

  document.getElementById("entranteOK").innerText = "";
  document.getElementById("primerPlatoOK").innerText = "";
  document.getElementById("segundoPlatoOK").innerText = "";
  document.getElementById("postreOK").innerText = "";
  document.getElementById("titMenuOK").innerText = "";
  document.getElementById("nombreMenuOK").innerText = "";

  validarMenu();
}

$("#menu-tab").add("#fotos-tab").add("#videos-tab").add("#ofertas-tab").add("#recetas-tab").click( function (){
   $("input").val("");
   $("textarea").val("");
   $("#errorMenuRestaurante").html("");
});


/////////////////////////OFERTAS///////////////////////////////

function validarOferta() {
  radioOf1 = document.getElementById("radioOferta1").checked;
  radioOf2 = document.getElementById("radioOferta2").checked;
  txtOf = document.getElementById("textoOferta").value;
  var ok = true; 

  if (radioOf1 || radioOf2) {
  }
  else {

    document.getElementById("radioOfertaOK").innerText = "Campo vacío";
  }

  if (!txtOf){
    document.getElementById("textoOfertaOK").innerText = "Campo vacío";
    var ok=false;
  }

  if(ok){
    var urlOK = "http://www.mocky.io/v2/5a54dda32d000000315b1de3";
    var urlNOK = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
    Ajax("POST",urlNOK, limpiar(), serialize(document.getElementById("form-oferta-restaurante")),"errorOfertaRestaurante");

  }
}

document.getElementById("btnOferta").onclick = function (evt) {
  evt.preventDefault(); //para que no se ejecute el submit del formulario por defecto

  document.getElementById("radioOfertaOK").innerText = "";
  document.getElementById("textoOfertaOK").innerText = "";

  validarOferta();
}

$("#ofertas-tab").add("#fotos-tab").add("#videos-tab").add("#ofertas-tab").add("#recetas-tab").click( function (){
   $("input").val("");
   $("textarea").val("");
   $("#errorOfertaRestaurante").html("");
});

///////////////////////////////////////RECETAS//////////////////////////////////////////


function validarReceta() {
  var titreceta = document.getElementById("receta").value;
  var txtreceta = document.getElementById("textoReceta").value;
  var ok = true;

  if (!titreceta){
    document.getElementById("recetaOK").innerText = "Campo vacío";
    var ok=false;
  }
  if (!txtreceta){
    document.getElementById("textoRecetaOK").innerText = "Campo vacío";
    var ok=false;
  }


  if(ok){
    var urlOK = "http://www.mocky.io/v2/5a54dda32d000000315b1de3";
    var urlNOK = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
    Ajax("POST",urlNOK, limpiar(), serialize(document.getElementById("form-recetas-restaurante")),"errorRecetaRestaurante");

  }

}

document.getElementById("btnIngredientes").onclick = function (event) {
  event.preventDefault();
  let ingredientes = document.getElementById("ingredientes");

  if (!ingredientes.value) {
    document.getElementById("ingredientesOK").innerText = "Campo vacío";

  }

  if (ingredientes.value) {
    document.getElementById("listaIngredientes").innerHTML += '<li>' + ingredientes.value + '</li>';
    ingredientes.value = "";
    document.getElementById("ingredientesOK").innerText = "";
  }
}

document.getElementById("btnReceta").onclick = function (evt) {
  evt.preventDefault(); //para que no se ejecute el submit del formulario por defecto

  document.getElementById("recetaOK").innerText = "";
  document.getElementById("textoRecetaOK").innerText = "";

  validarReceta();
}

$("#recetas-tab").add("#fotos-tab").add("#videos-tab").add("#ofertas-tab").add("#recetas-tab").click( function (){
   $("input").val("");
   $("textarea").val("");
   $("#errorRecetaRestaurante").html("");
});