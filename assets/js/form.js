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

// const db = firestore.collection("contacts");
//Grabing DOM elements

const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userMessage = document.querySelector("#message");
const submit = document.querySelector("#submit");
const db = firestore.collection("contacts");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  let user = userName.value;
  let email = userEmail.value;
  let message = userMessage.value;

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
});
