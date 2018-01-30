var Validador = (function () {



  var _vacio = function (val,err) {

    if (!val) {

        return {
            error: err,
            class: "alert alert-danger",
            status: false
        };
    }else return null;

}

var restauranteVacio = function (val) {

   
   return _vacio(val,"Por favor introduzca el nombre de su restaurante");

}



var nombreVacio = function (val) {

   
    return _vacio(val,"Por favor introduzca su nombre");
 
 }

 var apellidosVacio = function (val) {

   
    return _vacio(val,"Por favor introduzca sus apellidos");
 
 }


 var generoVacio = function (val) {

   
    return _vacio(val,"Por favor seleccione su género");
 
 }




    // var restauranteVacio = function (val) {

    //     if (!val) {

    //         return {
    //             error: "Por favor introduzca el nombre de su restaurante",
    //             class: "alert alert-danger",
    //             status: false
    //         }
    //     }
    // }

    // var nombreVacio = function (val) {

    //     if (!val) {

    //         return {
    //             error: "Por favor introduzca su nombre",
    //             class: "alert alert-danger",
    //             status: false
    //         }
    //     }
    //   }


    // var nombreRegex = function (val) {

    // var nombrereg = /^[\s a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    // if (nombrereg.test(val) == false) {
    //     return {
    //         error: "Su nombre no puede contener números o caracteres especiales",
    //         class: "alert alert-danger",
    //         status: false
    //     }
    // }
    //   }

    //   var apellidosVacio = function (val) {

    //     if (!val) {

    //         return {
    //             error: "Por favor introduzca sus apellidos",
    //             class: "alert alert-danger",
    //             status: false
    //         }
    //     }
    //   }


    //   var apellidosRegex = function (val) {

    //     var apellidosreg = /^[\s a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    //     if (apellidosreg.test(val) == false)
    //         return {
    //             error: "Su apellido no puede contener números o caracteres especiales",
    //             class: "alert alert-danger",
    //             status: false
    //         }
    //     }


    //     var generoVacio = function (val) {

    //         if (!val) {

    //             return {
    //                 error: "Por favor seleccione su género",
    //                 class: "alert alert-danger",
    //                 status: false
    //             }
    //         }
    //       }



   
   
    return {

        restauranteVacio:restauranteVacio,
        nombreVacio:nombreVacio,
        apellidosVacio:apellidosVacio,
        generoVacio:generoVacio,
        // nombreRegex:nombreRegex,
        
        // apellidosRegex:apellidosRegex,
       


    }

})();