
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 

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
  var messageDiv=document.getElementById("loginmessage");
  loginmessage.style.display="block";
  loginmessage.innerHTML=message;
  loginmessage.style.opacity=1;
  setTimeout(function(){
      messageDiv.style.opacity=0;
  },5000);
}
const signIn=document.getElementById('signinbtn');
signIn.addEventListener('click', (event)=>{
event.preventDefault();
const email=document.getElementById('mailonlogin').value;
const password=document.getElementById('passonlogin').value;
const auth=getAuth();
signInWithEmailAndPassword(auth, email,password)
.then((userCredential)=>{
    const user=userCredential.user;
    localStorage.setItem('loggedInUserId', user.uid);
    window.location.href='weather.html';
})
.catch((error)=>{
  const errorCode=error.code;
  if(errorCode==='auth/invalid-credential'){
      showMessage('Incorrect Email or Password');
  }
  else{
      showMessage('Account does not Exist');
  }
})

})