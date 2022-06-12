# SERVER SIDE

- On server directory path run command `docker-compose up -d`
  - This command will build and run the postgres db and postgres admin gui on docker containers.
  - you can check docker containers list status by run command `docker ps`

#### please check you have update .env file!

#Alon - please write down the command that need for mifrations and run server

# HOW TO RUN

- To run the migration file make sure you run npm i first and you have db-migrate & db-migrate-pg installed.
- Then navigate to the migration folder (currently in src/utils) and run the command db-migrate up init.

# NOTE

- database.json and all the connection paramaters are subject to change so make sure you stay up to date.
