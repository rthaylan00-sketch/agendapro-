function login(){

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

if(email === "teste@email.com" && senha === "123456"){

document.getElementById("msg").innerText = "Login funcionando";

}else{

document.getElementById("msg").innerText = "Email ou senha errado";

}

}
