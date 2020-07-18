import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-database";
import "firebase/firebase-storage";
import "firebase/firebase-analytics";
import "firebase/firebase-auth";
import * as firebaseui from "firebaseui";

var firebaseConfig = {
  apiKey: "AIzaSyAbciB5iYgfj4LXWJXoQUHEQL8gW6oM1ps",
  authDomain: "the-living-haiku.firebaseapp.com",
  databaseURL: "https://the-living-haiku.firebaseio.com",
  projectId: "the-living-haiku",
  storageBucket: "the-living-haiku.appspot.com",
  messagingSenderId: "1013068810879",
  appId: "1:1013068810879:web:8db3117709a5bff8c10d4a",
  measurementId: "G-S7C7265WXH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initizalize Firebase UI
// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: "<url-to-redirect-to-on-success>",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: "<your-tos-url>",
  // Privacy policy url/callback.
  privacyPolicyUrl: function () {
    window.location.assign("<your-privacy-policy-url>");
  },
};
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
