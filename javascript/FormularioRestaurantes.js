
function validarFormularioRestaurantes(event1) {

    event1.preventDefault();

    var ok = true;

    ///////////////////////////////////////////LIMPIAR LOS FORMULARIOS//////////////////////////////////////////////////
    document.getElementById("errorrestaurante").className = "";
    document.getElementById("errornombre").className = "";
    document.getElementById("errorapellidos").className = "";
    document.getElementById("errorres-genero").className = "";
    document.getElementById("erroremail").className = "";
    document.getElementById("errorpassword").className = "";
    document.getElementById("errorpassword2").className = "";
    document.getElementById("errortel").className = "";
    document.getElementById("errorcp").className = "";
    document.getElementById("errorpoblacion").className = "";
    document.getElementById("errorcalle").className = "";
    document.getElementById("errornumero").className = "";
    document.getElementById("errorrescheck").className = "";
    document.getElementById("errorrestaurante").innerText = "";
    document.getElementById("errornombre").innerText = "";
    document.getElementById("errorapellidos").innerText = "";
    document.getElementById("errorres-genero").innerText = "";
    document.getElementById("erroremail").innerText = "";
    document.getElementById("errorpassword").innerText = "";
    document.getElementById("errorpassword2").innerText = "";
    document.getElementById("errortel").innerText = "";
    document.getElementById("errorcp").innerText = "";
    document.getElementById("errorpoblacion").innerText = "";
    document.getElementById("errorcalle").innerText = "";
    document.getElementById("errornumero").innerText = "";
    document.getElementById("errorrescheck").innerText = "";

    // $("#errorrestaurante").html("").removeClass("alert alert-danger")


    // // ///////////////////////////////////////////NOMBRE RESTAURANTE///////////////////////////////////////////////////////
    if (formularioRestaurantes.restaurante.value == "" || formularioRestaurantes.restaurante.value == null) {
        document.getElementById("errorrestaurante").innerText = "Por favor introduzca el nombre de su restaurante";
        document.getElementById("errorrestaurante").className = "alert alert-danger";
        ;
    }
    ///////////////////////////////////////////NOMBRE CLIENTE///////////////////////////////////////////////////////


    var nombrereg = /^[\s a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    if (nombrereg.test(formularioRestaurantes.nombre.value) == false) {
        document.getElementById("errornombre").innerText = "Su nombre no puede contener números o caracteres especiales";
        document.getElementById("errornombre").className = "alert alert-danger";
        ok = false;
    }

    if (formularioRestaurantes.nombre.value == "" || formularioRestaurantes.nombre.value == null) {
        document.getElementById("errornombre").innerText = "Por favor introduzca su nombre";
        document.getElementById("errornombre").className = "alert alert-danger";
        ok = false;
    }
    ///////////////////////////////////////////APELLIDOS///////////////////////////////////////////////////////

    var apellidosreg = /^[\s a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    if (apellidosreg.test(formularioRestaurantes.apellidos.value) == false) {
        document.getElementById("errorapellidos").innerText = "Su apellido no puede contener números o caracteres especiales";
        document.getElementById("errorapellidos").className = "alert alert-danger";
        ok = false;
    }

    if (formularioRestaurantes.apellidos.value == "" || formularioRestaurantes.apellidos.value == null) {
        document.getElementById("errorapellidos").innerText = "Por favor introduzca sus apellidos";
        document.getElementById("errorapellidos").className = "alert alert-danger";
        ok = false;
    }
    ///////////////////////////////////////////GENERO///////////////////////////////////////////////////////
    if (formularioRestaurantes.genero.value == "" || formularioRestaurantes.genero.value == null) {
        document.getElementById("errorres-genero").innerText = "Por favor seleccione su género";
        document.getElementById("errorres-genero").className = "alert alert-danger";
        ok = false;
    }
    /////////////////////////////////////////CORREO///////////////////////////////////////////////////////

    var emailreg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/

    if (emailreg.test(formularioRestaurantes.email.value) == false) {
        document.getElementById("erroremail").innerText = "Por favor introduzca su correo electrónico en formato correcto";
        document.getElementById("erroremail").className = "alert alert-danger";
        ok = false;
    }
    if (formularioRestaurantes.email.value == "" || formularioRestaurantes.email.value == null) {
        document.getElementById("erroremail").innerText = "Por favor introduzca su correo electrónico";
        document.getElementById("erroremail").className = "alert alert-danger";
        ok = false;
    }


    /////////////////////////////////////////CONTRASEÑA///////////////////////////////////////////////////////

    var passwordreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (passwordreg.test(formularioRestaurantes.password.value) == false) {
        document.getElementById("errorpassword").innerText = "Su contraseña debe contener por lo menos 8 caracteres y contener una letra mayúscula, una minúscula y un número";
        document.getElementById("errorpassword").className = "alert alert-danger";
        ok = false;
    }

    if (formularioRestaurantes.password.value == "" || formularioRestaurantes.password.value == null) {
        document.getElementById("errorpassword").innerText = "Por favor introduzca una contraseña";
        document.getElementById("errorpassword").className = "alert alert-danger";
        ok = false;
    }

    var pass = document.getElementById("password");
    var pass2 = document.getElementById("password2");
    if (pass.value != pass2.value) {
        document.getElementById("errorpassword2").innerText = "Las contraseñas no coinciden";
        document.getElementById("errorpassword2").className = "alert alert-danger";
        ok = false;
    }

    if (formularioRestaurantes.password2.value == "" || formularioRestaurantes.password2.value == null) {
        document.getElementById("errorpassword2").innerText = "Por favor confirme su contraseña";
        document.getElementById("errorpassword2").className = "alert alert-danger";
        ok = false;
    }



    ///////////////////////////////////////////TELEFONO///////////////////////////////////////////////////////



    var telefonoreg = /^(?=.*[0-9])(?=.{8})/;
    if (telefonoreg.test(formularioRestaurantes.telefono.value) == false) {
        document.getElementById("errortel").innerText = "Por favor introduzca su teléfono en formato correcto";
        document.getElementById("errortel").className = "alert alert-danger";
        ok = false;
    }

    if (formularioRestaurantes.telefono.value == "" || formularioRestaurantes.telefono.value == null) {
        document.getElementById("errortel").innerText = "Por favor introduzca su teléfono";
        document.getElementById("errortel").className = "alert alert-danger";
        ok = false;
    }

    ///////////////////////////////////////////CODIGO POSTAL///////////////////////////////////////////////////////


    var cpreg = /^(?=.*[0-9])(?=.{5})/;
    if (cpreg.test(formularioRestaurantes.cp.value) == false) {
        document.getElementById("errorcp").innerText = "Por favor introduzca su código postal en formato correcto";
        document.getElementById("errorcp").className = "alert alert-danger";
        ok = false;
    }

    if (formularioRestaurantes.cp.value == "" || formularioRestaurantes.cp.value == null) {
        document.getElementById("errorcp").innerText = "Por favor introduzca su código postal";
        document.getElementById("errorcp").className = "alert alert-danger";
        ok = false;
    }

    ///////////////////////////////////////////POBLACION///////////////////////////////////////////////////////
    if (formularioRestaurantes.poblacion.value == "" || formularioRestaurantes.poblacion.value == null) {
        document.getElementById("errorpoblacion").innerText = "Por favor introduzca su población";
        document.getElementById("errorpoblacion").className = "alert alert-danger";
        ok = false;
    }
    ///////////////////////////////////////////CALLE///////////////////////////////////////////////////////
    if (formularioRestaurantes.calle.value == "" || formularioRestaurantes.calle.value == null) {
        document.getElementById("errorcalle").innerText = "Por favor introduzca su calle, vía, etc.";
        document.getElementById("errorcalle").className = "alert alert-danger";
        ok = false;
    }
    ///////////////////////////////////////////NUMERO///////////////////////////////////////////////////////
    if (formularioRestaurantes.numero.value == "" || formularioRestaurantes.numero.value == null) {
        document.getElementById("errornumero").innerText = "Por favor introduzca su número";
        document.getElementById("errornumero").className = "alert alert-danger";
        ok = false;
    }

    ///////////////////////////////////////////ACEPTAR///////////////////////////////////////////////////////

    if (document.getElementById("rescheckcheck").checked == false) {

        document.getElementById("errorrescheck").innerText = "Tiene que aceptar las condiciones legales";
        document.getElementById("errorrescheck").className = "alert alert-danger";
        ok = false;
    }

    if (ok) {
        let url = "http://www.mocky.io/v2/5a54dda32d000000315b1de3";
        let badurl = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
        Ajax("POST",
            url,
            function () {
                window.location.href = 'homerestaurante.html'
            },
            serialize(document.getElementById("formularioRestaurantes")),
            "errorenviar");
    }

}

function previewFormularioRestaurantes() {

    var output = document.getElementById("resImagePreview");
    output.src = URL.createObjectURL(event.target.files[0]);

}

document.getElementById("formularioRestaurantes").onsubmit = validarFormularioRestaurantes;
document.getElementById("res-anadir").onchange = previewFormularioRestaurantes;