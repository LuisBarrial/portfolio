window.addEventListener('beforeunload',()=>{history.scrollRestoration = 'manual';
})
window.addEventListener('load' , yourFunc);

function yourFunc (){
let el1 =document.getElementsByTagName('html')[0]; 
 setTimeout(()=>{
 let el2  = document.getElementById('preloader')
 if(el1) el1.style.overflow = 'visible';
 if(el2) el2.style.display = 'none';
 },1500)
};