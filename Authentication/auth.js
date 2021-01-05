auth.onAuthStateChanged(user =>{
    if(user){
        console.log("You Logged In",user);
    }
    else{
        console.log("You Logged Out");
    }
})
// SignUp
const signupForm = document.querySelector("#sign-up");

signupForm.addEventListener("submit",(e) =>{
    e.preventDefault();

    // get User Info
    const signup_Email = signupForm['signup-email'].value;
    const signup_Password = signupForm['signup-password'].value;

    // Sign Up the User
    auth.createUserWithEmailAndPassword(signup_Email,signup_Password).then(cred => {
        console.log(cred.user);
        const modal = document.querySelector("#SignUp_Modal");
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })


})

// LogOut
const logOut = document.querySelector("#LogOut");
logOut.addEventListener("click",(e) =>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log("user LogOut");
    })
})

// Login
const loginForm = document.querySelector("#Login");
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const login_Email = loginForm['Login-email'].value;
    const login_Password = loginForm['Login-password'].value;
    console.log(login_Email,login_Password);
    auth.signInWithEmailAndPassword(login_Email,login_Password).then(cred =>{
        console.log("Login Successfully");
        const loginModal = document.querySelector("#Login_Modal");
        M.Modal.getInstance(loginModal).close();
        loginForm.reset();
    })
})