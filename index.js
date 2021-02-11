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
let closeNav = () =>  menuIcono.style.display = "none";


// muestra los detalles de cada card
function showDeta() {
  let boton = document.getElementById("down");
  //  boton.style.display = "none"
  if (boton.style.display === "block") {
    return (boton.style.display = "none");
  } else boton.style.display === "none";
  {
    boton.style.display = "block";
  }
}

// logica del icono de menu
let menuIcono = document.getElementById("myNav");

function openNav() {
  // console.log('si est oy llegadno1')
  if (menuIcono.style.display === "none") {
    // console.log('si estoy llegadno2')
    return (menuIcono.style.display = "block");
  } else {
    closeNav();
  }
}
function closeNav() {
  // let closeIcono = document.getElementById('myNav')

  return (menuIcono.style.display = "none");
}

function agregarCarrito(html) {
  let car = getLocalStorage("carrito");
  if (!car) car = [];

  car.push({ [html.id]: html.value });
  saveLocalstorage("carrito", car);
  //   const obj = { id, Valor };
}

function saveLocalstorage(key, data) {
  console.log("guarda data", data);
  window.localStorage.setItem(key, data);
}

function getLocalStorage(key) {
  const val = window.localStorage.getItem(key);
  return val;
}

function addProductos(categoria) {
  const nombre = "Tarro tupperware 3ml 111121212";

  let html = ` <div class="card w3-card card-detalles-main  " style="border-radius:5px;">

     <figure class="card-img">
       <img src="./img/jpegs/tarros/img-jpgs/tarro-calaveras-colores.jpg" alt="" srcset="">
       <figcaption class="w3-center">${nombre}</figcaption>
     </figure>
     <!-- seccion trasera de la tarjta -->
     <div id="down" class="down-descript">
       <span class="down-description-span">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam sint
         eos accusantium cumque nobis exercitationem quae officia repellat? Aliquam vel exercitationem incidunt in
         tenetur fugiat commodi optio consequuntur laudantium!
         Fugiat distinctio, dolores esse ipsa recusandae </span>
     </div>


     <div class="back-black-container detalles-span">
       <div class="detalles-contador">
         <button id="mostrar-detalles" class="btn-detalles-card" onclick="showDeta()">Ver detalles</button>
         <div class="contador">
           <span>Cantidad:</span>
           <input id="${nombre}" style="max-width: 50px; text-align: center;" placeholder="0" type="number" min="1" value=1 >

         </div>
       </div>

       <button id="dsd" class="botones " style="background-color: transparent;"
         onclick="agregarCarrito( document.getElementById('${nombre}') )">

         <span class="w3-btn detalles-btn">
           Agregar al carrito
           <i id="carrito-icon-btn"></i>
         </span>

       </button>
     </div>
   </div>
   `;

  document.getElementById("container-productos").innerHTML += html;
}

function isCargada() {
  const ssds = window.location.href;

  console.log("location", ssds);

  addProductos();
}
