import chokidar from 'chokidar';

function getFiles(path: string, closure: Closure(event, path)) {
    chokidar.watch(path).on('all', closure);
}

function compile() { }

function link() { }

// watches the folder and files inside the folder
getFiles('./src');