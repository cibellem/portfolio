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

//Submit event and check if inputs are empty
submit.addEventListener("click", function (event) {
  event.preventDefault();

  let user = userName.value;
  let email = userEmail.value;
  let message = userMessage.value;
  if (!user || !email || !message) {
    console.log("missing");
    let container = document.querySelector(".container");
    let error = document.createElement("p");
    let errorMsg = document.createTextNode("You are missing something! :)");
    error.classList.add("error-msg");
    error.appendChild(errorMsg);
    container.prepend(error);
    //in 4 sec message will be none
    setTimeout(function () {
      error.classList.add("error-msg-hide");
    }, 3000);
  } else {
    console.log("sent");
    let container = document.querySelector(".container");
    let success = document.createElement("p");
    let successMsg = document.createTextNode(
      "Thanks! I will reach out back soon :)"
    );
    success.classList.add("success-msg");
    success.appendChild(successMsg);
    container.prepend(success);
    //in 4 sec message will be none
    setTimeout(function () {
      success.classList.add("success-msg-hide");
    }, 3000);

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
