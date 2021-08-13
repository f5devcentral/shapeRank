import chokidar from 'chokidar';

function getFiles(path: string) {
    chokidar.watch(path).on('all', (event, path) => {
        console.log(event, path);
    });
}

function compile() {
    
 }

function link() { }

// watches the folder and files inside the folder
getFiles('./src');


