import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgSwpGRg7kasPOE0YF8DJ1nCRV2kwoj6Y",
  authDomain: "eleto-industries.firebaseapp.com",
  projectId: "eleto-industries",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error");

  errorDiv.innerText = "";

  if (!email || !password) {
    errorDiv.innerText = "Please fill all fields";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "/eleto-admin/";
  } catch {
    errorDiv.innerText = "Invalid email or password";
  }
};
