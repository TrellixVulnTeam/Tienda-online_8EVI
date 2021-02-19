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




function agregarCarrito(cantidad, item) {
 

  let item2 = JSON.parse(atob(item));
  item2.numeroProductos = cantidad;
  
  item2.precio = (cantidad * item2.precio)
  console.log("item2 depues", item2)
    
 


  let car = getLocalStorage("carrito");

  if (!car) car = [];
  else {
    car = JSON.parse(car);
    console.log("carrito", car);
  }
  // Comparar con el carrito actual si ya existe el producto para sumarle

  const id = item2.nombre;
  let car2 = []; 
  let existe = car.some((element) => (element.nombre === id))
  console.log("existe", existe)
  if(!existe){
    car.push(item2)
  }
  
    let totalCarrito = 0;
    // recore el carrito
     car2 = car.map(element => {
      console.log("carforecah",element) 
      if(element.nombre === id){
        totalCarrito += item2.precio 
        return item2;
      }
      totalCarrito += element.precio 
       return element

    })
 
    console.log("car2", totalCarrito)
   
    //imprime el ottal de items en el carrito dentro del div naranja del icono cart
    if(car.length == 0){
    document.querySelector(".carrito-cantidad").innerHTML = parseInt(car.length);
    } else {
      document.querySelector(".carrito-cantidad").innerHTML = parseInt(car.length + 1);
    }

  
// verificar si el carrrrito esta vacio para e texto del boton wsp
  // Guardo carrito agregando el producto al array del localstorage
  // car.push(item2);
 
  saveLocalstorage("carrito", car2);
  saveLocalstorage("totalmplecarrito", totalCarrito);
  
  //   const obj = { id, Valor };

}



// ---------------------guardando en local

function saveLocalstorage(key, data) {
  console.log("guarda data", data);
  window.localStorage.setItem(key, JSON.stringify(data));
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

  data = data.filter(({ categorias }) =>
    categorias.some((element) => element === c)
  );

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
    
            <button id="dsd" class="botones" 
            
            style="background-color: transparent; border:none;"

            onclick="agregarCarrito( document.getElementById('${
              item.nombre
            }').value , '${btoa(JSON.stringify(item))}' )">

            <span class="w3-btn detalles-btn">
              Agregar al carrito
              <i id="carrito-icon-btn"></i>
            </span>
          </button>  

         <div class="contador">
           <span>Cantidad:</span>
           <input id="${
             item.nombre
           }" style="max-width: 50px; text-align: center;" placeholder="0" type="number" min="1" value=1 >

         </div>
       </div>



       
     </div>
   </div>
   `;

    document.getElementById("container-productos").innerHTML += html;
  });
}

function isCargada() {
  //usage:
  readTextFile("./productos.json", function (text) {
    console.log("texttext", text);
    const data = JSON.parse(text);
    console.log("texttext2", data);
  });
}

function readTextFile(file, callback) {
  fetch("./productos.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("fetch",data)
      addProductos(data);
      return data;
    })
    .catch((error) => console.log("error del fetch readTextFile", error));
}
