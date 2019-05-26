## XPACK  [![Build Status](https://travis-ci.org/koechkevin/xpack.svg?branch=master)](https://travis-ci.org/koechkevin/xpack) <a href="https://codeclimate.com/github/koechkevin/xpack/maintainability"><img src="https://api.codeclimate.com/v1/badges/0037c1253be6c302a75a/maintainability" /></a> <a href="https://codeclimate.com/github/koechkevin/xpack/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0037c1253be6c302a75a/test_coverage" /></a>

This repository shows setting up react-redux using webpack4 and babel7.
#### Host application on Heroku

- This application is hosted on this [link](https://webpack-app.herokuapp.com/)
- create a server.js file on the root directory that will be used to serve index.html file in dist folder.
- use express as the server for production and `webpack-dev-server` for development
- add scripts `build` to bundle our files for production and `start` to run our server in production mode. The script for development is  `start:dev` configured to allow hot reload.
- Ensure that the port to be used is got from environment variables.

#### Set up testing environment

- This application uses jest and enzyme as a testing framework.
- add scripts to package.json to run the tests including coverage
- add configurations file for jest `jest.config.js` file in the root directory.
- Add setup tests file in the root directory `test.config.js`.
- All the tests will reside inside ___tests___ folder nested inside each folder.
- write tests for all js files inside src folder to set a standard for every developer to  write tests for any new file added.


#### Update TravisCI to run tests
- Add .travis.yml file with the scripts of how to run the tests.
- A build is successful when all tests have passed.
- Fetch the test coverage and obtain a badge from code climate

#### Set up react router-dom
- update `webpack.config.js` file to allow react-router-dom v4 on development. below is the script that should be enabled.
```$xslt
 devServer: {
    port: process.env.PORT||3000,
    historyApiFallback: true,
  },
```
- Add a routes folder inside src to host a file tht will be switching between the routes. 
- Ensure it passes history as props.
- Update `App.jsx` accordingly

#### set up sass processing on client.
- All our styling files will have extension `.scss`.
- Update webpack.config.js file with appropriate loaders.
- Ensure all tests are passing on Travis when a .scss file is imported.

#### set up linting for this project
- add `.eslintrc.json` file.
- Use airbnb style guide
- Modify testing script to ensure the test script checks for linting errors before running the tests.

## Naming conventions
Naming things is just as important as code itself. Below are the conventions of this project.

 - For components and containers:
`${NameOfComponent}Component` eg: `UserProfileComponent.jsx`
`${NameOfContainer}Container` eg: `ArticleListContainer.jsx`

- For reducers:
`${nameOfReducer}.reducer.js` eg: `likeArticles.reducer.js`

- For actions:
`${nameOfAction}.action.js` eg: `userProfile.action.js`

- For tests:
`ArticleListComponent.test.js`
`UserProfileContainer.test.js`
`userProfile.action.test.js`
`article.reducer.test.js`
