import { bashPath } from "../package.json";
import { exec, spawn, execSync } from "child_process";

export const isWin = process.platform === "win32";

export interface LooseObject {
    [key: string]: any;
}

export function executeCommand(args: string[]) {
    const [command, ...vars] = args;

    if (isWin) {
        const bashInput = args.join(" ");
        console.log(bashInput);
        spawn(bashPath, ["-c", bashInput], {
            stdio: "inherit",
        });
    } else {
        console.log(vars);
        spawn(command, vars);
    }
}

export function executeStringCommand(args: string) {
    executeCommand(args.split(" "))
}