# Gemography [![Build Status](https://dev.azure.com/cherkaouimouad/gemo-challenge/_apis/build/status/mouadcherkaoui.gemo-challenge?branchName=master)](https://dev.azure.com/cherkaouimouad/gemo-challenge/_build/latest?definitionId=48&branchName=master)

Backend challenge project using NestJS & Angular.
<p align="center"><img src="https://miro.medium.com/max/4248/1*bYHZw5xC3g4o3-2S9rMC9A.png" width="450"></p>



🔎 **This project was generated using [Nx](https://nx.dev)  *a set of Extensible Dev Tools for Monorepos.***

## Quick Start

**requirements:** 
- nodejs 8
- @angular/cli globally installed:
  ``` npm i -g @angular/cli```
- @nrwl/cli installed globally:
    ``` npm i -g @nrwl/cli ```
- firebase-tools installed globally: 
    ``` npm i -g firebase-tools ```

after installing the project you can run without firebase emulation using:
```bash 
  nx serve api # for the api project
  # and 
  nx serve challenge # for the client application
  # since this is an angular-cli project you still have the possibility to run it using ng serve
```
you can test the api at http://localhost:3333 when you will be able to check the swagger-ui page documenting the Api.

<p align="center"><img src="./img/swagger-ui.png" width="450"></p>

to emulate the execution on firebase functions and hosting: 
```bash
  # since the firebase config rely on the dist folder content you need to build the projects through:
  #  nx build api & nx build challenge
  firebase serve
``` 
Note: since firebase configuration depends on the dist folder content from which it will serve the function and the angular app you must build the project before running the command.
## Azure DevOps CI: 

the project is configured to run a pipeline on azure DevOps that go through different steps from packages installation through deployment to firebase, this configuration reside in the *azure-pipelins.yml* file the only thing you need is to add variable group named *firebase-variables* with the variable *FIREBASE_TOKEN* which is required by the deployment step, to get your token you can use the firebase cli: 
```bash 
  firebase login:ci
``` 
one thing is that firebase block/limit external http requests from the functions, and then will block the calls to github Api, thus the front end project should use the GithubService to directly call the api 


## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
