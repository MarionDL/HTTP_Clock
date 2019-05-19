#!/bin/bash

docker build -t clock-client -f docker/Client/Dockerfile .
docker build -t clock-server -f docker/Server/Dockerfile .