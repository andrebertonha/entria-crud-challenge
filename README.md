# Entria Challenge

## Instructions for run the project
 
 ### clone the project using git clone https://github.com/andrebertonha/entria-crud-challenge

 + Install MongoDB on the machine
    - run it in "mongodb://localhost:27017/databasename"
    - type mongod to verify if the instance is gone fine

+ In The project root folder run:
    - npm install to install the dependencies for the backend
    - cd server
    - /entria-crud/server> npm start to run backend    
    - the project must be running in the localhost:3000
    - type localhost:3000/graphql to run graphql queries

    + examples: 
        - to get all books from the database ( after create ones for sure )
        ```
            {
                books {
                    _id,
                    isbn,
                    author,
                    title
                }
            }
        ```

        - to get all single book from id
        ```
           {
                book(id:"5f92edcbc4a4cf0d74ef869b") {
                    _id,
                    isbn,
                    title,
                    author,
                    description,
                    published_year,
                    publisher,
                    updated_date
                }
            }
        ```

        - to add a book use this mutation
        ```
           mutation {
            addBook(
                isbn: "123475678",
                title: "Whatever this book title",
                author: "Mr. Bean 450",
                description: "shor explanation",
                publisher: "Djamware Press",
                published_year: 2019,
                
            ) {
                updated_date
            }
          }

        ```

#### Frontend
    + Go to the project folder and access client folder by:
    - cd client
        - /entria-crud/client>  do npm install in the client folder to install react and frontend dependencies
        - /entria-crud/client> npm start
        - if asks to run in another port than localhost:3000 say 'y' yes to run in localhost:3001
        - access localhost:3001 from the browser and see the project running
        
- note: The books is only can be added until 2019 year, if you put 2020 or any another year over 2019 the error must be shown
