#!/bin/bash -ex 

# Change this to point at your emscripten installation
EMSDK=~/software/emsdk

source $EMSDK/emsdk_env.sh

# We assume we cloned psoup into the directory above newspeak;
# change this if your psoup repo is elsewhere
pushd ../primordialsoup
./build os=emscripten arch=wasm
popd

mkdir -p out
cp ../primordialsoup/out/ReleaseEmscriptenWASM/primordialsoup.* out
cp ../primordialsoup/out/snapshots/*.vfuel out

# Copy Psoup Newspeak code
cp ../primordialsoup/newspeak/*.ns out
# Copy required Newspeak files
cp ../newspeak/*.ns out
cp ../newspeak/*.png out
cp src/*.ns out
# Make sure we have CodeMirror where we need it
cp -R CodeMirror out

pushd out
../../primordialsoup/out/ReleaseX64/primordialsoup \
    ../../primordialsoup/out/snapshots/WebCompiler.vfuel \
    *.ns \
    *.png \
    CodeMirror/lib/codemirror.js \
    CodeMirror/addon/display/autorefresh.js \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankWithIDE ShapeRankWithIDE.vfuel \
    RuntimeForElectron ShapeRankWithIDE ShapeRankElectronIDE.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankDemo ShapeRankDemo.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankDemo2 ShapeRankDemo2.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankCLI ShapeRankCLI.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankWorkspaceApp ShapeRankWorkspaceApp.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankNotebook ShapeRankNotebook.vfuel
    

popd

