# Blockchain MongoDB Blockchain App

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Goal](#goal)
- [Get started](#get-started)
- [More details](#more-details)
  - [Tech Stack](#tech-stack)
  - [API Available](#api-available)
  - [Seed Database](#seed-database)
  - [Run Tests](#run-tests)
  - [Run Linting](#run-linting)
  - [Interact with the Local Ethereum Blockchain directly](#interact-with-the-local-ethereum-blockchain-directly)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Goal

Node.js Express API, with MongoDB and Ethereum blockchain.

Private keys are stored in the server. The Ethereum Blockchain is used to validate and store transactions.

## Get started

0. Prerequisites: You need to have Git, Node/npm, MongoDB and [Ganache](http://truffleframework.com/ganache/) installed on your computer

1. Clone the repo

2. Install npm dependencies (`package.json`)
```
npm install
```

3. Run MongoDB or on atlas in terminal
```
sudo service mongod start
```

4. Run Ganache (GUI / CLI)

5. Run the server. It will be available at `http://localhost:3000`
```
npm run start
```


## More details

### Tech Stack

- Node.js + Express + Mongoose + Web3.js
- MongoDB database
- Blockchain: Ganache (Ethereum Local Testnet)
- Authentication using `JWT` (pass the token in the header `x-access-token`)
- Tests with Mocha & Chai
- Linting with ESLint (Airbnb Style Guide + some custom rules)


### API Available

Login
- `POST /api/v1/auth/login`

Users
- `GET /api/v1/users`
- `POST /api/v1/users`
- `GET /api/v1/users/:user_id`
- `PUT /api/v1/users/:user_id`
- `DELETE /api/v1/users/:user_id`

Transactions
- `// GET /api/v1/transactions`
- `GET /api/v1/transactions/:transaction_id`

User Transactions
- `GET /api/v1/users/:user_id/transactions`
- `POST /api/v1/users/:user_id/transactions`

Address Transactions
- `GET /api/v1/addresses/:address_id/transactions`

Block Transactions
- `GET /api/v1/blocks/:block_number_or_hash`


Tip: you can interact with the API with a tool like [Postman](https://www.getpostman.com/)


### Seed Database

```
node db/seed.js
```


### Run Tests

```
npm run test
```


### Run Linting

```
npm run lint
```

### Login

![alt text](https://user-images.githubusercontent.com/16665636/99883523-75748900-2c41-11eb-991a-765f24402b67.png)

### User added

![alt text](https://user-images.githubusercontent.com/16665636/99883543-9dfc8300-2c41-11eb-99e4-466e6db56622.png)

### Users list

![alt text](https://user-images.githubusercontent.com/16665636/99883497-4c53f880-2c41-11eb-8b13-8eb72ea59444.png)



### Interact with Local Ethereum Blockchain 

```
node scripts/ethereum_scriptsjs <command>

// command: accounts, balance, unlock, send, transaction, account_transactions, block
// (+ additional parameters needed in some cases)
```


