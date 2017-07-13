#! /bin/bash

cd /home/ubuntu/olymplan-web
sed -i -e "s/version: '2.1'/version: '2.0'/g" docker-compose.yml
sed -i -e "s/version: '2.1'/version: '2.0'/g" common.yml
