
var ok = true;

document.getElementById("formularioRestaurantes").onsubmit = validarFormularioRestaurantes;

function validarFormularioRestaurantes(evt) {
    evt.preventDefault();



    validarVacio('[name="restaurante"]', "#errorrestaurante", "restauranteVacio");
    validarVacio('[name="nombre"]', "#errornombre", "nombreVacio");
    validarVacio('[name="apellidos"]', "#errorapellidos", "apellidosVacio");
    validarVacio('[name="genero"]', "#errorres-genero", "generoVacio");
    
    

    function validarVacio(nombre, err, fun) {

        if (!$(nombre).val()) {
            var obj = Validador[fun]($('[name="nombre"]').val())

            $(err).text(obj.error).addClass(obj.class);

            ok = obj.status;
        }


        return ok;
    }
}







// //////////////////////////////////RESTAURANTE/////////////////////////////////

// $('[name="restaurante"]').focusout(function () {

//     if (!$('[name="restaurante"]').val()) {
//         var obj = Validador.restauranteVacio($('[name="restaurante"]').val())

//         $("#errorrestaurante").text(obj.error).addClass(obj.class);

//         ok = obj.status;
//     }

// });


// $('[name="restaurante"]').keyup(function () {

//     $("#errorrestaurante").text("").removeClass("alert alert-danger");

//     ok = true;

// });

// //////////////////////////////////NOMBRE/////////////////////////////////////////////
$('[name="nombre"]').focusout(function () {

    if (!$('[name="nombre"]').val()) {
        var obj = Validador.nombreVacio($('[name="nombre"]').val())

        $("#errornombre").text(obj.error).addClass(obj.class);

        ok = obj.status;
    }

});


// $('[name="nombre"]').keyup(function () {

//     $("#errornombre").text("").removeClass("alert alert-danger");

//     var obj = Validador.nombreRegex($('[name="nombre"]').val())

    // if (obj){
    // $("#errornombre").text(obj.error).addClass(obj.class);

//     ok = obj.status; }

// });


