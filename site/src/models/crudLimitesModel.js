var database = require("../database/config")

function editar(valorCPU, valorRAM, valorDisco, idInst) {
    var instrucao = `
    UPDATE Limites SET cpuPorcent = ${valorCPU}, ramPorcent = ${valorRAM}, discoPorcent = ${valorDisco} WHERE fkInstituicao = ${idInst};
    `
    return database.executar(instrucao);
}

function visualizar(id){
    var instrucao = `
    select TOP 1 cpuPorcent, ramPorcent,  discoPorcent from Limites where fkInstituicao = ${id};
    `
    return database.executar(instrucao);
}

module.exports = {
    editar,
    visualizar
};