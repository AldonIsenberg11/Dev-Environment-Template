# Dev-Environment-Template
Basic starter template to start any new project.

# Starter Kit

## 1. Editor and Configuration

##### Editor config | http://editorconfig.org/
    Make sure your editor is compatible with your editor

## 2. Package Management

##### Node Security Platform | https://nodesecurity.io/
    "nsp": "2.6.2"
    This checks any subsequent NPM installs for security vulnerabilities


## 3. Development Web Server

##### Express.js | https://expressjs.com/
    /buildScripts/srcServer.js is currently set to port: 3000

<!-- security vulnerabilities
##### Local tunnel | https://localtunnel.github.io/www/
    This command will produce a shareable link:

Command | `lt --port 3000 --subdomain <whatEverYouWant>`

Response | `your url is: https://<whatEverYouWant>.localtunnel.me`

    assuming <whatEverYouWant> is not already currently in use
 -->

## 4. Automation

##### NPM scripts | https://docs.npmjs.com/misc/scripts
    Built into the package.json "Scripts" : {}
    Utliizes the node_modules/.bin executables

##### npm-run-all | https://github.com/mysticatea/npm-run-all
    Allows for running scripts in parallel


## 5. Transpiling

##### Babel | https://babeljs.io/
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1",

## 6. Bundling
    "babel-loader": "6.2.5",
    "webpack": "1.13.2",
    "webpack-dev-middleware": "1.8.4",
    "webpack-hot-middleware": "2.13.0"

## 7. Linting

## 8. Testing and Continuous Integration

## 9. HTTP Calls

## 10. Project Structure

## 11. Production Build

## 12. Production Deploy

## 13. Helpful Tools

##### Chalk | https://github.com/chalk/chalk
    "chalk": "1.1.3",

##### Numeral | http://numeraljs.com/
    "numeral": "1.5.3",
