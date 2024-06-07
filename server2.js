const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


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

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
