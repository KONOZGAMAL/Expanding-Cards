
let imgs = document.querySelectorAll('.imgs')

imgs.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(!e.classList.contains("active")) {
            fun()
            e.classList.add("active");
        }
    })
})
const fun =()=>{
 imgs.forEach((el)=>{
    el.classList.remove("active");
 })
}