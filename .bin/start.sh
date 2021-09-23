#!/bin/sh

if [ -d "/projects/app/.theia" ]; then
  if [ ! -d "/projects/.theia" ]; then
    cp -R /projects/app/.theia /projects/.theia
  fi
fi

export NG_CLI_ANALYTICS=ci
export NODE_OPTIONS=--max_old_space_size=4096
echo 'export PATH="/projects/app/node_modules/.bin:$PATH"' >> ~/.bashrc
export PATH="/projects/app/node_modules/.bin:$PATH"
NODE_OPTIONS=--max_old_space_size=4096 npm ci && ng serve --host 0.0.0.0 --port 3000 --disable-host-check
