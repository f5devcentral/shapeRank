#!/bin/bash -ex 

EMSDK=~/software/emsdk

source $EMSDK/emsdk_env.sh
pushd primordialsoup
./build os=emscripten arch=wasm

mkdir -p out/web
cp out/ReleaseEmscriptenWASM/primordialsoup.* out/web
cp out/snapshots/*.vfuel out/web
cp newspeak/*.ns out/web
../copyIDEDeps.sh ../newspeak out/web
cp ../*.ns out/web
cp -R ../CodeMirror out/web

pushd out/web
../ReleaseX64/primordialsoup \
    ../snapshots/WebCompiler.vfuel \
    *.ns \
    *.png \
    CodeMirror/lib/codemirror.js \
    CodeMirror/addon/display/autorefresh.js \
    RuntimeWithMirrorsForPrimordialSoup HopscotchWebIDE HopscotchWebIDE.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankWithIDE ShapeRankWithIDE.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankDemo ShapeRankDemo.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankDemo2 ShapeRankDemo2.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankCLI ShapeRankCLI.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankWorkspaceApp ShapeRankWorkspaceApp.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankNotebook ShapeRankNotebook.vfuel \    
    
#    RuntimeWithMirrorsForPrimordialSoup Ampleforth Ampleforth.vfuel
popd
popd
