
const usernameError = document.getElementById("usernameError")
const passwordError = document.getElementById("passwordError")


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
    const password_input = document.getElementById("pass").value
    if(password_input.trim() === ""){
        passwordError.textContent = "password should not empty"

    }else if(!/[A-Z]/.test(password_input)){
        passwordError.textContent = "password at least have one upperCase"
    }else if(!/[a-z]/.test(password_input)){
        passwordError.textContent = "password at least have one lower case"
    }else if(!/\d/.test(password_input)){
        passwordError.textContent = "password at least have one number "
    }
}
const login = () =>{
    if(validateUsername && validatePassword){
        const password_input = document.getElementById("pass").value
        const username_input = document.getElementById("username").value
        if(username_input === "user123" && password_input === "123Aa"){
            window.location.href = "room.html";
        }else{
            alert("invalid credentials try again")
        }
    }

}