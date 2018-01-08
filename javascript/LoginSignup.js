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

document.getElementById("btnSubmit").onclick = function(){
  if( validarEmailRestaurante() && validarPasswordRestaurante() )
    window.location.href = 'homerestaurante.html';
};

