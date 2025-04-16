export class Veiculo{
    private modelo: any;

    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo: any){
        this.modelo = modelo;
    }

    public andar(){
        console.log("O modelo " + this.modelo + " está andando...");
    }
}