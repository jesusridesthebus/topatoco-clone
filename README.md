# Topatoco Clone

#### 6/14/19, 6/21/19

#### By **Liz Kelley**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Description

Uses Angular to clone [https://www.topatoco.com]

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Setup/Installation Requirements

* _Use Chrome browser_
* _Clone https://github.com/jesusridesthebus/topatoco-clone from Github_
* _Run $ npm install -g @angular/cli@1.6.5 in the command line_
* _Create an account at https://firebase.google.com/_
* _On Firebase, create a project called topatoco-clone_
* _In Firebase, change the rules of the database to_
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
* _Create a database within the project_
* _Create file src/app/api-keys.ts and add the following code, updating API key and other specs to match what the Firebase site shows in the Firebase SDK snippet config._
```
export const masterFirebaseConfig = {
    apiKey: XXXX,
    authDomain: "topatoco-clone.firebaseapp.com",
    databaseURL: "https://topatoco-clone.firebaseio.com",
    projectId: "topatoco-clone",
    storageBucket: "",
    messagingSenderId: XXXX,
    appId: XXXX
};
```

## Completed Features
* _Navigation Bar_
* _Linked social media icons_


## Known Bugs

_None._

## Support and contact details

_123@123.com_

## Technologies Used

* _Html_
* _Javascript_
* _Typescript_
* _Angular_
* _CSS_
* _NodeJS_
* _Karma_
* _Firebase_

### License

Copyright (c) 2019 **_Liz Kelley_**

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
