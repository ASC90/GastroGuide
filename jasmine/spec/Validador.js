describe("Libreria validador", function () {

    it("si esta vacio devuelve objeto con error", function () {
        expect(Validador.restauranteVacio("")).toEqual({
            error: 'Por favor introduzca el nombre de su restaurante',
            class: 'alert alert-danger',
            status: false
        })
    })

    it("si paso nombre en letras devuelve null", function () {
        expect(Validador.nombreRegex("Anthony")).toEqual(null)
    })

    it("si paso numeros devuelve objeto con error", function () {
        expect(Validador.nombreRegex(123)).toEqual({
            error: "Su nombre no puede contener números o caracteres especiales",
            class: "alert alert-danger",
            status: false
        })
    })

    it("si paso numeros devuelve objeto con error", function () {
        expect(Validador.checked(123)).toEqual({
            error: "Su nombre no puede contener números o caracteres especiales",
            class: "alert alert-danger",
            status: false
        })
    })



})