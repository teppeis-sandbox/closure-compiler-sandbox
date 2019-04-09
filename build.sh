#!/bin/sh

./node_modules/google-closure-library/closure/bin/build/closurebuilder.py \
  --root=./node_modules/google-closure-library \
  --root=./src \
  --namespace="myapp.start" \
  --output_mode=compiled \
  --compiler_flags="--compilation_level=SIMPLE" \
  --compiler_flags="--formatting=PRETTY_PRINT" \
  --compiler_jar=node_modules/google-closure-compiler/compiler.jar

