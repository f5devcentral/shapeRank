var chokidar = require('chokidar')

function getFiles(path, closure) {
    chokidar.watch(path).on('all', (filepath) => closure(filepath));
}

exports.getFiles = getFiles
