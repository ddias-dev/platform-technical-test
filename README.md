# Platgform Techinical Test (Serverless - AWS Node.js Typescript)

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Test your service

This project is using Serverless Offline plugin that emulates AWS λ and API Gateway on your local machine to speed up your development cycles. To do so, it starts an HTTP server that handles the request's lifecycle like APIG does and invokes your handlers.

### Using NPM

- Run `npm start` to start the services locally
- Run `npm test` to run the tests

### Using Yarn

- Run `yarn start` to start the services locally
- Run `yarn test` to run the tests

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas and tests

### 3rd party libraries

- [@hawkeyesec/scanner-cli](https://github.com/hawkeyesec/scanner-cli) - is a project security, vulnerability and general risk highlighting tool. It is meant to be integrated into your pre-commit hooks and your pipelines.
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file.
- [eslint](https://github.com/eslint/eslint) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [husky](https://github.com/typicode/husky) - Husky improves your commits and more 🐶 woof!
- [jest](https://github.com/facebook/jest) - Delightful JavaScript Testing.
- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base.
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object.
- [nodemon](https://github.com/remy/nodemon) - a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [prettier](https://github.com/prettier/prettier) - is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Risks

The risks associated with APIs are exacerbated in a situation in which serverless resources are being automatically scaled-up to accommodate increased user demand. With automatic scaling, if you’re leaking data, you could start leaking data even faster.
