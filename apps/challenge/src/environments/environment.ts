// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:3333/api',
  API_SVC_SWITCH: true,
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyBD5PftOHZNYiJSSNyNIKV_r74VM0XmH-I",
    authDomain: "backend-challenge-e45fc.firebaseapp.com",
    databaseURL: "https://backend-challenge-e45fc.firebaseio.com",
    projectId: "backend-challenge-e45fc",
    storageBucket: "backend-challenge-e45fc.appspot.com",
    messagingSenderId: "780078106589",
    appId: "1:780078106589:web:f1f822240cac854b751834"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
