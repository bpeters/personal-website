#!/bin/bash

yarn build --release &&
cd public &&
git add -A &&
git commit -m "new release" &&
git push
