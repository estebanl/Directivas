(function () {

    var module = angular.module('app');

    module.component('contenedorSelect', {
        templateUrl: 'selectBusqueda/contenedor.select.html',
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.ciudades = [
                { Guid: "1", Valor: "Cali" },
                { Guid: "2", Valor: "Bogota" },
                { Guid: "3", Valor: "Barranquilla" },
                { Guid: "4", Valor: "Cartagena" },
                { Guid: "5", Valor: "Pereira" }
            ];

            vm.clientes = [
                { Guid: "1", Valor: "Juan" },
                { Guid: "2", Valor: "Laura" },
                { Guid: "3", Valor: "Camila" },
                { Guid: "4", Valor: "Ana" },
                { Guid: "5", Valor: "Maria" },
                { Guid: "6", Valor: "Carolina" },
                { Guid: "7", Valor: "Juana" },
                { Guid: "8", Valor: "Martha" },
                { Guid: "9", Valor: "Gloria" },
                { Guid: "10", Valor: "Pedro" }
            ];

            vm.seleccionados = [];
            vm.seleccionadosCliente = [];
        }
    });

} ());