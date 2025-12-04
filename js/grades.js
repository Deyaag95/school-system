// js/grades.js
import { db } from './firebase.js';
import { addDoc, collection, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

const gradesList = document.getElementById('gradesList');
window.addGrade = async function(e){
  e.preventDefault();
  const studentId = document.getElementById('g_studentId').value;
  const subject = document.getElementById('g_subject').value;
  const score = Number(document.getElementById('g_score').value);

  await addDoc(collection(db,'grades'),{studentId,subject,score,createdAt:new Date()});
  document.getElementById('gradeForm').reset();
  alert('تم حفظ العلامة');
};

const q = query(collection(db,'grades'), orderBy('createdAt','desc'));
onSnapshot(q, snap=>{
  gradesList.innerHTML='';
  snap.forEach(d=>{
    const data=d.data();
    const el=document.createElement('div');
    el.className='card';
    el.innerHTML=`<strong>${data.subject}</strong><div>Student ID: ${data.studentId}</div><div>Score: ${data.score}</div>`;
    gradesList.appendChild(el);
  });
});