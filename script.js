document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const key='hungarock-demo-visits';
const count=(Number(localStorage.getItem(key)||0)+1);
localStorage.setItem(key,count);
document.getElementById('visit-count').textContent=count;
