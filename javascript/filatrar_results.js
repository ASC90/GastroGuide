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
class Buscador {
    constructor() {
        this.resultados = [];
    }
    obtenerData() {
        let fichas = document.getElementById("section-fichas");
        Ajax("GET", "http://www.mocky.io/v2/5a5355223000002b1e1ebebe", (data) => {
            data.forEach(restaurante => {
                fichas.innerHTML += Restaurante.renderizar(restaurante);
            });
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
let buscando = new Buscador();
buscando.obtenerData();
