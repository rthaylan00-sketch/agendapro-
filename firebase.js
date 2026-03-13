// importar funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeQD2PNlXf2j8lTbit6ktOZR2FtAufLbY",
  authDomain: "agendapro-788d0.firebaseapp.com",
  projectId: "agendapro-788d0",
  storageBucket: "agendapro-788d0.firebasestorage.app",
  messagingSenderId: "627296929583",
  appId: "1:627296929583:web:a3c247f73748154e1a43da",
  measurementId: "G-81K2L2E8H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// iniciar Firebase
const app = initializeApp(firebaseConfig);


// iniciar autenticação
const auth = getAuth(app);


// exportar para outros arquivos
export { auth };
