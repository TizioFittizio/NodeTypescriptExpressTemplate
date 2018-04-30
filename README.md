# NodeTypescriptExpressTemplate | MongoDB
Boilerplate project typescript + node + express

## Included:
  * Express
  * Typescript with tslint already configured with sonarsource
  * Test with mocha, expect and supertest
  * Pre push hook with husky
  
## With mongo:
  * Mongodb (well...)
  * Mongoose
  * Sample schema with static and model methods
  * Sample routers
  
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
        "PORT": 3000,
        "MONGODB_URI": "mongodb://localhost:27017/NodeTypescriptStarter"
    },
    "development": {
        "PORT": 3000,
        "MONGODB_URI": "mongodb://localhost:27017/NodeTypescriptStarter"
    }
}
```

When deployed, variables like ```MONGODB_URI``` should be provided from the server environment

