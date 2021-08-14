import * as chokidar from 'chokidar';
import { exec, spawn, execSync } from "child_process";

const windowsBashPath = "C:\\Program Files\\Git\\bin\\bash.exe"

const isWin = process.platform === "win32";

const localDir = process.cwd().replace(/["\\\\"]/g, "/");

function executeCommand(args: string[]) {
    const [command, ...vars] = args;

    if (isWin) {
        const bashInput = args.join(" ");
        console.log(bashInput);
        return spawn(windowsBashPath, ["-c", bashInput], {
            stdio: "inherit",
        });
    } else {
        console.log(vars);
        return spawn(command, vars, {
            stdio: "inherit",
        });
    }
}

function getFiles(path: string) {
    chokidar.watch(path).on('all', (event, path) => {
        console.log(event, path);
    });
}

function compile(files: string[]) {

    // gcc -c a.c b.c b.h c.c c.h d.c d.h
    return executeCommand([
        "gcc",
        "-working-directory", localDir + "/examples/build",
        "-c", ...files])
        .on("error", (err) => { console.log(`Compiler error: ${err}`); });
}

function link(files: string[]) {

    // gcc -o myApp -Wl a.o b.o c.o d.o
    return executeCommand([
        "gcc", "-v",
        "-working-directory", localDir + "/examples/build",
        "-o", "myApp",
        "-Wl", ...files])
        .on("error", (err) => { console.log(`Linker error: ${err}`); });

}

// watches the folder and files inside the folder
//getFiles('./src');

// compile the C files in ./examples/build
compile(["a.c", "b.c", "b.h", "c.c", "c.h", "d.c", "d.h"]);

// link the C files in ./examples/build
//link(["a.o", "b.o", "c.o", "d.o"]);


