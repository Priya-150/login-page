// --------- Signup ----------
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Signup Successful!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => alert(error.message));
  });
}

// --------- Login (Email/Password) ----------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => alert(error.message));
  });
}

// --------- Google Login ----------
const googleLoginBtn = document.getElementById("googleLogin");
if (googleLoginBtn) {
  googleLoginBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => alert(error.message));
  });
}

// --------- Phone Login (Demo OTP prompt) ----------
const phoneLoginBtn = document.getElementById("phoneLogin");
if (phoneLoginBtn) {
  phoneLoginBtn.addEventListener("click", () => {
    const phone = prompt("Enter your phone number:");
    if (phone) {
      alert("OTP sent to " + phone + " (integrate Firebase Phone Auth here)");
    }
  });
}

// --------- Dashboard Info + Logout ----------
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      window.location.href = "index.html";
    });
  });
}

const userInfo = document.getElementById("userInfo");
if (userInfo) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      userInfo.innerText = `Logged in as: ${user.email || user.phoneNumber}`;
    } else {
      window.location.href = "index.html";
    }
  });
}
