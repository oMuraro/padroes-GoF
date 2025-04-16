import { FactoryRefrigerante } from "./FactoryRefrigerante";
import { Refrigerante } from "./Refrigerante";

const refrigerante = FactoryRefrigerante.factoryMethod("Fanta");
refrigerante?.fazerRefri();