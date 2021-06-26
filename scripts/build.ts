import fs from "fs";

import { executeStringCommand } from "./util";
import { outputDirectory } from "../package.json"


executeStringCommand(`mkdir -p ${outputDirectory}`);
executeStringCommand(`cp node_modules/primordialsoupnewspeak/*.ns ${outputDirectory}`);
