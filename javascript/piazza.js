
///////CONSTRUCTOR
function piazzaController() {
   this.ficha = {};
}
///////METODO1 CONSTRUCTOR
piazzaController.prototype.getData = function() {
    
var url = "http://www.mocky.io/v2/5a3ba376300000181682d290";
var req = new XMLHttpRequest();

req.open("GET", url);
var self = this; 

req.onload = function () {

    if (this.status == 200) {
        console.log("Exito", this.nombre);
        self.ficha = JSON.parse(this.response);

       
    }
    else {}
    // localData.pintar (document.getElementById(id_en_html))
};

req.send();

}
//////////////////////////////////////////////////////////////////////////////////////////////
piazzaController.prototype.pintar = function(container) {

titulo.innerText = this.ficha.nombre;

container.appendChild(titulo);
    
}




//////////INICIALIZAR VARIABLE OBJETO Y HACER EL METODO
var localData = new piazzaController();
localData.getData();


