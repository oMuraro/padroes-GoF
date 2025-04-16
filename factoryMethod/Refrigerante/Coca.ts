import { Refrigerante } from "./Refrigerante";

export class Coca extends Refrigerante{
    constructor(marca: any){
        super();
        this.setMarca(marca); 
    }

    public fazerRefri(){
        console.log("Fazendo o refrigerante " + this.getMarca());
    }
}