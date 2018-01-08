
function validarFormularioRestaurantes() {

    ///////////////////////////////////////////LIMPIAR LOS FORMULARIOS//////////////////////////////////////////////////
    document.getElementById("errorrestaurante").innerText = "";
    document.getElementById("errornombre").innerText = "";
    document.getElementById("errorapellidos").innerText ="";
    document.getElementById("errorres-genero").innerText ="";
    document.getElementById("erroremail").innerText ="";
    document.getElementById("errorpassword").innerText ="";
    document.getElementById("errorpassword2").innerText ="";
    document.getElementById("errortel").innerText ="";
    document.getElementById("errorcp").innerText ="";
    document.getElementById("errorpoblacion").innerText="";
    document.getElementById("errorcalle").innerText="";
    document.getElementById("errornumero").innerText="";
    document.getElementById("errorrescheck").innerText="";
    // ///////////////////////////////////////////NOMBRE RESTAURANTE///////////////////////////////////////////////////////
    if (formularioRestaurantes.restaurante.value == "" || formularioRestaurantes.restaurante.value == null) {
        document.getElementById("errorrestaurante").innerText = "Por favor introduzca el nombre de su restaurante";
        document.getElementById("errorrestaurante").className = "FormResError";
        ;
    }
    ///////////////////////////////////////////NOMBRE CLIENTE///////////////////////////////////////////////////////
  
    
    var nombrereg = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    if(nombrereg.test(formularioRestaurantes.nombre.value) == false){
    document.getElementById("errornombre").innerText = "Su nombre no puede contener números o caracteres especiales";
    document.getElementById("errornombre").className = "FormResError";
    }

    if (formularioRestaurantes.nombre.value == "" || formularioRestaurantes.nombre.value == null) {
        document.getElementById("errornombre").innerText = "Por favor introduzca su nombre";
        document.getElementById("errornombre").className = "FormResError";
   }
    ///////////////////////////////////////////APELLIDOS///////////////////////////////////////////////////////
   
    var apellidosreg = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    if(apellidosreg.test(formularioRestaurantes.apellidos.value) == false){
    document.getElementById("errorapellidos").innerText = "Su apellido no puede contener números o caracteres especiales";
    document.getElementById("errorapellidos").className = "FormResError";
    }

    if (formularioRestaurantes.apellidos.value == "" || formularioRestaurantes.apellidos.value == null) {
        document.getElementById("errorapellidos").innerText = "Por favor introduzca sus apellidos";
        document.getElementById("errorapellidos").className = "FormResError";
    }
    ///////////////////////////////////////////GENERO///////////////////////////////////////////////////////
    if (formularioRestaurantes.genero.value == "" || formularioRestaurantes.genero.value == null) {
        document.getElementById("errorres-genero").innerText = "Por favor seleccione su género";
        document.getElementById("errorres-genero").className = "FormResError";
    }
    /////////////////////////////////////////CORREO///////////////////////////////////////////////////////
 
    var emailreg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/
        
    if(emailreg.test(formularioRestaurantes.email.value) == false){
        document.getElementById("erroremail").innerText = "Por favor introduzca su correo electrónico en formato correcto";
        document.getElementById("erroremail").className = "FormResError";
        }
   if (formularioRestaurantes.email.value == "" || formularioRestaurantes.email.value == null) {
        document.getElementById("erroremail").innerText = "Por favor introduzca su correo electrónico";
        document.getElementById("erroremail").className = "FormResError";
    }


    /////////////////////////////////////////CONTRASEÑA///////////////////////////////////////////////////////
    
    var passwordreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        
    if(passwordreg.test(formularioRestaurantes.password.value) == false){
        document.getElementById("errorpassword").innerText = "Su contraseña debe contener por lo menos 8 caracteres y contener una letra mayúscula, una minúscula y un número";
        document.getElementById("errorpassword").className = "FormResError";
        }

    if (formularioRestaurantes.password.value == "" || formularioRestaurantes.password.value == null) {
            document.getElementById("errorpassword").innerText = "Por favor introduzca una contraseña";
            document.getElementById("errorpassword").className = "FormResError";
        }

    var pass = document.getElementById("password");
    var pass2 = document.getElementById("password2");
    if(pass.value != pass2.value) {
        document.getElementById("errorpassword2").innerText = "Las contraseñas no coinciden";
        document.getElementById("errorpassword2").className = "FormResError";
    }

    if (formularioRestaurantes.password2.value == "" || formularioRestaurantes.password2.value == null) {
            document.getElementById("errorpassword2").innerText = "Por favor confirme su contraseña";
            document.getElementById("errorpassword2").className = "FormResError";
        }
    


    ///////////////////////////////////////////TELEFONO///////////////////////////////////////////////////////

  

    var telefonoreg = /^(?=.*[0-9])(?=.{8})/;
    if(telefonoreg.test(formularioRestaurantes.telefono.value) == false){
    document.getElementById("errortel").innerText = "Por favor introduzca su teléfono en formato correcto";
    document.getElementById("errortel").className = "FormResError";
    }

    if (formularioRestaurantes.telefono.value == "" || formularioRestaurantes.telefono.value == null) {
        document.getElementById("errortel").innerText = "Por favor introduzca su teléfono";
        document.getElementById("errortel").className = "FormResError";
    }

     ///////////////////////////////////////////CODIGO POSTAL///////////////////////////////////////////////////////
     

     var cpreg = /^(?=.*[0-9])(?=.{5})/;
    if(cpreg.test(formularioRestaurantes.cp.value) == false){
    document.getElementById("errorcp").innerText = "Por favor introduzca su código postal en formato correcto";
    document.getElementById("errorcp").className = "FormResError";
    }

    if (formularioRestaurantes.cp.value == "" || formularioRestaurantes.cp.value == null) {
        document.getElementById("errorcp").innerText = "Por favor introduzca su código postal";
        document.getElementById("errorcp").className = "FormResError";
     }

   ///////////////////////////////////////////POBLACION///////////////////////////////////////////////////////
   if (formularioRestaurantes.poblacion.value == "" || formularioRestaurantes.poblacion.value == null) {
    document.getElementById("errorpoblacion").innerText = "Por favor introduzca su población";
    document.getElementById("errorpoblacion").className = "FormResError";
}
   ///////////////////////////////////////////CALLE///////////////////////////////////////////////////////
   if (formularioRestaurantes.calle.value == "" || formularioRestaurantes.calle.value == null) {
    document.getElementById("errorcalle").innerText = "Por favor introduzca su calle, vía, etc.";
    document.getElementById("errorcalle").className = "FormResError";
}
   ///////////////////////////////////////////NUMERO///////////////////////////////////////////////////////
   if (formularioRestaurantes.numero.value == "" || formularioRestaurantes.numero.value == null) {
    document.getElementById("errornumero").innerText = "Por favor introduzca su número";
    document.getElementById("errornumero").className = "FormResError";
}

 ///////////////////////////////////////////ACEPTAR///////////////////////////////////////////////////////

 if (document.getElementById("rescheckcheck").checked == false) {
    
    document.getElementById("errorrescheck").innerText = "Tiene que aceptar las condiciones legales";
    document.getElementById("errorrescheck").className = "FormResError";
 }

return false;


}

function previewFormularioRestaurantes() {

var output = document.getElementById("resImagePreview");
output.src = URL.createObjectURL(event.target.files[0]);
    
}


document.getElementById("formularioRestaurantes").onsubmit = validarFormularioRestaurantes;
document.getElementById("res-anadir").onchange = previewFormularioRestaurantes;