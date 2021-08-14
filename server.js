#!/usr/bin/env node

import { readFile as _readFile } from 'fs';
import { promisify } from 'util';
const readFile = promisify(_readFile);

async function primordialsoup(mod) {
  // primordialsoup.js isn't structured like an importable module
  // in particular, we have no way of accessing its interface, the Module param
  // so... this hack
  const psoupSource = await readFile('./primordialsoup/out/node/primordialsoup.js');
  const primordialsoupFn = new Function('Module', 'process', 'require', '__dirname', 'window', psoupSource);

  const populatedMod = await new Promise((resolve, reject) => {
    const ori = mod.onRuntimeInitialized;
    mod.onRuntimeInitialized = function() {
      if (ori) { ori(); }
      resolve(mod);
    };
    const window = { require };
    primordialsoupFn(mod, process, require, __dirname, window);
  });

  return populatedMod;
}

async function main(arg) {
  const Module = await primordialsoup({
    noInitialRun: true,
    noExitRuntime: true,
    locateFile: function(name) {
      return './primordialsoup/out/node/' + name;
    }
  });

  function alloc(buf, which = 'i8') {
    const mem = {
      i32: { heap: Module.HEAP32, factor: 4 },
      i16: { heap: Module.HEAP16, factor: 2 },
      i8: { heap: Module.HEAP8, factor: 1 }
    }[which];

    const ptr = Module._malloc(buf.length * mem.factor);
    mem.heap.set(buf, ptr/mem.factor);
    return ptr;
  }

  const vfuel = await readFile('./primordialsoup/out/node/ShapeRankCLI.vfuel');

  const vfuelPtr = alloc(vfuel);
  const argPtr = alloc(Module.intArrayFromString(arg));
  const argvPtr = alloc([argPtr], 'i32');

  Module._load_snapshot_with_arguments(vfuelPtr, vfuel.length, 1, argvPtr);
  Module._handle_message();

  Module._free(vfuelPtr);
  Module._free(argvPtr);
  Module._free(argPtr);

};

main(process.argv[2]);
