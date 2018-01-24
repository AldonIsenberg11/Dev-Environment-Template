# Dev-Environment-Template
Basic starter template to start any new project.

# Starter Kit

## 1. Editor and Configuration

#### Editor config
    Make sure your editor is compatible with your editor.
    Check here: http://editorconfig.org/

## 2. Package Management
https://nodesecurity.io/ `"nsp": "2.6.2",`

    This checks any subsequent NPM installs for security vulnerabilities


## 3. Development Web Server

    Express is setup in /buildScripts/srcServer.js

    srcServer.js is currently set to port: 3000

#### Local tunnel

    This command will produce a shareable link

`lt --port 3000 --subdomain <whatEverYouWant>`

    assuming <whatEverYouWant> is not already currently in use.

Example |  `lt --port 3000 --subdomain aldon`

Response | your url is: https://aldon.localtunnel.me

## 4. Automation

## 5. Transpiling

## 6. Bundling

## 7. Linting

## 8. Testing and Continuous Integration

## 9. HTTP Calls

## 10. Project Structure

## 11. Production Build

## 12. Production Deploy
