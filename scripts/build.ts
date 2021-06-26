import fs from "fs";

import { executeStringCommand } from "./util";
import { outputDirectory } from "../package.json"


executeStringCommand(`mkdir -p ${outputDirectory}`);
executeStringCommand(`cp node_modules/primordialsoupnewspeak/*.ns ${outputDirectory}`);

// docker pull emscripten/emsdk

// sudo apt-get update
// sudo apt-get install g++-multilib scons

// git clone https://github.com/newspeaklanguage/primordialsoup.git
// git clone https://github.com/f5devcentral/shapeRank.git
