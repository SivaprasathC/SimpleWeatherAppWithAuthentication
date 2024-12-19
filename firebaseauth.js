
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"
const firebaseConfig = {
  apiKey: "AIzaSyDPuTZEC0nhZE0cwun0-CFI0UXMSrleePc",
  authDomain: "authenticationweather.firebaseapp.com",
  projectId: "authenticationweather",
  storageBucket: "authenticationweather.firebasestorage.app",
  messagingSenderId: "470993383249",
  appId: "1:470993383249:web:f6ad235cd35a948fbbad70"
};
initializeApp(firebaseConfig);
function showMessage(message){
    var messageDiv=document.getElementById("registermessage");
    registermessage.style.display="block";
    registermessage.innerHTML=message;
    registermessage.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }
const signup= document.getElementById('signupbtn');
signup.addEventListener('click',(event=>{
    event.preventDefault();
    const email=document.getElementById('mail').value;
    const password=document.getElementById('pass').value;
    const Name=document.getElementById('name').value;
    const phone=document.getElementById('ph').value;
    const auth=getAuth();
    const db=getFirestore();
createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
    const user=userCredential.user;
    const userData={
        email: email,
        Name: Name,
        phone:phone
    };
    showMessage('Account Created Successfully');
    const docRef=doc(db, "users", user.uid);
    setDoc(docRef,userData)
    .then(()=>{
        window.location.href='weather.html';
    })
    .catch((error)=>{
        console.error("error writing document", error);

    });
})
.catch((error)=>{
    const errorCode=error.code;
    if(errorCode=='auth/email-already-in-use'){
        showMessage('Email Address Already Exists !!!');
    }
    else{
        showMessage('unable to create User');
    }
})
}))
