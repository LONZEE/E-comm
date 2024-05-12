# E-comm
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The backend database is tailored for e-commerce websites through the utilization of Express.js API and Sequelize for connectivity with MySQL database. It facilitates users in establishing a development database, populating it with test data, and synchronizing Sequelize models with MySQL database. Users can employ GET, POST, PUT, and DELETE routes to showcase and manage data in the database. Experience its potential to elevate your company to new heights.

## Table of Contents:
- [The Challenge](#The-Challenge)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [License](#License)
- [Author](#Author)


## Usage Instructions
1. Repository: Open documentation run 'npm i' and update '.env'.

2. Create database: use the schema.sql file in the db folder with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.

3. Run 'npm run seed' to seed the database with test data. Then, run 'npm start' or 'nodemon' to start the server and sync the Sequelize models to the MySQL database.

4. Generate a development database with test data, use the schema and seed commands.

5. Use Insomnia or Postman to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.

## User Story
As an e-commerce platform owner, I want to have a back-end system that can handle and manage products, categories, and tags, So that I can easily organize and control my inventory.

I want to be able to create, read, update, and delete (CRUD) operations on products, categories, and tags, So that I can manage my e-commerce platform effectively and efficiently.

I want to have a secure connection to my database, So that my e-commerce platform's data is safe and secure.

I want to have a system that can handle relationships between products, categories, and tags, So that I can easily manage the associations between these entities.

By having these features, I can ensure that my e-commerce platform runs smoothly and meets the needs of my customers.

## Acceptance Criteria

* GIVEN a functional Express.js API
* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
* THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
* THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
* THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia Core for categories, products, or tags
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
* THEN I am able to successfully create, update, and delete data in my database

## Built With

### SQL
### JavaScript

## Images 

### Connected to SQL
![](Assests\Ecompic.png)
### Seeded Database
![](Assests\E-compic.png)

## What I Learned
Throughout the development of this e-commerce back-end system, I gained a deeper understanding of several key concepts and technologies:

Sequelize ORM: I learned how to use Sequelize to interact with a MySQL database in a Node.js application. This included defining models, setting up associations between models, and performing CRUD operations.

Express.js: I improved my skills in setting up and using Express.js for server-side routing. I learned how to define RESTful API routes and how to handle different types of HTTP requests.

Environment Variables: I learned the importance of using environment variables to protect sensitive data such as database credentials. I used the dotenv package to load these variables in my application.

Asynchronous JavaScript: This project reinforced my understanding of asynchronous JavaScript, particularly the use of async/await syntax for handling promises.

Error Handling: I learned how to handle and debug errors more effectively, particularly those related to database operations and HTTP requests.

Software Testing: I used Insomnia Core for testing my API routes, which helped me understand the importance of testing in software development and how to use testing tools.

This project was a valuable opportunity to apply and expand my back-end development skills. I look forward to applying these learnings to future projects.

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)
