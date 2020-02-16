# Gemography

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start

**requirements:** 
- nodejs 10
- @nrwl/cli installed globally:
    ``` npm i -g @nrwl/cli ```
- firebase-tools installed globally: 
    ``` npm i -g firebase-tools ```

to run the project locally run the command:
```bash 
  nx serve api # for the api project
  # and 
  nx serve challenge # for the client application
  # since this is an angular-cli project you still have the possibility to run it using ng serve
```
to emulate the execution on firebase functions and hosting: 
```bash
  # since the firebase config rely on the dist folder content you need to build the projects through:
  #  nx build api & nx build challenge
  firebase serve
``` 

## Azure DevOps CI: 

the project is configured to run a pipeline on azure DevOps that go through different steps from packages installation through deployment to firebase, this configuration reside in the *azure-pipelins.yml* file the only thing you need is to add variable group named *firebase-variables* with the variable *FIREBASE_TOKEN* which is required by the deployment step, to get your token you can use the firebase cli: 
```bash 
  firebase login:ci
``` 
one thing is that firebase block/limit external http requests from the functions, and then will block the calls to github Api, thus the front end project should use the GithubService to directly call the api 


## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
