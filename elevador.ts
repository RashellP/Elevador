class Elevador{
    private pisosTotales :number;
    private pisoActual:number;
    private estadoPuerta:string;

    constructor(pisosTotales:number){
        this.estadoPuerta = "Cerrada";
        this.pisosTotales = pisosTotales;
        this.pisoActual = 1;
    }
    public getEstadoPuerta():string{
        return this.estadoPuerta;
    }
    public getpisosTotales():number{
        return this.pisosTotales;
    }
    public getPisoActual():number{
        return this.pisoActual;
    }
    public abrirPuerta(){
        if(this.estadoPuerta == "Cerrada"){
            this.estadoPuerta = "Abierta";
            console.log(`Puerta Abierta`);
        }
        else{
            console.log(`La puerta está abierta`);
        }
    }
    public cerrarPuerta(){
        if(this.estadoPuerta == "Abierta"){
            this.estadoPuerta = "Cerrada";
            console.log(`Puerta Cerrada`);
        }
        else{
            console.log(`La puerta está cerrada`);
        }
    }
    public subir(){
        this.pisoActual++;
    }
    public bajar(){
        this.pisoActual--;
    }
    public piso(pisoDestino:number){
        if((this.getEstadoPuerta() == "Cerrada") &&! (pisoDestino > this.pisosTotales) &&! (pisoDestino < 1)){
            if(pisoDestino < this.pisoActual){
                while(this.pisoActual != pisoDestino){
                    this.bajar();
                } 
            }
            if(pisoDestino > this.pisoActual){
                while(this.pisoActual != pisoDestino){
                    this.subir();
                }
            }
            console.log(`Favor de esperar un momento c:`);            
        }
    }
}
var elevator = new Elevador(15);
console.log(elevator.getpisosTotales());
console.log(elevator.getPisoActual());
console.log(elevator.getEstadoPuerta());
console.log(elevator.abrirPuerta());
console.log(elevator.cerrarPuerta());
console.log(elevator.cerrarPuerta());
console.log(elevator.piso(7));
console.log(`Se ha llegado al piso: ${elevator.getPisoActual()}`);