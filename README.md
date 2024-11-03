**Rode o Banco com Container:**

> AVISO: se for rodar por container descomente o codigo indicado no arquivo db.js ao inicializar o Sequeliza

`docker compose -d up`

- container do mysql:
  `http://localhost:3306`

- o container do phpMyAdmin:
  `http://localhost:8989`

**Pare os containers:**

`docker compose down`

ou

`docker stop -a`

**Remover os containers:**

`docker rm -a`
