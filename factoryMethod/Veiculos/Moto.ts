import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo{
    constructor(modelo: any){
        super();
        this.setModelo(modelo);
    }

    public andar(){
        console.log("A moto " + this.getModelo() + " está andando");
    }
}