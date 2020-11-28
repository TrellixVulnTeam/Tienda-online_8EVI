// ------------------------------slideshow 
let slideIndex = 0;
carrusel();

function carrusel (){
let i;
let slides = document.getElementsByClassName('slide-img-items');
for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
}

slideIndex++;

if(slideIndex > slides.length){
    slideIndex = 1;
}
slides[slideIndex - 1].style.display = "block";
setTimeout(carrusel, 2000);
}




let boton = getElementsById("comprar");

function comprar(){
    alert("Gracias por realizar su comprar, fue un exito.")
}