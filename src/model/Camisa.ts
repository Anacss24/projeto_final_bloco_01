import { Produto } from "./Produto";

 export class Camisa extends Produto {
    private _tamanho: string;

    constructor(id: string,nome: string, preco: number, descricao: string, tamanho: string){
        super(id,nome, preco, descricao)
        this._tamanho = tamanho;
    }

    /**
     * Getter tamanho
     * @return {string}
     */
	public get tamanho(): string {
		return this._tamanho;
	}

    /**
     * Setter tamanho
     * @param {string} value
     */
	public set tamanho(value: string) {
		this._tamanho = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`\nTAMANHO: ${this._tamanho}`)
    }

}