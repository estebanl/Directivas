(function () {

    var module = angular.module('app');

    module.directive('itDireccion', function ($log) {
        return {
            templateUrl: "directiva/direccion.directiva.html",
            require: ['^form'],
            scope: {
                modelo: '=ngModel'
            },
            link: function (scope, element, attrs, controllers) {

             /*   scope.modelo = {
                    TipoVia: {},
                    NumVia: "",
                    PrefijoCudrante: "",
                    NumViaGeneradora: "",
                    PrefijoCudranteViaGeneradora: "",
                    NumeroPlaca: "",
                    Complemento: ""
                }*/

                //Verifica si el modelo ya contiene un direccion si es asi significa que se editara la direccion de lo contrario se creara
             /*   if (!angular.isUndefined(scope.modelo)) {
                    scope.direccion = scope.modelo;
                } else{
                    scope.direccion.TipoVia = scope.TipoVias[0];
                }
*/
                //Recibe el formulario del padre necesario para hacer validaciones
                scope.formulario = controllers[0];
                scope.numeral = '#';
                scope.guion = '-';
                scope.espacio = ' ';

                scope.TipoVias = [
                    { Guid: "1", Valor: "tipo" },
                    { Guid: "2", Valor: "Avenida Calle" },
                    { Guid: "3", Valor: "Autopista" },
                    { Guid: "4", Valor: "Avenida Carrera" },
                    { Guid: "5", Valor: "Calle" },
                    { Guid: "6", Valor: "Circunvalar" },
                    { Guid: "7", Valor: "Pasaje" },
                    { Guid: "8", Valor: "Paseo" },
                    { Guid: "9", Valor: "Peatonal" },
                    { Guid: "10", Valor: "Transversal" },
                    { Guid: "11", Valor: "Troncal" },
                    { Guid: "12", Valor: "Vía" },
                ];
            }
        }
    });

} ());