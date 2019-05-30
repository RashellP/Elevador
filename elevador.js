var Elevador = /** @class */ (function () {
    function Elevador(pisosTotales) {
        this.estadoPuerta = "Cerrada";
        this.pisosTotales = pisosTotales;
        this.pisoActual = 1;
    }
    Elevador.prototype.getEstadoPuerta = function () {
        return this.estadoPuerta;
    };
    Elevador.prototype.getpisosTotales = function () {
        return this.pisosTotales;
    };
    Elevador.prototype.getPisoActual = function () {
        return this.pisoActual;
    };
    Elevador.prototype.abrirPuerta = function () {
        if (this.estadoPuerta == "Cerrada") {
            this.estadoPuerta = "Abierta";
            console.log("Puerta Abierta");
        }
        else {
            console.log("La puerta est\u00E1 abierta");
        }
    };
    Elevador.prototype.cerrarPuerta = function () {
        if (this.estadoPuerta == "Abierta") {
            this.estadoPuerta = "Cerrada";
            console.log("Puerta Cerrada");
        }
        else {
            console.log("La puerta est\u00E1 cerrada");
        }
    };
    Elevador.prototype.subir = function () {
        this.pisoActual++;
    };
    Elevador.prototype.bajar = function () {
        this.pisoActual--;
    };
    Elevador.prototype.piso = function (pisoDestino) {
        if ((this.getEstadoPuerta() == "Cerrada") && !(pisoDestino > this.pisosTotales) && !(pisoDestino < 1)) {
            if (pisoDestino < this.pisoActual) {
                while (this.pisoActual != pisoDestino) {
                    this.bajar();
                }
            }
            if (pisoDestino > this.pisoActual) {
                while (this.pisoActual != pisoDestino) {
                    this.subir();
                }
            }
            console.log("Favor de esperar un momento c:");
        }
    };
    return Elevador;
}());
var elevator = new Elevador(15);
console.log(elevator.getpisosTotales());
console.log(elevator.getPisoActual());
console.log(elevator.getEstadoPuerta());
console.log(elevator.abrirPuerta());
console.log(elevator.cerrarPuerta());
console.log(elevator.cerrarPuerta());
console.log(elevator.piso(7));
console.log("Se ha llegado al piso: " + elevator.getPisoActual());
