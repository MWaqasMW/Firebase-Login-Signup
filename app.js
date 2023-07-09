

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

  import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  import { getFirestore , collection, addDoc ,getDocs ,doc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCD03uh2aQWGYB1IsZh1o7zjV0DxLrCSMw",
    authDomain: "login-signup-9fca4.firebaseapp.com",
    projectId: "login-signup-9fca4",
    storageBucket: "login-signup-9fca4.appspot.com",
    messagingSenderId: "485276283878",
    appId: "1:485276283878:web:8ae6c7c7de45b8cfda9c27"
  };


  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app);



  let btn = document.getElementById("button");
  btn.addEventListener("click", ()=>{
 
   let  email = document.getElementById("user-email")
  let   password = document.getElementById("password")
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
      await setDoc(doc(db, "cities", user.uid), {
     ...userData,
     user:user.uid
      });
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








let getAlluser=async()=>{
  const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${user.id} =>` , doc.data());
});
}

getAlluser();

})
// signInWithEmailAndPassword(auth, userData.email,userData.password)
//   .then  ( async(userCredential) => {
    
//     const user = userCredential.user;
// console.log("user",user)
//   })
//   .catch((error) => {

//     const errorMessage = error.message;

//     console.log("errorMessage",errorMessage)
//   });








// const Wheather =async()=>{

//  const  karachi = ()=>{
  
//   new Promise((resolve, reject) => {
//       setTimeout(()=>{
       
//         console.log("30'C ")
//   }, 6000)
//     })
    
  
// }
// const  lahore =()=>{
  
//   new Promise((resolve, reject) => {
//       setTimeout(()=>{
        
//         console.log("30'C")
//   }, 2000)
//     })
    
  
// }
// let karachiW= await karachi
// console.log("please wait karachi",karachiW)

// let lahoreW= await lahore
// console.log("please wait karachi",lahoreW)

// }


// let a=Wheather()
// console.log(a)
