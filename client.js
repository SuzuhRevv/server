const ports = [3000, 3002, 3003];

const consultarArquivos = async () => {
    try {
        document.getElementById('arquivos-processados').innerText = '';
        for (const port of ports) {
            const response = await fetch(`http://localhost:${port}/verificarArquivos`);
            if (response.ok) {
                const data = await response.json();
                console.log(`Arquivos do servidor na porta ${port}:`, data.arquivos);
                document.getElementById('arquivos-processados').innerText += `\nArquivos do servidor na porta ${port}: ${JSON.stringify(data.arquivos)}`;
                
            } else {
                console.error(`Erro ao consultar arquivos no servidor na porta ${port}. Código de status:`, response.status);
                document.getElementById('arquivos-processados').innerText += `\nErro ao consultar arquivos no servidor na porta ${port}.`;
            }
        }
        
    } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
        document.getElementById('arquivos-processados').innerText += `\nErro ao fazer a solicitação: ${error}`;
    }
};

const adicionarArquivo = async (port) => {
    try {
        const response = await fetch(`http://localhost:${port}/adicionarArquivo?port=${port}`, {
            method: 'POST'
        });
        if (response.ok) {
            console.log('Arquivo adicionado com sucesso.');
            document.getElementById('resultado').innerText += `\nArquivos adicionados ao servidor na porta ${port}`;
        } else {
            console.error('Falha ao adicionar arquivo. Código de status:', response.status);
            document.getElementById('resultado').innerText += '\nFalha ao adicionar arquivo.';
        }
    } catch (error) {
        console.error('Erro ao fazer a solicitação para adicionar arquivo:', error);
        document.getElementById('resultado').innerText += `\nErro ao fazer a solicitação para adicionar arquivo: ${error}`;
    }
};



document.getElementById('adicionarBtn').addEventListener('click', () => adicionarArquivo(ports[0]));
document.getElementById('adicionarBtn2').addEventListener('click', () => adicionarArquivo(ports[1]));
document.getElementById('adicionarBtn3').addEventListener('click', () => adicionarArquivo(ports[2]));
document.getElementById('consultarBtn').addEventListener('click', () => consultarArquivos(ports));


