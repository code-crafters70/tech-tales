/* 
    Esse arquivo serve para observar as alterações dos arquivos que estejam relacionados
    ao react.js, como arquivos .jsx e .js com react dentro. Com essa observação, quando o arquivo for alterado, vai executar o webpack.
*/

const chokidar = require("chokidar");
const { exec } = require("child_process");
const path = require("path");

const reactFolderPath = path.join(__dirname, "/ttserver/app/static/jsx/pages");

// Inicialize o observador.
const watcher = chokidar.watch(reactFolderPath, {
    persistent: true,
    ignored: /(^|[\/\\])\../, // Ignorar arquivos ocultos.
    ignoreInitial: true
});

// Função para executar um comando de terminal.
function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro: ${stderr}`);
            return;
        }
        console.log(`Saída: ${stdout}`);
    });
}

// Evento disparado quando qualquer arquivo for alterado.
watcher.on('change', (filePath) => {
    if (path.extname(filePath) === '.jsx') {
        console.log(`${filePath} foi alterado`);
        executeCommand('npx webpack');
    }
});

// Tratamento de erros.
watcher.on('error', (error) => {
    console.error(`Erro: ${error}`);
});

console.log(`Observando mudanças em arquivos .jsx na pasta ${reactFolderPath}`);