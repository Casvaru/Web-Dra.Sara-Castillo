const containerMenu = document.getElementById("containerMenu")
const btnMenu = document.getElementById('btnMenu');
const line1 = document.getElementById('menuLine1');
const line2 = document.getElementById('menuLine2');
const line3 = document.getElementById('menuLine3');

btnMenu.addEventListener("click", ()=>{
    line1.classList.toggle("lineSetActive")
    line2.classList.toggle("lineSetActive2")
    line3.classList.toggle("lineSetActive3")
    containerMenu.classList.toggle("containerMenu--Active")
})

//------------------------------------------------------------//

const btnCategoria1 = document.getElementById("categoria1")
const btnCategoria2 = document.getElementById("categoria2")
const carousel1 = document.getElementById("carouselodontologia")
const carousel2 = document.getElementById("carouselcirugia")

btnCategoria1.addEventListener("click", ()=>{
    btnCategoria1.classList.add("containerCategorias__servicio1")
    btnCategoria1.classList.remove("containerCategorias__servicio2")
    btnCategoria2.classList.remove("containerCategorias__servicio1")
    btnCategoria2.classList.add("containerCategorias__servicio2")
})
btnCategoria2.addEventListener("click", ()=>{
    btnCategoria1.classList.remove("containerCategorias__servicio1")
    btnCategoria1.classList.add("containerCategorias__servicio2")
    btnCategoria2.classList.remove("containerCategorias__servicio2")
    btnCategoria2.classList.add("containerCategorias__servicio1")
})

btnCategoria2.addEventListener("click", ()=>{
    carousel2.classList.add("showCarousel")
    carousel1.classList.add("hiddenCarousel")
})
btnCategoria1.addEventListener("click", ()=>{
    carousel2.classList.remove("showCarousel")
    carousel1.classList.remove("hiddenCarousel")
})


