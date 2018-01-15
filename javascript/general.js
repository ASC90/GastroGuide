///// Recoger todos los datos de un form
function serialize(form) {
    var data;
    if (!form || form.nodeName !== "FORM") {
        return;
    }
    var i, j, q = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
        if (form.elements[i].name === "") {
            continue;
        }
        //  console.log(form.elements[i].nodeName, form.elements[i].value, form.elements[i].type)

        switch (form.elements[i].nodeName.toUpperCase()) {
            case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                    case 'date':
                    case 'search':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (form.elements[i].checked) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }
                        break;
                }
                break;
            case 'file':
                break;
            case 'TEXTAREA':
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                }
                break;
        }
    }
    data = q.join("&");
    //console.log(q);
    return data;
}
///// Request de datos al servidor
function Ajax(method, url, onSuccess, pinfo) {
    let getData = new XMLHttpRequest();
    let info = pinfo || null;//email=e@e.es&pass=xxx
    getData.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (onSuccess) onSuccess(JSON.parse(this.responseText));
        }
    };
    getData.open(method, url, true);
    getData.send(info);
};

////// Se utiliza para concatenar el codigo HTML
function composicion(como, donde, lista) {
    let contenido = "";
    lista.forEach(composicion => {
        contenido += como.renderizar(composicion);
    })
    if (donde) { donde.innerHTML += contenido; }
};

///////Filtro de resultados en la barra del buscador
class BuscadorCocina {
    static renderizar(datos) {
        return `
       <option value="${datos}"> ${datos}</option>
    `;
    }
};
class BusquedaCocina {
    constructor() {
        this.listas = null; //esto sirve para indicar que no tiene nada.
    }
    obtenerDatos() {
        let buscando = document.getElementById("selc-cocina");
        Ajax("GET", "http://www.mocky.io/v2/5a5a49262e0000231971fb30", (datos) => {
            composicion(BuscadorCocina, buscando, datos.tipoDeCocina);
        });
    };
};
let buscandoCocina = new BusquedaCocina();
buscandoCocina.obtenerDatos();

////// Validacion direccion y fecha del buscador
function ValidationBusqueda(eFecha,eBusqueda) {
    var mql = window.matchMedia('screen and (min-width:320px) and (max-width:480px)');
    var ok = true;
    let adressval = /^[\s 0-9a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    if (adressval.test(buscador.buscar_adress.value) == false) {
        $(eFecha).html("");
        $(eBusqueda).html("Por favor introduzca una dirección valida");
        $(eBusqueda).attr('class', 'FormResError');
        ok = false;
    }
    if (!buscador.buscar_adress.value) {
        $(eFecha).html("");
        $(eBusqueda).html("Por favor introduzca una localidad");
        $(eBusqueda).attr('class', 'FormResError');
        ok = false;
    }
    if (!mql.matches && !buscador.fecha.value && buscador.buscar_adress.value && adressval.test(buscador.buscar_adress.value)) {
        $(eBusqueda).html("");
        $(eFecha).html("Por favor introduzca una fecha");
        $(eFecha).attr('class', 'FormResError');
        ok = false;
    }
    if (ok) {
        Ajax("POST", "http://www.mocky.io/v2/5a54dda32d000000315b1de3", function () { window.location.href = 'b_filtrar.html' }, serialize(document.getElementById("buscar_submit")));
    }
};
if (document.getElementById('buscar_submit')) {
    $('#btn_busqueda').click(function(env) {
        env.preventDefault();
        ValidationBusqueda("#errorfecha","#errorbusqueda");
    });
};
    
if (document.getElementById('selector-buscador-mvl')) {
    $('#selector-buscador-mvl').click(function (e) {
        e.preventDefault();
        $('#myModal').modal('show');
        let ciudad = $('#buscar_adress_mvl').val();
        $('#address_ModalLabel').html(ciudad);
        let mvlbsc = document.getElementById('modal-cocina');
        $.getJSON("http://www.mocky.io/v2/5a5a49262e0000231971fb30", (datos) => {
            composicion(BuscadorCocina, mvlbsc, datos.tipoDeCocina);
        });
    });
    $('#btn-mvl').click(function (ev) {
        $('#myModal').modal('hide');
        ev.preventDefault();
        ValidationBusqueda('#mvl_eFecha','#mvl_eBusqueda');
        $.post("http://www.mocky.io/v2/5a3b8528300000aa0e82d1e4", function () { window.location.href = 'b_filtrar.html' }, serialize(document.getElementById("form_buscar_submit")));
    },
    );
};
