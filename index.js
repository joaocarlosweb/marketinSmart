const myobserve = new IntersectionObserver((obeserve) =>{
    obeserve.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    }else{
        entry.target.classList.remove('show')
    }
}  )
})
const elementos= document.querySelectorAll(".hidden");
elementos.forEach((elemento)=> myobserve.observe(elemento));