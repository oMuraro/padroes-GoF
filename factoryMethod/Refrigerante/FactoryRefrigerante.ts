import { Fanta } from "./Fanta";
import { Coca } from "./Coca";

export class FactoryRefrigerante{
    static factoryMethod(marca: any){
        if(marca === "Coca"){
            return new Coca(marca);
        } else {
            return new Fanta(marca);
        }
    }
}