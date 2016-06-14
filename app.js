(function () {

    var module = angular.module('app', []);

    module.component('direccion', {
        templateUrl: 'direccion.html',
        controllerAs: 'vm',
        require: {
            formulario: '^form',
        },
        bindings: {
            modelo: '=',
            
        },
        controller: function ($log) {
            var vm = this;

            vm.$onInit = function () {
               // $log.info(vm.formulario.$name);
             //  $log.info(vm.formulario);
               $log.info(vm);
            };

            vm.nomenclatura = [
                "Avenida",
                "Avenida Calle",
                "Autopista",
                "Avenida Carrera",
                "Bulevar",
                "Calle",
                "Carrera",
                "Carretera",
                "Circular",
                "Circunvalar",
                "Cuentas Corridas",
                "Diagonal",
                "Pasaje",
                "Paseo",
                "Peatonal",
                "Transversal",
                "Troncal",
                "Vía"
            ];
            vm.guion = '-';
            vm.numeral = '#';
            vm.espacio = ' ';
            vm.modelo = "";
            vm.uno = "";
            vm.dos = "";
            vm.tres = "";
            vm.cuatro = "";
            vm.cinco = "";
            vm.seis = "";
            vm.siete = "";
            vm.ocho = ""

       //     vm.modelo = vm.uno + vm.espacio + vm.dos;

          
        }//Fin controller
    });

    module.component('contenedorDireccionUno', {
        templateUrl: 'contenedor.direccion.uno.html',
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.cliente = {
                nombre: "Cliente",
                direccion: "A "
            }
        }
    });

    module.component('contenedorDireccionDos', {
        templateUrl: 'contenedor.direccion.dos.html',
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.contacto = {
                nombre: "Contacto",
                direccion: "B "
            }
        }
    });

    module.component('contenedorDireccionEditar',{
        templateUrl:'contenedor.direccion.editar.html',
        controllerAs:'vm',
        controller: function ($log) {
            var vm = this;
            vm.contacto = {
                nombre: "Contacto editar",
                direccion: "Autopista 12 C sur 12 A 24 Piso 1",
                otradireccion: "Autopista 12 C sur 12 A 24 Piso 1"
            }
            
            vm.$onInit = function () {
                $log.info(vm);
            }
        }
    });

} ());