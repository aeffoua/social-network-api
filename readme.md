# Social Network API


## Description
- This app is a social network API that uses a NoSQL database.

- On this app, users can add other users as friends, 
share their thought and allow otheir friends to react to their thoughts. 

-This app uses `Express.js` for routing, a `MongoDB database`, and the `Mongoose ODM`. It also uses JavaScript `Date` Object to format timestamps.


## Table of Contents
- [Description](#Description)
- [Technologies](#Technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#Questions)
- [Mock-Up](#mock-up)


## Technologies

- [Express.js](#Express.js)
- [MongoDB](#MongoDB)
- [Mongoose](#Mongoose)
- [Node.js](#Nodejs)
- [Insomnia](#Insomnia)



## Installation
- Once you are ready to use the application, open your terminal,
-run "npm i"
-run "npm start"
-once the server is connected, 
-open Insomnia, and add the following routes:

## Usage
Use these routes in Insomnia 


- GET/POST Users and Thoughts
    `http://localhost:3001/api/users/`

    `http://localhost:3001/api/thoughts/`

    (Add Id number to find user or thought by Id)

- PUT/DELETE Users and Thoughts

  `http://localhost:3001/api/users/:userid`

  `http://localhost:3001/api/thoughts/:thoughtid`

Note: Please add the correct reactionid and friendid when testing POST/DELETE routes for Friends and Reactions

## Tests
Go to Insomnia to test the app and see how it works. 



## Questions
If you have any questions about the repo, open an issue or contact me directly at carineeffoua@gmail.com. You can find more of my work at [https://github.com/aeffoua](https://github.com/aeffoua).

## Mock-Up




https://github.com/aeffoua/social-network-api/assets/119564199/011bfcb6-33eb-4c07-89ba-f5538a54db6d






https://github.com/aeffoua/social-network-api/assets/119564199/85d25583-6d8f-4865-93cc-93d6525027ba













