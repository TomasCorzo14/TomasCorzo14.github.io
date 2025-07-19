const productos = {
  bebidas: [
    {
      categoriaDir: "bebidasCat",
      nombre: "Coca-Cola",
      precio: "$2000",
      imagen: "Coca.png"
    },
    {
      categoriaDir: "bebidasCat",
      nombre: "Agua Mineral",
      precio: "$1500",
      imagen: "agua.png"
    },
    {
      categoriaDir: "bebidasCat",
      nombre: "Sprite",
      precio: "$1900",
      imagen: "Sprite.png"
    }
  ],
  pizzas: [
    {
      categoriaDir: "pizzasCat",
      nombre: "Jamon y Queso",
      precio: "$2000",
      imagen: "JamonYQueso.png"
    },
    {
      categoriaDir: "pizzasCat",
      nombre: "Fugazzeta",
      precio: "$1500",
      imagen: "Fugazzeta.png"
    },
    {
      categoriaDir: "pizzasCat",
      nombre: "Napolitana",
      precio: "$1900",
      imagen: "Napolitana.png"
    }
  ]
};



function renderizarBebidas() {
    const categoria = document.querySelector("#producto").textContent;
console.log(categoria) // ubicamos el título
  const contenedor = document.getElementById("contenedor"); // ubicamos el lugar en el HTML
  contenedor.innerHTML = ""; // limpiamos por si hay algo previo

  productos[categoria].forEach(producto => {
    // Creamos un contenedor para cada producto
    const card = document.createElement("div");
    card.className = "producto";

    // Insertamos contenido HTML dinámicamente dentro del contenedor
    card.innerHTML = `
      <img src="public/images/${producto.categoriaDir}/${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.precio}</p>
    `;

    // Lo agregamos al contenedor principal
    contenedor.appendChild(card);
  });
}

renderizarBebidas();
