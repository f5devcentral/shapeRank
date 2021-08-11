var chokidar = require('chokidar')
var { exec, spawn } = require('child_process');

function getFiles(path, closure) {
    chokidar.watch(path).on('all', (filepath) => closure(filepath));
}

function concatDeps(deps) {
    // convert deps into a single string 
    var result = ''
    for d in deps {
      result = result ++ d ++ ' '
    }
    return result
}

function clang(target, deps, flags) {
    exec('cc -c ' ++ target ++ ' ' ++ concatDeps(deps))
}

function basicLink(target, deps, flags) {   
    exec('cc ' ++ flags ++ ' ' ++ target ++ '-Wl '++ concatDeps(deps)) 
}

exports.getFiles = getFiles
exports.clang = clang
exports.basicLink = basicLink
