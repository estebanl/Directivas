(function () {

    var module = angular.module('app');

    module.factory('itUtilidades', function () {

        function encontrarIndex(obj, key, value) {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i][key] == value) {
                    return i;
                }
            }
            return null;
        };

        function eliminarElemento(arreglo, objeto) {
            arreglo = arreglo.filter(function (nuevoArreglo) {
                return nuevoArreglo != objeto;
            });
        };

        return {
            encontrarIndex: encontrarIndex,
            eliminarElemento: eliminarElemento
        }
    })

} ());