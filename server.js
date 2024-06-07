const express = require('express');
const cors = require('cors');

const createServer = (port) => {
    const app = express();
    app.use(cors());
    
    let arquivos = ['.rar', '.txt', '.rar', '.doc', '.rar5'];
    
    app.get('/verificarArquivos', (req, res) => {
        try {
            res.status(200).json({ arquivos });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar os dados: ' + error.message });
        }
    });
    
    app.post('/adicionarArquivo', (req, res) => {
        try {
            arquivos.push('.rar');
            res.status(200).json({ message: 'Arquivo adicionado com sucesso.' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao adicionar arquivo: ' + error.message });
        }
    });
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}

createServer(3000)
createServer(3002)
createServer(3003)
