(function () {

    var module = angular.module('app');

    module.component('contenedorDirectiva', {
        templateUrl: 'directiva/contenedor.directiva.html',
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.contacto = {
                nombre: 'Contacto',
                direccion: {}
            };
        }
    });

    module.component('contenedorEditar', {
        templateUrl: 'directiva/contenedor.directiva.editar.html',
        controllerAs: 'vm',
        controller: function (data,$log) {
            var vm = this;

            vm.cliente = {
                nombre: 'Cliente',
                direccion: {
                    TipoVia: { Guid: "6", Valor: "Circunvalar" },
                    NumVia: "12c",
                    PrefijoCuadrante: "Sur",
                    NumViaGeneradora: "14f",
                    PrefijoCudranteViaGeneradora: "Bis",
                    NumeroPlaca: "22a",
                    Complemento: "Ofic 201"
                }
            };

            vm.$onInit = function(){
                data.getData().then(function(data){
                    vm.cliente.direccion = data.data;
                    $log.info(data.data);
                });
            };
        }
    });
} ());