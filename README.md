# express-todo-app
[![license](https://img.shields.io/badge/license-MIT_License_with_anime_exception-green.svg)](https://github.com/8cy/node-002/blob/master/LICENSE)

During a casual Reddit browsing session, I came across a post (can't remember which sub) that caught my eye. A [site](https://what-to-code.com/) which gives you random project ideas. The first idea I saw which interested me was the todo list project, so here we are.

Site in reference: "[What to Code?](https://what-to-code.com/)".

## Features
* Add TODOs to your TODO database.
* Thoroughly commented code.

*lol*

## Tech
* [express](https://www.npmjs.com/package/express) for server
* [MongoDB](https://www.npmjs.com/package/mongodb) for database.
* [Embedded JavaScript templates](https://www.npmjs.com/package/ejs) for templating engine.

# Setup
1. `$ npm install` to install dependencies.
2. Make a `.env` file in the root of the project structure and follow the example bellow.
    1. Copy and paste; `MONGODB_URI=example` into the `.env` file you just created.
    2. Replace `example` with your MongoDB connection string URI.
    3. The final `.env` file should look something like this;
    ```sh
    MONGODB_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
    ```
3. Finally, do `$ node server.js` to start up the app. The default localhost URL should be `http://localhost:1337`.

## TODO ~*lol*
Feel free to take these things as inspiration as I will probably not be updating this repository all that much.

* Implement change and delete feature.
* Make UI cooler
* Add API
* Add user system

### Links
* [Website](https://kyzer.co/)
* [GitHub](https://github.com/8cy/express-todo-app)

### License
MIT
