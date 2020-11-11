// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
const firebaseConfig = {
  apiKey: "AIzaSyAM_ZQNl8UVLn7XYsnqtQvTn28dmAR-ufE",
  authDomain: "grocerylist-459c5.firebaseapp.com",
  databaseURL: "https://grocerylist-459c5.firebaseio.com",
  projectId: "grocerylist-459c5",
  storageBucket: "grocerylist-459c5.appspot.com",
  messagingSenderId: "225456916152",
  appId: "1:225456916152:web:aac704f300fcc54730964d"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function(){

  $("li").each(function(){
    let value = $(this).text()
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value// do something with this
    });
  });
});