#!/usr/bin/env bash


echo -e "\033[34mTesting...\n\033[0m";

set -e # this will cause the shell to exit immediately if any command exits with a nonzero exit value.

# lerna bootstrap --concurrency 1 --hoist --ignore-scripts
# lerna run build --stream

lerna exec --scope @gemunion/contracts-access -- npm run test
lerna exec --scope @gemunion/contracts-chain-link -- npm run test
lerna exec --scope @gemunion/contracts-chain-link-v2 -- npm run test
lerna exec --scope @gemunion/contracts-erc20 -- npm run test
lerna exec --scope @gemunion/contracts-erc721 -- npm run test
lerna exec --scope @gemunion/contracts-erc721c -- npm run test
lerna exec --scope @gemunion/contracts-erc721e -- npm run test
lerna exec --scope @gemunion/contracts-erc1155 -- npm run test
lerna exec --scope @gemunion/contracts-erc1363 -- npm run test
lerna exec --scope @gemunion/contracts-mocks -- npm run test
lerna exec --scope @gemunion/contracts-utils -- npm run test

lerna exec --scope @gemunion/contracts-constants -- npm run test
lerna exec --scope @gemunion/contracts-helpers -- npm run test
lerna exec --scope @gemunion/traits-v5 -- npm run test
lerna exec --scope @gemunion/traits-v6 -- npm run test

