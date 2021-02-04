// al presionar el boton de ver detalles se le agrega una clase  que sera la encargada de mostrar el frente
function showDeta(){
     let boton = document.getElementById('down')
    //  boton.style.display = "none"
     if(boton.style.display === "block")
     {
         return boton.style.display = "none" 
     } 
     else (boton.style.display === "none")
     {
          boton.style.display = "block" 
     } 
}