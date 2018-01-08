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
    var passRegex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;   

    if (passRegex.test(campo.value)) {
      return true;
    } 
    else {
      valido.innerText = "Debe contener 8 caracteres como mínimo una mayúscula, minuscula, carácter especial y numero";
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
    var passRegex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;   

    if (passRegex.test(campo.value)) {
      return true;
    } 
    else {
      valido.innerText = "Debe contener 8 caracteres como mínimo una mayúscula, minuscula, carácter especial y numero";
      return false;
    }
};

document.getElementById("btnSubmitRestaurante").onclick = function(){
  document.getElementById("emailRestauranteOK").innerText= "";
  document.getElementById("passRestauranteOK").innerText= "";

  if( validarEmailRestaurante() && validarPasswordRestaurante() )
    window.location.href = 'homerestaurante.html';
};

