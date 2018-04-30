# NodeTypescriptExpressTemplate
Boilerplate project typescript + node + express

## Included:
  * Express
  * Typescript with tslint already configured with sonarsource
  * Test with mocha, expect and supertest
  * Pre push hook with husky
  
## Branch availables:
  * [mongo-starter](https://github.com/TizioFittizio/NodeTypescriptExpressTemplate/tree/mongo-starter)
  
## How to get it work
 * Clone/Download this repository
 * In the root folder, type in terminal ```npm install```
 * Followed by ```npm start``` or ```npm run start```
 * To run the tests, use ```npm run test```

## Configuration
In order to work locally, you must provide a file ```config.json``` inside the config folder, like this:

```
{
    "test": {
        "PORT": 3000
    },
    "development": {
        "PORT": 3000
    }
}
```

When deployed, variable ```PORT``` should be provided from the server environment
