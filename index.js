// muestra los detalles de cada card
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




// logica del icono de menu
let menuIcono = document.getElementById('myNav');

function openNav(){
     // console.log('si est oy llegadno1')
     if(menuIcono.style.display === "none")
     {
          // console.log('si estoy llegadno2')
         return menuIcono.style.display = "block" 
     } else {
          closeNav();
     }
     
}
function closeNav(){
     // let closeIcono = document.getElementById('myNav')

          return menuIcono.style.display = "none";
}