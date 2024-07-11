import readlinesync = require("readline-sync");
import { Camisa } from "./src/model/Camisa";

export function Menu() {

    let opcao: number;

    const c1 = new Camisa("1","Camisa Regata", 49.90, "Camisa na cor Verde Feminina", "P")

    const c2 = new Camisa("2","Camisa Meia Longa", 79.90, "Camisa na cor Branca Feminina", "G")

    c1.visualizar();
    c2.visualizar();

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
        console.log("    5 - Deletar 0 Produto             ");
        console.log("    6 - Sair                          ");
        console.log("                                      ");
        console.log("**************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        switch(opcao){
            case 1:
                console.log("\nCadastrar Produto")
                keyPress();
                break;
            case 2:
                console.log("\nListar todos os Produtos")
                keyPress();
                break;
            case 3:
                console.log("\nListar Produto pelo ID ")
                keyPress();
                break;
            case 4:
                console.log("\nAtualizar o Produto")
                keyPress();
                break;
            case 5:
                console.log("\nDeletar o Produto")
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