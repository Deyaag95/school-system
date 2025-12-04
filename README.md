# School Management System

1. استبدل `js/firebase.js` بقيم firebase الخاصة بك.
2. افتح terminal داخل المجلد ثم:

```
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/Deyaag95/school-system.git
git push -u origin main
```

3. لربط Firebase Hosting:

```
npm install -g firebase-tools
firebase login
firebase init
# اختر Hosting و use existing project
firebase deploy
```