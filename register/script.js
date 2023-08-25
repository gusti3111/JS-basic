const usernameError = document.getElementById("usernameError")
const passwordError = document.getElementById("passwordError")
const emailError = document.getElementById("emailError")


// logic
 
  


const validateUsername = () =>{
    const username_input = document.getElementById("username").value
    if(username_input .trim() === ''){
         usernameError.textContent="username should not empty"
      
        
       
    }else if(username_input.length < 5){
        usernameError.textContent = "username is too short"
  
    
       

    } else{
        usernameError.textContent = '';
    }
    
    // alert("please insert your username")
}

const validatePassword = () =>{
    const password_input = document.getElementById("password").value
    if(password_input.trim() === ""){
        passwordError.textContent = "password should not empty"

    }else if(!/[A-Z]/.test(password_input)){
        passwordError.textContent = "password at least have one upperCase"
    }else if(!/[a-z]/.test(password_input)){
        passwordError.textContent = "password at least have one lower case"
    }else if(!/\d/.test(password_input)){
        passwordError.textContent = "password at least have one number "
    }
    else{
        passwordError.textContent = ""
    }
}
const validateEmail = () =>{
    const email_input = document.getElementById("email").value
    if(email_input.trim() === ""){
        emailError.textContent = "emails should not empty"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_input)){
        emailError.textContent = "invalid email format"
    }else{
        emailError.textContent = '';

    }
    
}
const signup = () =>{
    if(validateUsername && validateEmail && validatePassword){
        const email_input = document.getElementById("email").value
        const password_input = document.getElementById("password").value
        const username_input = document.getElementById("username").value
        if(username_input ==="user123"&& email_input ==="user@gmail.com"&& password_input ==="123Aa"){
            window.location.href = "/login/index.html"
        }else{
            alert("invalid credential")
        }
    }


}