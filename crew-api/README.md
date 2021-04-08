# Crew API

Crew API is a simple SprigBoot Java application. It allows managing crews and their members.

***
## Getting Setup

### Installing project dependencies

This project uses Maven to manage software dependencies. Maven Relies on the pom.xml file located in the root of this repository. You can install maven in your machine or use maven-wrapper (mvnw) included in the project.
Open your terminal and run:
```bash
mvn compile
```

### Installing useful tools

#### [Postman](https://www.getpostman.com/downloads/)
Postman is a useful tool to issue and save requests. Postman can create GET, PUT, POST, etc. requests complete with bodies. It's included a collection (`./Beanstalk - Crew API.postman_collection.json `) which contains example requests.

***

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
mvn spring-boot:run
```

## Building the Application
To build the application, open terminal and run:
```bash
mvn install
```

You will find a jar file with the name 'crew-api.jar' in target folder, it will be used to deploy the application in Elastic Beanstalk.