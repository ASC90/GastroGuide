///////////////////////LOGIN CLIENTE////////////////////////////////////////////////////////////////////
function validarEmailCliente() {
    var campo = document.getElementById("emailCliente"); //devuelve el elemento que desencadenó el evento.
    var valido = document.getElementById('emailClienteOK');  
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
 
    if (emailRegex.test(campo.value)) {
      return true;
    } 

    else {
      valido.innerText = "¡El email es incorrecto, verificalo!";
      return false;
    }
};


function validarPasswordCliente() {
    var campo = document.getElementById("passwordCliente");
    var valido = document.getElementById('passClienteOK');
    var passRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;   

    if (passRegex.test(campo.value)) {
      return true;
    } 
    else {
      valido.innerText = "Debe contener 8 caracteres como mínimo una mayúscula, minúscula y número";
      return false;
    }
};

document.getElementById("btnSubmitCliente").onclick = function(){
  document.getElementById("emailClienteOK").innerText= "";
  document.getElementById("passClienteOK").innerText= "";

  if( validarEmailCliente() && validarPasswordCliente() )
    window.location.href = 'construccion.html';
};


///////////////////////LOGIN RESTAURANTE////////////////////////////////////////////////////////////////////

function validarEmailRestaurante() {
    var campo = document.getElementById("emailRestaurante"); //devuelve el elemento que desencadenó el evento.
    var valido = document.getElementById('emailRestauranteOK');  
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
 
    if (emailRegex.test(campo.value)) {
      return true;
    } 

    else {
      valido.innerText = "¡El email es incorrecto, verificalo!";
      return false;
    }
};


function validarPasswordRestaurante() {
    var campo = document.getElementById("passwordRestaurante");
    var valido = document.getElementById('passRestauranteOK');
    var passRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;   

    if (passRegex.test(campo.value)) {
      return true;
    } 
    else {
      valido.innerText = "Debe contener 8 caracteres como mínimo una mayúscula, minúscula y número";
      return false;
    }
};

document.getElementById("btnSubmitRestaurante").onclick = function(){
  document.getElementById("emailRestauranteOK").innerText= "";
  document.getElementById("passRestauranteOK").innerText= "";

  let url = "http://www.mocky.io/v2/5a5cc9ee2e0000c1099f842b";
  let badurl = "http://www.mocky.io/v2/5a5cce592e0000931e9f8440";

  if( validarEmailRestaurante() && validarPasswordRestaurante() )
  Ajax("POST","http://www.mocky.io/v2/5a5cc9ee2e0000c1099f842b", function(obj){
    if (obj.status == "OK")
    {window.location.href = 'homerestaurante.html';
    
  }
    else {
       document.getElementById("passRestauranteOK").innerText = "El usuario no existe";

    }
  } ,
   serialize(document.getElementById("inicio-sesion-restaurante")));
};

