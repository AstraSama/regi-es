const prompt = require("prompt-sync")();

const CREATE = () => {
    let cep = {};
    
    do{
        cep.cidade = prompt("Nome da cidade: ");
        
        if(
            !isNaN(cep.cidade) ||
            cep.cidade == "" 
        ) {
            cep.cidade = "";

        }
    } while(!cep.cidade);

    do{
        cep.estado = prompt("Nome do Estado: ");

        if(
            !isNaN(cep.estado) ||
            cep.estado == "" 
        ) {
            cep.estado = "";

        }
    } while(!cep.estado);

    do{
        cep.pais = prompt("Nome do país: ");

        if(
            !isNaN(cep.pais) ||
            cep.pais == "" 
        ) {
            cep.pais = "";

        }
    } while(!cep.pais);

    return cep;
}

const UPDATE = (data = []) => {
    let aux, aux2, aux3;

    do{
        let resposta = prompt("Qual cidade deseja atualizar: ");
        
        for(let i = 0; i < data.length; i++) {
            if(data[i].cidade == resposta) {
                aux2 = 1;

            }
        }

        if(aux2) {
            for(let i = 0; i < data.length; i++) {
                if(data[i].cidade == resposta) {
                    console.log(data[i], ` número ${i}`);

                }
            }
            
            do{
                resposta = parseInt(prompt("Qual índice deseja atualizar: "));

                if(
                    isNaN(resposta) ||
                    resposta < 0 ||
                    resposta > data.length
                ) {
                    resposta = -1;

                }

            } while(resposta < 0);

            aux3 = CREATE();

            if(CHECK(data, aux3)) {
                console.log("Local já registrado");

            } else {
                data.splice(resposta, 1, aux3);
                
            }

            aux = 1;

        } else {
            console.log("Digite uma opção válida.");
            
        }
    } while(!aux);

    return data;
}

const DELETE = (data = []) => {
    let aux, aux2;

    do{
        let resposta = prompt("Qual cidade deseja remover: ");
        
        for(let i = 0; i < data.length; i++) {
            if(data[i].cidade == resposta) {
                aux2 = 1;

            }
        }

        if(aux2) {
            for(let i = 0; i < data.length; i++) {
                if(data[i].cidade == resposta) {
                    console.log(data[i], ` número ${i}`);

                }
            }
            
            do{
                resposta = parseInt(prompt("Qual índice deseja remover: "));

                if(
                    isNaN(resposta) ||
                    resposta < 0 ||
                    resposta > data.length
                ) {
                    resposta = -1;

                }

            } while(resposta < 0);

            data.splice(resposta, 1);
            aux = 1;

        } else {
            console.log("Digite uma opção válida.");
            
        }
    } while(!aux);

    return data;
}

const CHECK = (data = [], cep = {}) => {
    let check;

    for(let i = 0; i < data.length; i++) {
        if(
            data[i].cidade == cep.cidade && 
            data[i].estado == cep.estado &&
            data[i].pais == cep.pais
        ) {
            check = 1;

        }
    }

    if(check) {
         return true;

    } else {
        return false;

    }
}

module.exports = {
    CREATE,
    UPDATE,
    DELETE,
    CHECK
}