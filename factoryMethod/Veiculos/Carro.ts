import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{
    constructor(modelo: any){
        super();
        this.setModelo(modelo)
    }

    public andar(){
        console.log("O carro " + this.getModelo() + " está andando");
    }
}