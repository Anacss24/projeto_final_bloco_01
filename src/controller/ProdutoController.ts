import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    
    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0
    
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log("Produto cadastrado com sucesso!")
    }
    listarTodos(): void {
       for( let produto of this.listaProdutos){
          produto.visualizar();
       }
    }
    procurarPorId(id: number): void {
       let buscaProduto = this.buscarNoArray(id);
        if(buscaProduto !== null)
            buscaProduto.visualizar();
        else
            console.log("\n O Produto não foi encontrado!")
    }

    atualizar(produto: Produto): void {
      let buscaProduto = this.buscarNoArray(produto.id)
      if(buscaProduto !== null){
        this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
        console.log("\nO produto foi atualizado!")
      } else {
        console.log("\nO Produto não foi encontrado!");
      }
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id)
        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
            console.log("\nO produto foi excluído!")
        } else {
            console.log("\nO Produto não foi encontrado!");
        }
    }

    public buscarNoArray(id: number): Produto | null {
        for(let produto of this.listaProdutos){
            if(produto.id == id)
                return produto;
        }

        return null;
    }

    public gerarId(): number {
        return ++ this.id
    }

}