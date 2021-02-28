#!/usr/bin/env bash

echo "安装工程依赖" && npm install || exit 1
echo "安装项目依赖" && npx lerna bootstrap || exit 1