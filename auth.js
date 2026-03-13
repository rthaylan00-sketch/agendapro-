alert ("auth carregado");
import { auth } from "./firebase.js";

import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



function login(){

const email = document.getElementById("email").value;

const senha = document.getElementById("senha").value;


signInWithEmailAndPassword(auth, email, senha)

.then(() => {

window.location.href = "dashboard.html";

})

.catch((error) => {

document.getElementById("msg").innerText = error.message;

});

}


window.login = login;
