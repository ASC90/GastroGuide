function Ajax(method, url, onSuccess) {
    let getData = new XMLHttpRequest();
    getData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            onSuccess(JSON.parse(this.responseText));
        }
    };

    getData.open(method, url, true);
    getData.send();
}
class Buscador{
    constructor(){
        this.resultados = [];
    }
    obtener
}

class Martillo{
    constructor(pPeso){
        this.peso= pPeso;
    }
    golpear(){
        
    }
}