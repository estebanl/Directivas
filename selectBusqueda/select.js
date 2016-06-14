(function () {

    var module = angular.module('app');

    module.directive('itSelect', function ($log, itUtilidades) {
        return {
            templateUrl: 'selectBusqueda/select.html',
            scope: {
                modelo: "=ngModel",
                datos: "=",
            },
            link: function (scope, element, attrs, controllers) {
           
                //Muestra u oculta las opciones
                scope.mostrar = false;

                scope.agregar = function (objeto) {
                    //Conuslta el servivio de utilidades para verificar si existe el objeto que se piensa agregar
                    var index = itUtilidades.encontrarIndex(scope.modelo, 'Guid', objeto.Guid);
    
                    //Si el index es null el objeto no existe y lo agrega al modelo seguido elimina el objeto del arreglo de datos
                    if (index == null) {
                        scope.modelo.push(objeto);
                        scope.datos = scope.datos.filter(function (arreglo) {
                           return arreglo != objeto; 
                        });
                    }
                };

                scope.eliminar = function (objeto) {
                    //Hace lo apuesto al metodo agregar
                    scope.modelo = scope.modelo.filter(function (arreglo) {
                        return arreglo != objeto;
                    });
                    scope.datos.push(objeto);
                }
            }
        }
    });
} ());