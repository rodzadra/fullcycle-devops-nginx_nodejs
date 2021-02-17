###  Desafio Nginx com Nodejs, do modulo docker, do curso Full Cycle 2.0

É criado 3 containers docker:

- um rodando o mysql (db);
- um rodando um app nodejs (app) que grava e lê do contaianer db;
- um rodando nginx (nginx) fazendo proxy reverso para o container app;

**Para rodar:**

    git clone https://github.com/rodzadra/fullcycle-devops-nginx_nodejs

    cd fullcycle-devops-nginx_nodejs/node

    npm install

    cd ..

    docker-compose build

    docker-compose up -d

