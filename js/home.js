const pintarProductos = (productos) => {
    const contenedor = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${producto.imagen}>
                          <span class="card-title">${producto.nombre}</span>
                        </div>
                        <div class="card-content">
                            <p>${producto.desc}</p>
                            <p>Precio: ${producto.precio}</p>
                            <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${producto.id} class="fa-sharp fa-solid fa-cart-plus agregar"></i></a>
                        </div>
                       `
      contenedor.appendChild(div);
      
    });
  };