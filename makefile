
.PHONY: up down build

up:
	podman compose up -d --build

down:
	podman compose down

build:
	podman compose build