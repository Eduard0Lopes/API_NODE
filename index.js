// Instalando o pacote NODEMON "CMD: yarn global add nodemon", ele atualiza sozinho a api.

const express = require('express'); // Importação do framework EXPRESS, que nos ajuda a criar uma API simples e organizada
const server = express(); // Aqui nós criamos um "servidor" para definir as rotas e as funcionalidades do framework utilziado
const filmes = require('./src/data/filmes.json')
server.get('/filmes', (req,res) => {
    return res.json(filmes)
});
// Quando alguém acessar essa rota, o servidor vai responder com um JSON contendo a chave
// REQ e RES: REQ representa a requisição feita pelo cliente, e RES representa a resposta que o servidor enviará de volta. Nesse caso, a resposta é um JSON.
server.listen(3000, () => {
    console.log('Servidor está funcionando')
});