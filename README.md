# myCsun-mean-app

This is my first application made using the MEAN stack.

You can find the working app [here](https://mean-csun.herokuapp.com/)

The main functionality of the app is to allow CS students at CSUN to easily plan out their future schedules. Right now, only a handful of classes have been put in, as this app is mainly a proof of concept.

<h2>File Structure</h2>

```
myCsun-mean-app
├── config
|      └── database.js 
|      └── passport.js
├── front-end
├── models
|    └── user.js
├── routes
│   └── schedules.js
│   └── users.js
├──app.js  
└── package.json
```


### Config

Establishes the connection to MongoDB and sets up passport.js

### Front-end

Contains the Angular 2 (4) portion of the application. 

### Models

Defines the user model for the application

### routes 

Defines the various routes that are associated with a user

### app.js

Sets up the preliminary Node.js & Express.js configurations.




