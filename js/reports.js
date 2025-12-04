// js/reports.js
import { db } from './firebase.js';
import { collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

window.generateStudentReport = async function(){
  const id = document.getElementById('r_studentId').value.trim();
  if(!id){ alert('ادخل رقم الطالب'); return; }

  // fetch student
  const studentsQ = query(collection(db,'students'), where('sid','==',id));
  const sSnap = await getDocs(studentsQ);
  if(sSnap.empty){ alert('لا يوجد طالب بهذا الرقم'); return; }
  const student = sSnap.docs[0].data();

  // fetch grades
  const gradesQ = query(collection(db,'grades'), where('studentId','==',id));
  const gSnap = await getDocs(gradesQ);
  const grades = gSnap.docs.map(d=>d.data());

  // render HTML
  const area = document.getElementById('reportArea');
  area.innerHTML = `<div class="card"><h3>${student.name}</h3><p>الصف: ${student.klass}</p><ul>${grades.map(g=>`<li>${g.subject} - ${g.score}</li>`).join('')}</ul><button class="btn" id="exportPdf">تصدير PDF</button></div>`;

  document.getElementById('exportPdf').addEventListener('click', ()=>{
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`تقرير الطالب: ${student.name}`, 10, 10);
    doc.text(`الصف: ${student.klass}`, 10, 20);
    let y = 30;
    grades.forEach(g=>{ doc.text(`${g.subject} - ${g.score}`, 10, y); y+=8; });
    doc.save(`${student.name}_report.pdf`);
  });
};