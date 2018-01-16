//// RESULTADO DE LOS RESTAURANTES
class Buscador {
    constructor() {
        this.resultados = [];
    }
    obtenerData() {
        let fichas = document.getElementById("section-fichas");
        let okUrl = "http://www.mocky.io/v2/5a5355223000002b1e1ebebe";
        let badUrl = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
        Ajax("GET", okUrl, (data) => {
            let contenido = "";
            data.forEach(restaurante => {
                contenido += Restaurante.renderizar(restaurante);
            });
            fichas.innerHTML += contenido;
        },null,"fail-fichas");
    }
};

class Restaurante {
    static renderizar(data) {
        return `
    <div class="row">
        <div class="col-12 col-md-3 mt-1 mb-1 img-ficha">
            <img src="${data.foto}" alt="">
        </div>
        <div class="col-8 col-md-4 mt-1 mb-1 text-ficha">
            <label>
                <a href="b_${data.link}">
                    <h2>${data.nombre}</h2>
                </a>
                <br>${data.direccion}</label>
        </div>
        <div class="col-4 col-md-3 mt-1 mb-1 opiniones-nota">
            <label>
                <h2>${data.nota}</h2>
                <br>${data.opiniones} Opiniones</label>
        </div>
    </div>
    `;
    }
};

/// FILTRO DE COCINA
class Cocina {
    static renderizar(datos, index) {
        return `
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck${index}" name="tipo-cocina" value="${datos[index]}">
            <label class="custom-control-label" for="customCheck${index}">${datos[index]}</label>
        </div>
    `
            /* <input type="checkbox" name="tipo-cocina" value="${datos}">${datos}
             <br>*/
            ;
    }
};
class Filtrado {
    constructor() {
        this.listas = null; //esto sirve para indicar que no tiene nada.
    }
    obtenerDatos() {
        let filtros = document.getElementById("chk-tipo-cocina");
        let okUrl = "http://www.mocky.io/v2/5a5a49262e0000231971fb30";
        let badUrl = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
        $.get(okUrl, (datos) => {
            let contenido = "";
            for (let index = 0; index < datos.tipoDeCocina.length; index++) {
                contenido += Cocina.renderizar(datos.tipoDeCocina, index);
            };
            filtros.innerHTML += contenido
        })
        .fail(function(jqXHR, textStatus, errorThrown){
            $('#chk-tipo-cocina').html("Lo sentimos ha habido un error en el servidor, por favor pruebe más tarde");
            $('#chk-tipo-cocina').attr('class', 'text-danger');
        });
    };
};

/// FILTRO DE AMBIENTE
class FiltroAmbientes {
    obtenerAmbientes() {
        let filtros = document.getElementById("chk-ambientes");
        let okUrl = "http://www.mocky.io/v2/5a3b8525300000e40e82d1e3";
        let badUrl = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
        $.get(badUrl, (datos) => {
            let contenido = "";
            for (let index = 0; index < datos.tipoDeAmbiente.length; index++) {
                contenido += Ambientes.renderizar(datos.tipoDeAmbiente, index);
            };
            filtros.innerHTML += contenido
        })
        .fail(function(jqXHR, textStatus, errorThrown){
            $('#chk-ambientes').html("Lo sentimos ha habido un error en el servidor, por favor pruebe más tarde");
            $('#chk-ambientes').attr('class', 'text-danger');
        });
    };
};

class Ambientes {
    static renderizar(datos, index) {
        return `
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="amb_customCheck${index}" name="ambientes" value="${datos[index]}">
            <label class="custom-control-label" for="amb_customCheck${index}">${datos[index]}</label>
        </div>
    `;
    }
};
////// Enviar datos filtro

$('#btn-filtrar').click(function (e) {
    e.preventDefault();
    let s1 = serialize(document.getElementById('chk-tipo-cocina'));
    let s2 = serialize(document.getElementById('chk-ambientes'));
    let s3 = document.getElementById('precioAlto').name + ":" + document.getElementById('precioAlto').value;
    let s4 = document.getElementById('precioBajo').name + ":" + document.getElementById('precioBajo').value;
    let s5 = document.getElementById('notaOpinion').name + ":" + document.getElementById('notaOpinion').value;
    let okUrl = "http://www.mocky.io/v2/5a54dda32d000000315b1de3";
    let badUrl = "http://www.mocky.io/v2/5a5cb2262e0000e3109f83d9";
    Ajax("POST", badUrl , function () {
        $("#section-fichas").html("");
    let buscando = new Buscador();
        buscando.obtenerData();
    }, (s1 + s2 + s3 + s4 + s5),"errorfiltro");

});

////// AJUSTE FILTROS MEDIAQUERY
if (window.matchMedia('screen and (min-width:320px) and (max-width:480px)').matches) {
    $('#accordion a').attr('class', 'collapsed text-dark');
    $('.show').attr('class', 'collapse')
};

///////RANGE SLIDER DE PRECIOS & NOTA
function rangeSlider(que, donde, valor) {
    $(que).on('change', function () {
        $(donde).html($(this).val() + valor);
    });
}

//// LLAMADAS 
let filtrando = new Filtrado();
filtrando.obtenerDatos();
let buscando = new Buscador();
buscando.obtenerData();
let ambientando = new FiltroAmbientes();
ambientando.obtenerAmbientes();
rangeSlider('#precioAlto', '#rangeAlto', '€');
rangeSlider('#precioBajo', '#rangeBajo', '€');
rangeSlider('#notaOpinion', '#rangeNota', "");


