#!/bin/bash -ex

DIR="out/$1"

cd primordialsoup

mkdir -p $DIR
cp newspeak/*.ns $DIR
../copyIDEDeps.sh ../newspeak $DIR
cp ../*.ns $DIR
cp -R ../CodeMirror $DIR

cd $DIR
../ReleaseX64/primordialsoup \
    ../snapshots/WebCompiler.vfuel \
    *.ns \
    *.png \
    CodeMirror/lib/codemirror.js \
    CodeMirror/addon/display/autorefresh.js \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankCLI ShapeRankCLI.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankWithIDE ShapeRankWithIDE.vfuel \
    RuntimeWithMirrorsForPrimordialSoup ShapeRankDemo ShapeRankDemo.vfuel
