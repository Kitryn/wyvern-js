#!/bin/sh

yarn run abi-gen --abiGlob 'src/wyvern-ethereum/build/contracts/@(WyvernToken|WyvernDAO|WyvernExchange|WyvernProxyRegistry|WyvernLazyBank).json' --templates src/abi_templates --output src/abi_gen 
