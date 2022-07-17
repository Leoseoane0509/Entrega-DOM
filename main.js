// Declaración de variables globales
let nombreUsuario = prompt("Ingrese su nombre");
let genero = prompt("Ingrese su género");
let saludo;

// Condicional para dar la bienvenida al usuario
if (genero === "masculino" || genero === "Masculino") {
  saludo = alert(`¡Bienvenido, ${nombreUsuario}!`);
} else {
  saludo = alert(`¡Bienvenida, ${nombreUsuario}!`);
}

// Declaración de objetos mediante clase (con sus respectivas propiedades y métodos)
class Producto {
  constructor(nombre, precio, categoria, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.categoria = categoria;
    this.cantidad = cantidad;
    this.disponible = true;
  }
  sumarIva() {
    return this.precio * 1.21;
  }
  Vender() {
    this.disponible = false;
  }

  precioSugerido() {
    return this.precio * 1.21 * 1.25;
  }
}

// Declaración de Array vacío
const arrayProductos = [];

// Ciclo para pedirle al usuario que ingrese el producto a cargar en la base de datos del sistema
let comprobacion;
do {
  comprobacion = prompt(
    "Ingrese un nombre del producto o 'fin' para terminar de agregar"
  );
  if (
    comprobacion === "fin" ||
    comprobacion === "FIN" ||
    comprobacion === "Fin" ||
    comprobacion === null
  ) {
    break;
  } else {
    let nombreProducto = comprobacion;
    let precioProducto = prompt("Ingrese el precio del producto");
    let categoriaProducto = prompt("Ingrese la categoría del producto");
    let cantidadProducto = prompt("Ingrese la cantidad comprada del producto");
    arrayProductos.push(
      new Producto(
        nombreProducto,
        precioProducto,
        categoriaProducto,
        cantidadProducto
      )
    );
  }
} while (
  comprobacion != "fin" ||
  comprobacion != "FIN" ||
  comprobacion != "Fin" ||
  comprobacion != null
);
console.log(arrayProductos);

// Iteración sobre cada elemento del producto (nombre,precio,categoría,cantidad) para ser mostrados en la pantalla del navegador
for (const producto of arrayProductos) {
  let contenedor = document.createElement("div");
  // Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                                            <p> Precio: ${producto.precio}</p>
                                            <p> Cantidad: ${producto.cantidad}
                                            <p> Categoria: ${producto.categoria}`;
  document.body.appendChild(contenedor);
}

// POCO STOCK - MENOS DE 3 PRODUCTOS
// Estos son los productos que voy a mostrar en pantalla siempre y cuando haya menos de 3 en la propiedad 'cantidad' del objeto
let pocoStock = arrayProductos.filter(
  (producto) => producto.cantidad > 0 && producto.cantidad <= 3
);
let headingThree = document.createElement("h3");
headingThree.innerHTML =
  "<h3> Lista de Productos con poco Stock (menos de 3 unidades): </h3>";
document.body.appendChild(headingThree);
for (let producto of pocoStock) {
  let contenedor = document.createElement("div");
  // Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                                            <p> Precio: ${producto.precio}</p>
                                            <p> Cantidad: ${producto.cantidad}
                                            <p> Categoría: ${producto.categoria}`;
  document.body.appendChild(contenedor);
}

// PRODUCTOS SIN STOCK
// Estos son los productos que se van a mostrar en pantalla siempre y cuando su propiedad 'cantidad' sea igual a 0
let sinStock = arrayProductos.filter(
  (producto) => producto.cantidad == 0 || producto.disponible == false
);
console.log(sinStock);
let otroHeadingThree = document.createElement("h3");
otroHeadingThree.innerHTML = "<h3> Lista de Productos sin Stock: </h3>";
document.body.appendChild(otroHeadingThree);

for (let producto of sinStock) {
  let contenedor = document.createElement("div");
  // Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                                            <p> Precio: ${producto.precio}</p>
                                            <p> Cantidad: ${producto.cantidad}
                                            <p> Categoría: ${producto.categoria}`;
  document.body.appendChild(contenedor);
}
// APLICACIÓN DE ESTILOS A LOS NODOS
// Aplicando estilos al BODY
let cuerpo = document.body;
cuerpo.style.backgroundColor = "burlywood";
cuerpo.style.textAlign = "center";
// Aplicando estilos al H1
let headingOne = document.getElementById("titulo1");
headingOne.style.backgroundColor = "cornsilk";
headingOne.style.padding = "20px";
headingOne.style.fontSize = "40px";
headingOne.style.fontFamily = "monospace";
// Aplicando estilos al H2
let headingTwo = document.querySelector("h2");
headingTwo.style.backgroundColor = "rosybrown";
headingTwo.style.padding = "1.5rem";
headingTwo.style.fontFamily = "monospace";
// Aplicando estilos al primer H3
let encabezadoTres = document.querySelector(".titulo3");
encabezadoTres.style.backgroundColor = "brown";
encabezadoTres.style.padding = "2rem";
encabezadoTres.style.color = "#fff";
encabezadoTres.style.fontFamily = "monospace";
encabezadoTres.style.fontSize = "35px";
// Aplicando estilos al segundo H3
headingThree.style.backgroundColor = "blanchedalmond";
headingThree.style.padding = "20px";
headingThree.style.fontFamily = "monospace";

// Aplicando estilos al tercer H3
otroHeadingThree.style.backgroundColor = "beige";
otroHeadingThree.style.padding = "20px";
otroHeadingThree.style.fontFamily = "monospace";
