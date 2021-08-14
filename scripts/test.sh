#!/bin/sh

TS_NODE_FILES=true yarn run mocha test/*.ts --require ts-node/register --timeout 10000

exit 0
