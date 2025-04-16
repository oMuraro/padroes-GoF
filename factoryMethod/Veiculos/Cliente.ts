import { FactoryVeiculo } from "./FactoryVeiculo";
import { Veiculo } from "./Veiculo";

const veiculo = FactoryVeiculo.factoryMethod("Ka", "Carro");
veiculo?.andar();