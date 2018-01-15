//// RESULTADO DE LOS RESTAURANTES
class Buscador {
    constructor() {
        this.resultados = [];
    }
    obtenerData() {
        let fichas = document.getElementById("section-fichas");
        Ajax("GET", "http://www.mocky.io/v2/5a5355223000002b1e1ebebe", (data) => {
            let contenido = "";
            data.forEach(restaurante => {
                contenido += Restaurante.renderizar(restaurante);
            });
            fichas.innerHTML += contenido;
        });
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
                <a href="${data.link}">
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
    static renderizar(datos,index) {
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
        $.get("http://www.mocky.io/v2/5a5a49262e0000231971fb30", (datos) => {
            let contenido = "";
            for(let index=0; index< datos.tipoDeCocina.length; index++){
                contenido += Cocina.renderizar(datos.tipoDeCocina,index);
            };
            filtros.innerHTML += contenido
        });
    };
};

/// FILTRO DE AMBIENTE
class FiltroAmbientes {
    obtenerAmbientes() {
        let filtros = document.getElementById("chk-ambientes");
        $.get("http://www.mocky.io/v2/5a3b8525300000e40e82d1e3", (datos) => {
            let contenido = "";
            for(let index=0; index< datos.tipoDeAmbiente.length; index++){
                contenido += Ambientes.renderizar(datos.tipoDeAmbiente,index);
            };
            filtros.innerHTML += contenido
        });
    };
};

class Ambientes {
    static renderizar(datos,index) {
        return `
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="amb_customCheck${index}" name="ambientes" value="${datos[index]}">
            <label class="custom-control-label" for="amb_customCheck${index}">${datos[index]}</label>
        </div>
    `;
    }
};
////// AJUSTE FILTROS MEDIAQUERY
if(window.matchMedia('screen and (min-width:320px) and (max-width:480px)').matches){
$('#accordion a').attr('class' , 'collapsed text-dark');
$('.show').attr('class' , 'collapse')
};

///////RANGE SLIDER DE PRECIOS & NOTA
function rangeSlider(que,donde,valor){
$(que).on('change', function () {
    $(donde).html($(this).val()+valor);
});}

//// LLAMADAS 
let filtrando = new Filtrado();
filtrando.obtenerDatos();
let buscando = new Buscador();
buscando.obtenerData();
let ambientando = new FiltroAmbientes();
ambientando.obtenerAmbientes();
rangeSlider('#precioAlto','#rangeAlto','€');
rangeSlider('#precioBajo','#rangeBajo','€');
rangeSlider('#notaOpinion','#rangeNota',"");


