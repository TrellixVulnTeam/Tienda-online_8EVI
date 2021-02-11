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





// -------------------------------carrito


function agregarCarrito(html) {
  let car = getLocalStorage("carrit");
  
  console.log("antes del if cart.push",car)
  if (!car) car = [];
  
  console.log("antes del cart.push",car)
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
  console.log(val )
  return val;
}

function addProductos(data) {
  let url = window.location.href;
  url = new URL(url);
  let c = url.searchParams.get("categoria");
  console.log("categoria", c);

  const nombre = "Tarro tupperware 3ml 111121212";
  //ombre: "tuperware 1", img: "https://picsum.photos/200/300", precio: "2.6", detalle:

  data.map((item) => {
    let html = ` <div class="card w3-card card-detalles-main  " style="border-radius:5px;">

     <figure class="card-img">
       <img src="${item.img}" alt="" srcset="">
       <figcaption class="w3-center">${item.nombre}</figcaption>
     </figure>
     <!-- seccion trasera de la tarjta -->
     <div id="down" class="down-descript">
       <span class="down-description-span">${item.detalle}</span>
     </div>


     <div class="back-black-container detalles-span">
       <div class="detalles-contador">
         <button id="mostrar-detalles" class="btn-detalles-card" onclick="showDeta()">Ver detalles</button>
         <div class="contador">
           <span>Cantidad:</span>
           <input id="${item.nombre}" style="max-width: 50px; text-align: center;" placeholder="0" type="number" min="1" value=1 >

         </div>
       </div>

       <button id="dsd" class="botones " style="background-color: transparent;"
         onclick="agregarCarrito( document.getElementById('${item.nombre}') )">

         <span class="w3-btn detalles-btn">
           Agregar al carrito
           <i id="carrito-icon-btn"></i>
         </span>

       </button>
     </div>
   </div>
   `;

    document.getElementById("container-productos").innerHTML += html;
  });
}

function isCargada() {
  //usage:
  readTextFile("./productos.json", function (text) {
    console.log(text);
    var data = JSON.parse(text);
    console.log(data);
  });
}

function readTextFile(file, callback) {
  fetch("./productos.json")
    .then((response) => response.json())
    .then((data) => {
      addProductos(data);
      console.log("data", data);
      return data;
    })
    .catch((error) => console.log("error", error));
}
