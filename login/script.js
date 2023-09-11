// const  { initializeApp }  = require( "firebase/app");
// const { GoogleAuthProvider} = require ( "firebase/auth");
const usernameError = document.getElementById("usernameError")
const passwordError = document.getElementById("passwordError")
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// logic



const validateUsername = () => {
    const username_input = document.getElementById("username").value
    if (username_input.trim() === '') {
        usernameError.textContent = "username should not empty"



    } else if (username_input.length < 5) {
        usernameError.textContent = "username is too short"




    } else {
        usernameError.textContent = '';
    }

    // alert("please insert your username")
}

const validatePassword = () => {
    const password_input = document.getElementById("pass").value
    if (password_input.trim() === "") {
        passwordError.textContent = "password should not empty"

    } else if (!/[A-Z]/.test(password_input)) {
        passwordError.textContent = "password at least have one upperCase"
    } else if (!/[a-z]/.test(password_input)) {
        passwordError.textContent = "password at least have one lower case"
    } else if (!/\d/.test(password_input)) {
        passwordError.textContent = "password at least have one number "
    }
}
const login = () => {
    if (validateUsername && validatePassword) {
        const password_input = document.getElementById("pass").value
        const username_input = document.getElementById("username").value
        if (username_input === "user123" && password_input === "123Aa") {
            window.location.href = "./room.html";
        } else {
            alert("invalid credentials try again")
        }
    }

}
document.getElementById('google-btn').addEventListener('click', () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = firebase.auth.GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      // IdP data available using result.additionalUserInfo
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData?.email;
      // The AuthCredential type that was used.
      const credential = firebase.auth.GoogleAuthProvider.credentialFromError(error);
      // ...
    });
})