// js/lang.js
export let currentLang = 'ar';

const translations = {
  ar:{ login:'تسجيل الدخول', email:'البريد الإلكتروني', password:'كلمة المرور', dashboard:'لوحة التحكم', students:'الطلاب', grades:'العلامات', reports:'التقارير', school:'نظام إدارة المدرسة' },
  en:{ login:'Login', email:'Email', password:'Password', dashboard:'Dashboard', students:'Students', grades:'Grades', reports:'Reports', school:'School Management System' }
};

export function switchLang(){
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  document.querySelectorAll('[data-lang]').forEach(el=>{
    const key = el.dataset.lang;
    if(translations[currentLang] && translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
}

// attach buttons
window.switchLang = switchLang;

// init clickable buttons if exist
['langBtn','langBtn2','langBtn3','langBtn4','langBtn5'].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener('click', switchLang);
});