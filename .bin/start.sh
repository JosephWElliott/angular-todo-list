#!/bin/sh
export NG_CLI_ANALYTICS=ci
echo 'export PATH="/projects/app/node_modules/.bin:$PATH"' >> ~/.bashrc
export PATH="/projects/app/node_modules/.bin:$PATH"
npm install
ng serve --host 0.0.0.0 --port 3000 --disable-host-check
