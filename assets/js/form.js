// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC52PAOtRTH6rW1ENR51KdSsSnKZTGqFGE",
  authDomain: "contact-form-portfolio-61dfa.firebaseapp.com",
  databaseURL: "https://contact-form-portfolio-61dfa.firebaseio.com",
  projectId: "contact-form-portfolio-61dfa",
  storageBucket: "contact-form-portfolio-61dfa.appspot.com",
  messagingSenderId: "808342677893",
  appId: "1:808342677893:web:8047798b7e9e93fb2e3cec",
  measurementId: "G-975E7P66D1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

//Grabing DOM elements

const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userMessage = document.querySelector("#message");
const submit = document.querySelector("#submit");
//Connection to my colletions with Firebase
const db = firestore.collection("contacts");
var form_being_submitted = false;

//Submit event and check if inputs are empty
submit.addEventListener("click", function (event) {
  event.preventDefault();
  var buttonSubmit = event.target;
  var text;
  let user = userName.value;
  let email = userEmail.value;
  let message = userMessage.value;
  if (!user || !email || !message) {
    text = "You are missing something...";

    document.getElementById("error").innerHTML = text;
  } else {
    text = "Thank you!  I will get back to you soon!";
    document.getElementById("error").innerHTML = text;
    db.doc()
      .set({
        name: user,
        email: email,
        message: message,
      })
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  }
});
