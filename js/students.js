// js/students.js
import { db, auth } from './firebase.js';
import { addDoc, collection, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

const list = document.getElementById('studentsList');
window.addStudent = async function(e){
  e.preventDefault();
  const name = document.getElementById('s_name').value;
  const klass = document.getElementById('s_class').value;
  const sid = document.getElementById('s_id').value;

  await addDoc(collection(db,'students'),{name,klass,sid,createdAt:new Date()});
  document.getElementById('studentForm').reset();
  alert('تم إضافة الطالب');
};

// live list
const q = query(collection(db,'students'), orderBy('createdAt','desc'));
onSnapshot(q, snap=>{
  list.innerHTML = '';
  snap.forEach(d=>{
    const data = d.data();
    const el = document.createElement('div');
    el.className='card';
    el.innerHTML = `<strong>${data.name}</strong><div>الصف: ${data.klass}</div><div>ID: ${data.sid}</div>`;
    list.appendChild(el);
  });
});