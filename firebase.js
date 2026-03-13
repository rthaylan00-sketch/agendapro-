// importar funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// configuração do projeto
const firebaseConfig = {

  apiKey: "SUA_API_KEY",

  authDomain: "SEU_DOMINIO",

  projectId: "SEU_PROJECT_ID",

  storageBucket: "SEU_BUCKET",

  messagingSenderId: "SEU_ID",

  appId: "SEU_APP_ID"

};


// iniciar Firebase
const app = initializeApp(firebaseConfig);


// iniciar autenticação
const auth = getAuth(app);


// exportar para outros arquivos
export { auth };
