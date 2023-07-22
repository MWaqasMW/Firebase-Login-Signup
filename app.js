


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics"
import { getFirestore , collection, addDoc ,getDocs ,doc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAsSTcbkHHbXnnsbFv2GIfp1Q9JrN-bPmY",
  authDomain: "chat-app-772e5.firebaseapp.com",
  projectId: "chat-app-772e5",
  storageBucket: "chat-app-772e5.appspot.com",
  messagingSenderId: "594972580748",
  appId: "1:594972580748:web:e6c53f4e1009d9106994a9",
  measurementId: "G-D44KEDY6EX"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
















  let signupBtn = document.getElementById("signUp");
 signupBtn &&  signupBtn.addEventListener ("click", async()=>{
 

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
   
    const user = userCredential.user;
    try {
      await setDoc(doc(db, "users", user.uid), {
     ...userData,
     user:user.uid
     
    
      });
      Swal.fire({
        icon: 'success',
        title: 'User register successfully',
    })
      localStorage.setItem("userId",user.uid)
      location.href="index.html"
      // console.log("Document written with ID: ", docRef.id);
      console.log("added")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })
  .catch((error) => {
 
    const errorMessage = error.message;
   console.log("errorMessage",errorMessage );
  });












  




let loginBtn = document.getElementById("loginBtn")
signInWithEmailAndPassword(auth, userData.email,userData.password)
  .then ( async(userCredential) => {

  await  userData.email,userData.password
console.log("user",user)
  })
  .catch((error) => {

    const errorMessage = error.message;

    console.log("errorMessage",errorMessage)
  });


// let getAlluser=async()=>{
//   const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${user.id} =>` , doc.data());
// });
// }



// getAlluser();


})
  