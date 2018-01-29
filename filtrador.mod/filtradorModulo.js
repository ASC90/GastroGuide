var FiltradoResultados = function(){
    function filtro(data){
        $.grep( data, function( n, i ) {
            return n > 0;
        }, true );
    }
    function quedatos(){
        $.get("http://www.mocky.io/v2/5a6f2db530000053296fe514", function (data) {
                console.log(data);
            },
        );
        return {quedatos: filtro(data)}
    }
}();