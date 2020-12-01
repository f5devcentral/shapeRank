#!/bin/bash -ex 

# Change this to point at your emscripten installation
EMSDK=~/software/emsdk

source $EMSDK/emsdk_env.sh

# Assume we cloned psoup into the directory above;
# change this if your psoup repo is elsewhere
pushd ../primordialsoup
./build os=emscripten arch=wasm
popd

mkdir -p out
cp ../primordialsoup/out/ReleaseEmscriptenWASM/primordialsoup.* out
cp ../primordialsoup/out/snapshots/*.vfuel out

# Copy Psoup sources
cp ../primordialsoup/newspeak/*.ns out
# Copy required Newspeak sources
copyIDEDeps.sh ../newspeak out
cp src/*.ns out
cp -R ../CodeMirror out

pushd out
../primordialsoup/out/ReleaseX64/primordialsoup \
    ../primordialsoup/out/snapshots/WebCompiler.vfuel \
    *.ns \
    *.png \
    CodeMirror/lib/codemirror.js \
    CodeMirror/addon/display/autorefresh.js \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankWithIDE ShapeRankWithIDE.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankDemo ShapeRankDemo.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankDemo2 ShapeRankDemo2.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankCLI ShapeRankCLI.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankWorkspaceApp ShapeRankWorkspaceApp.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankNotebook ShapeRankNotebook.vfuel   
    

popd

