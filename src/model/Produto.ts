export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _preco: number;
    private _descricao: string;


	constructor(id: number, nome: string, preco: number, descricao: string) {
		this._id = id;
		this._nome = nome;
		this._preco = preco;
		this._descricao = descricao;
	}

    /**
     * Getter id
     * @return {string }
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Getter descricao
     * @return {string}
     */
	public get descricao(): string {
		return this._descricao;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: number ) {
		this._id = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}

    /**
     * Setter descricao
     * @param {string} value
     */
	public set descricao(value: string) {
		this._descricao = value;
	}

    public visualizar(): void {
        console.log("*******************************")
        console.log("        Dados do Produto       ")
        console.log("*******************************")
        console.log(`\nID: ${this._id}              `)
        console.log(`\nNOME: ${this._nome}          `)
        console.log(`\nPREÇO: ${this._preco}        `)
        console.log(`\nDESCRIÇÃO: ${this._descricao}`)
    }

}