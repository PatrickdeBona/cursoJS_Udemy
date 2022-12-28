const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))

//Faz uma pesquisa de arquivos
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);

        if (/node_modules/g.test(fileFullPath)) continue;
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }
        
        console.log(fileFullPath)
    }
}
readdir('D:/Documents/VisualCode/CursoUdemy');
//Anda por todas as pastas do Curso;