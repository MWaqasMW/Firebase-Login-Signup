
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { getFirestore,collection, addDoc,doc, setDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyB4-JhzEvKmE8ev_x31erz0I41sFSTT_gs",
    authDomain: "login-signup-1-ed864.firebaseapp.com",
    projectId: "login-signup-1-ed864",
    storageBucket: "login-signup-1-ed864.appspot.com",
    messagingSenderId: "561497871619",
    appId: "1:561497871619:web:6c75f55d438d10cf370536"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);





   let signupBtn = document.getElementById("signUp");
  signupBtn &&  signupBtn.addEventListener ("click", async(e)=>{
   let  email = document.getElementById("user-email")
   let  password = document.getElementById("password")
   let  phone = document.getElementById("user-number")
  let  user = document.getElementById("user-name")


   let userData ={
   user:user.value,
  phone: phone.value,
   email :  email.value ,
  password:password.value,
   }

createUserWithEmailAndPassword(auth, userData.email, userData.password)
  .then( async(userCredential) => {
    // Signed in 
    const user = userCredential.user;

         await setDoc(doc(db, "users", user.uid), {
        ...userData,
        uid:user.uid
           
          
         });
      ;
    
         localStorage.setItem("userId",user.uid ,)
         location.href="index.html"
        
         console.log("added")
   
     })
         .catch((error) => {
       
           const errorMessage = error.message;
         console.log("errorMessage",errorMessage );
         })

        })



 let loginBtn = document.getElementById("loginBtn")
 loginBtn && loginBtn.addEventListener("click", ()=>{
   let  email = document.getElementById("user-email")
   let  password = document.getElementById("password")

   
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
  try {
console.log("welcome to my website")

  localStorage.setItem("uid", user.uid)

  swal({
    title: "Congratulations",
    text: "Login is Successful",
    imageUrl: "Welcome to my website"
  })
} catch (err) {   console.log(err)
}
  })
  .catch((error) => {

    console.log("error.message",error.message)
  });



})








































// })

  