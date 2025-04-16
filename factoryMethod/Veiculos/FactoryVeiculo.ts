import { Carro } from "./Carro";
import { Moto } from "./Moto";

export class FactoryVeiculo{
    static factoryMethod(modelo: any, tipo: any){
        switch(tipo){
            case "Carro":
                return new Carro(modelo);
            case "Moto":
                return new Moto(modelo);
            default:
                return null;
        }
    }
}