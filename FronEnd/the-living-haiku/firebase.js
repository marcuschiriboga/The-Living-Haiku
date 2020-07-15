import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-database";
import "firebase/firebase-storage";




<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.16.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.16.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
  <script src="/__/firebase/init.js"></script> 

  var firebaseConfig = {
    apiKey: "AIzaSyAbciB5iYgfj4LXWJXoQUHEQL8gW6oM1ps",
    authDomain: "the-living-haiku.firebaseapp.com",
    databaseURL: "https://the-living-haiku.firebaseio.com",
    projectId: "the-living-haiku",
    storageBucket: "the-living-haiku.appspot.com",
    messagingSenderId: "1013068810879",
    appId: "1:1013068810879:web:8db3117709a5bff8c10d4a",
    measurementId: "G-S7C7265WXH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
