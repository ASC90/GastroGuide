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
    <div class="contenedor-fichas">
        <div class="img-ficha">
            <img src="${data.foto}" alt="">
        </div>
        <div class="text-ficha">
            <label>
                <a href="${data.link}">
                    <h2>${data.nombre}</h2>
                </a>
                <br>${data.direccion}</label>
        </div>

        <div class="opiniones-nota">
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
    static renderizar(datos) {
        return `
        <input type="checkbox" name="tipo-cocina" value="${datos}">${datos}
        <br>
    `;
    }
};
class Filtrado {
    constructor() {
        this.listas = null; //esto sirve para indicar que no tiene nada.
    }
    obtenerDatos() {
        let filtros = document.getElementById("chk-tipo-cocina");
        Ajax("GET", "http://www.mocky.io/v2/5a3b8528300000aa0e82d1e4", (datos) => {
            composicion(Cocina, filtros, datos.tipoDeCocina);
        });
    };
};

/// FILTRO DE AMBIENTE
class FiltroAmbientes {
    obtenerAmbientes() {
        let filtros = document.getElementById("chk-ambientes");
        Ajax("GET", "http://www.mocky.io/v2/5a3b8525300000e40e82d1e3", (datos) => {
            let contenido = "";
            datos.tipoDeAmbiente.forEach(ambiente => {
                contenido += Ambientes.renderizar(ambiente);
            });
            filtros.innerHTML += contenido
        });
    };
};

class Ambientes {
    static renderizar(datos) {
        return `
       <input type="checkbox" name="ambientes" value="${datos}">${datos}
       <br>
    `;
    }
};

//// LLAMADAS
let filtrando = new Filtrado();
filtrando.obtenerDatos();
let buscando = new Buscador();
buscando.obtenerData();
let ambientando = new FiltroAmbientes();
ambientando.obtenerAmbientes();


