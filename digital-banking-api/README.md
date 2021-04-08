# Digital Banking API

Digital Banking API is a simple nodejs application. It allows managing banks and their digital channels.

***
## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. Open your terminal and run:
```bash
npm install
```

### Installing useful tools

#### [Postman](https://www.getpostman.com/downloads/)
Postman is a useful tool to issue and save requests. Postman can create GET, PUT, POST, etc. requests complete with bodies. It's included a collection (`./Beanstalk - Digital Banking.postman_collection.json `) which contains example requests.

***

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase.

## Building the Application
To build the application, open terminal and run:
```bash
npm run build
```

You will find a zip file with the name 'artifact.zip', it will be used to deploy the application in Elastic Beanstalk