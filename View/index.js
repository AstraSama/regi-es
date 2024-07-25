const prompt = require("prompt-sync")();
const {CREATE, UPDATE, DELETE, CHECK} = require("../Model/cadastro_fun.js");

let local = [];
let saida;

do{
    let entrada = prompt("'ADD', 'LS', 'UP', 'RM', 'Q', Resposta: ").toLowerCase().trim();
    let aux = {};

    switch (entrada) {
        case "add":
            aux = CREATE();

            if(CHECK(local, aux)) {
                console.log("Local já registrado");

            } else {
                local.push(aux);

            }
            
            aux = "";
            entrada = "";

        break;

        case "ls":
            console.log("Lista Atual: ", local);
            entrada = "";

        break;

        case "up":
            local = UPDATE(local);

            aux = "";
            entrada = "";
            
        break;

        case "rm":
            local = DELETE(local);
            entrada = "";

        break;

        case "q":
            saida = true;

        break;

        default:
            console.log("Escreva uma opção válida.");
            entrada = "";

    }
} while(!saida);
