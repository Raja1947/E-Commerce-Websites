const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const closeBtn=document.getElementById('close');


bar.addEventListener('click', ()=>{
    nav.style.transform='translate(0)'
})
closeBtn.addEventListener('click', ()=>{
    nav.style.transform='translateX(100%)'  
})