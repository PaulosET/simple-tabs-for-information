const tab=document.querySelectorAll(".tab-btn");
const about=document.querySelector('.about');
const article=document.querySelectorAll(".content");
about.addEventListener('click',function(e){
const id =e.target.dataset.id;

if(id){
    tab.forEach(function(tab){
     tab.classList.remove("active");
     
    })
   e.target.classList.add("active")

article.forEach(function(e){
   e.classList.remove("active")
})
  const one=document.getElementById(id);
  one.classList.add("active")
}
})