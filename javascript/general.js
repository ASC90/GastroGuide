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
        console.log(form.elements[i].nodeName, form.elements[i].value, form.elements[i].type)

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
    console.log(q);
    return data;
}
///// Request de datos al servidor
function Ajax(method, url, onSuccess, pinfo) {
    let getData = new XMLHttpRequest();
    let info = pinfo || null;//email=e@e.es&pass=xxx
    getData.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if(onSuccess) onSuccess(JSON.parse(this.responseText));
        }
    };
    getData.open(method, url, true);
    getData.send(info);
};
////// Envio de datos de la barra de busqueda




////// Se utiliza para concatenar el codigo HTML
function composicion(como, donde, lista) {
    let contenido = "";
    lista.forEach(composicion => {
        contenido += como.renderizar(composicion);
    })
    donde.innerHTML += contenido;
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
        Ajax("GET", "http://www.mocky.io/v2/5a3b8528300000aa0e82d1e4", (datos) => {
            composicion(BuscadorCocina, buscando, datos.tipoDeCocina);
        });
    };
};
let buscandoCocina = new BusquedaCocina();
buscandoCocina.obtenerDatos();

////// Validacion direccion y fecha del buscador
function ValidationBusqueda(evento) {
    evento.preventDefault();
    var mql = window.matchMedia('screen and (min-width:320px) and (max-width:480px)');
    var ok = true;
    let adressval = /^[\s 0-9a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    if (adressval.test(buscador.buscar_adress.value) == false) {
        document.getElementById("errorbusqueda").innerText = "Por favor introduzca una dirección valida";
        document.getElementById("errorbusqueda").className = "FormResError";
        ok = false;
    }

    if (!buscador.buscar_adress.value) {
        document.getElementById("errorbusqueda").innerText = "Por favor introduzca una localidad";
        document.getElementById("errorbusqueda").className = "FormResError";
        ok = false;
    }

    if (!mql.matches && !buscador.fecha.value && buscador.buscar_adress.value) {
        document.getElementById("errorbusqueda").innerText = "";
        document.getElementById("errorfecha").innerText = "Por favor introduzca una fecha";
        document.getElementById("errorfecha").className = "FormResError";
        ok = false;
    }

    if (ok) {
        Ajax("POST", "http://www.mocky.io/v2/5a54dda32d000000315b1de3", function(){window.location.href = 'filtrar.html'} , serialize(document.getElementById("buscar_submit")));
    }
};

document.getElementById('buscar_submit').onsubmit = ValidationBusqueda;
