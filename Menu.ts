import readlinesync = require("readline-sync");
import { Roupa } from "./src/model/Roupa";
import { ProdutoController } from "./src/controller/ProdutoController";

export function Menu() {

    let opcao, preco, numero: number;
    let nome, descricao, tamanho: string;

    const produtoController: ProdutoController = new ProdutoController();

    while(true) {

        console.log("**************************************");
        console.log("                                      ");
        console.log("             Modas Ana                ");
        console.log("                                      ");
        console.log("**************************************");
        console.log("                                      ");
        console.log("    1 - Cadastrar Produto             ");
        console.log("    2 - Listar Todos os Produtos      ");
        console.log("    3 - Listar Produto pelo ID        ");
        console.log("    4 - Atualizar o Produto           ");
        console.log("    5 - Deletar o Produto             ");
        console.log("    6 - Sair                          ");
        console.log("                                      ");
        console.log("**************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        switch(opcao){
            case 1:
                console.log("\nCadastrar Produto")
                
                console.log("Digite o nome do Produto: ")
                nome = readlinesync.question("");

                console.log("Digite o preço do Produto: ")
                preco = readlinesync.questionFloat("");

                console.log("Digite a descrição do Produto: ")
                descricao = readlinesync.question("");

                console.log("Digite o tamanho do Produto: ")
                tamanho = readlinesync.question("");

                produtoController.cadastrar(new Roupa(produtoController.gerarId(), nome, preco, descricao,tamanho));

                keyPress();
                break;
            case 2:
                console.log("\nListar todos os Produtos")

                produtoController.listarTodos();

                keyPress();
                break;
            case 3:
                console.log("\nListar Produto pelo ID ");

                console.log("Digite o ID do Produto: ");
                numero = readlinesync.questionInt("");

                produtoController.procurarPorId(numero);
                keyPress();
                break;
            case 4:
                console.log("\nAtualizar o Produto")

                console.log("Digite o ID do Produto: ")
                numero = readlinesync.questionInt("")

                let produto = produtoController.buscarNoArray(numero)

                if(numero !== null){
                    console.log("Digite o nome do Produto: ")
                    nome = readlinesync.question("");
    
                    console.log("Digite o preço do Produto: ")
                    preco = readlinesync.questionFloat("");
    
                    console.log("Digite a descrição do Produto: ")
                    descricao = readlinesync.question("");
    
                    console.log("Digite o tamanho do Produto: ")
                    tamanho = readlinesync.question("");
                    
                    produtoController.atualizar(new Roupa(numero, nome, preco, descricao, tamanho));

                } else {
                    console.log("\n O Produto não foi encontrado! ")
                }
                keyPress();
                break;
            case 5:
                console.log("\nDeletar o Produto")

                console.log("Digite o ID do Produto: ")
                numero = readlinesync.questionInt("")

                produtoController.deletar(numero);
                keyPress();
                break;

            case 6:
                sobre()
                keyPress();
                break;
            default:
                console.log("\nOpção inválida")
                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n***************************************************************")
    console.log(" Modas Ana - Refletindo Elegância em Cada Estilo")
    console.log("\n***************************************************************")
    console.log("Projeto Desenvolvido por: Ana Claudia")
    console.log("github.com/https://github.com/Anacss24/projeto_final_bloco_01");
    console.log("***************************************************************")
    process.exit(0);
}

function keyPress(): void {
    console.log("Pressione enter para continuar ...")
    readlinesync.prompt();
}

Menu();