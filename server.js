
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    //use ypur credentials :)
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



  //get ref to database services
  const db=getDatabase(app);
  document.getElementsByClassName("stylesub").addEventListener('click',function(e){
      set(ref(db,'user/'+document.getElementById("username").value),{
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        PhoneNo: document.getElementById("phone").value
      });
      alert("Login Succesful");
  })
