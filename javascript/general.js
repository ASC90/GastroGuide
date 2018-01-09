///// Request de datos al servidor
function Ajax(method, url, onSuccess) {
    let getData = new XMLHttpRequest();
    getData.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            onSuccess(JSON.parse(this.responseText));
        }
    };
    getData.open(method, url, true);
    getData.send();
};

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
    
    var ok=true;
    let adressval = /^[\s 0-9a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;
    if (adressval.test(buscador.buscar_adress.value) == false) {
        document.getElementById("errorbusqueda").innerText = "Por favor introduzca una dirección valida";
        document.getElementById("errorbusqueda").className = "FormResError";
        ok=false;
    }

    if (!buscador.buscar_adress.value) {
        document.getElementById("errorbusqueda").innerText = "Por favor introduzca una localidad";
        document.getElementById("errorbusqueda").className = "FormResError";
        ok=false;
    }

    if (!buscador.fecha.value && buscador.buscar_adress.value) {
        document.getElementById("errorbusqueda").innerText = "";
        document.getElementById("errorfecha").innerText = "Por favor introduzca una fecha";
        document.getElementById("errorfecha").className = "FormResError";
        ok=false;
    }
    
    if (ok) {
        window.location.href = 'filtrar.html';
    }
};
document.getElementById('buscar_submit').onsubmit = ValidationBusqueda;
