import { executeStringCommand, LooseObject, } from "./util"
import { githubDependencies } from "../package.json"


// pull github repositories
Object.keys(githubDependencies).forEach((key: string) => {

    let repo = (githubDependencies as any)[key];

    executeStringCommand(`git clone ${repo} node_modules/${key}`);
})

