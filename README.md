REDIS: 
    $ docker run --name lab01redis -p 6379:6379 --detach redis 
  
To run application: 
$ yarn start
  
### DATABASE:  
    To create a new migration:  
    $ yarn knex migrate:make <migration-name>  
    
    To run the latest migrations:  
    $ yarn knex migrate:latest  
  
### Additions to the original project:  
- SQLite database  
