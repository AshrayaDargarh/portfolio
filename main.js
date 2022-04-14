//Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBGiVMfmz63i16LJMDWA_7XK10MrJDRHqY",
    authDomain: "contactform-5d398.firebaseapp.com",
    databaseURL: "https://contactform-5d398-default-rtdb.firebaseio.com",
    projectId: "contactform-5d398",
    storageBucket: "contactform-5d398.appspot.com",
    messagingSenderId: "101071239231",
    appId: "1:101071239231:web:8a15f77f83e217f3fbe08a",
    measurementId: "G-JQCKRCG36B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//Reference messages collection
var messageRef=app.database().ref('messages')

document.getElementById('contactForm').addEventListener('submit',submitForm)

//Submit form
function submitForm(event)
{
event.preventDefault();
// Get values
var name=getInputVal('name');
var email=getInputVal('email');
var subject=getInputVal('subject');
var message=getInputVal('message');

// Save message
saveMessage(name,email,subject,message);

}
// To get form value
function getInputVal(id)
{
return document.getElementById(id).value;
}
// save message to firebase
function saveMessage(name,email,subject,message)
{
    var newMessageRef=messageRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        subject:subject,
        message:message
    });
}