# Netflix_Clone

This application (a Netflix clone) was built using React (Custom Hooks, Context) & Firebase. I have built the following pages within this application: sign in, sign up, browse & lastly the homepage. \
There are four different pages, some using protected routes with auth listeners.\
Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

## Demo Live

The App is live at https://netflix-clone-c53b5.web.app/

## Quick Start

### Install server dependencies

### `npm install`

### Adding Firebase to your web service. 

Follow this link https://cloud.google.com/appengine/docs/standard/python3/building-app/adding-firebase

### Go to \src\lib\firebase.prod.js, change the config with your key:
```
 { 
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  ```
  
  and following the instruction in this.
### `npm start`
