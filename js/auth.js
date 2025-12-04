// js/auth.js
import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

window.login = async function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pass  = document.getElementById('password').value;
  const role = document.querySelector('input[name="role"]:checked').value;

  try{
    const userCred = await signInWithEmailAndPassword(auth,email,pass);
    // redirect based on role (we will trust stored role in users collection)
    location.href = 'dashboard.html';
  }catch(err){
    // if user not found, offer create
    if(confirm('User not found. Create new account?')){
      await createUserWithEmailAndPassword(auth,email,pass).then(async uc=>{
        // save role
        await setDoc(doc(db,'users',uc.user.uid),{email,role,createdAt:new Date()});
        alert('تم إنشاء الحساب');
        location.href='dashboard.html';
      });
    }else{
      alert(err.message);
    }
  }
};

onAuthStateChanged(auth,user=>{
  if(user){
    // user logged in
  }
});

window.logout = async ()=>{ await auth.signOut(); location.href='index.html'; };