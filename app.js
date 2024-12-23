// Productos por categoría
const productosPorCategoria = {
    'bebidas-calientes': [
        { nombre: 'Café Americano', precio: 3.00,imagen: './images/bebidasCalientes/cafe-caliente.jpg' },
        { nombre: 'Capuccino', precio: 5.50,imagen: './images/bebidasCalientes/capuccino-caliente.jpg' },
        { nombre: 'Café Moccha', precio: 6.00,imagen: './images/bebidasCalientes/cafe-mocha.jpg' },
        { nombre: 'Café Bombón', precio: 6.00,imagen: './images/bebidasCalientes/CafeBombonn.png' },
        { nombre: 'Café Caramel', precio: 6.00,imagen: './images/bebidasCalientes/caramel-caliente.jpg' },
        { nombre: 'Leche con chocolate', precio: 5.50,imagen: './images/bebidasCalientes/leche-chocolate-caliente.jpg' },
        { nombre: 'Mate', precio: 3.00,imagen:'./images/bebidasCalientes/mate-caliente.jpg' },
        { nombre: 'Leche', precio: 5.00,imagen:'./images/bebidasCalientes/leche-caliente.webp' },
    ],
    'limonadas': [
        { nombre: 'Cherry', precio: 5.50,imagen: './images/limonadas/l-limonada-cherry.jpg' },
        { nombre: 'Mango', precio: 5.50,imagen: './images/limonadas/l-limonada-mango.jpg' },
        { nombre: 'Menta', precio: 5.50,imagen: './images/limonadas/l-menta.jpg' },
        { nombre: 'Tradicional', precio: 5.50,imagen: './images/limonadas/l-limonada.jpg' },
    ],
    'shakes': [
        { nombre: 'Capuccino', precio: 9.50, imagen:'./images/shakes/capuccino.png' },
        { nombre: 'Oreo', precio: 9.50, imagen:'./images/shakes/oreo-shake.png'  },
        { nombre: 'Chocolate', precio: 9.50, imagen:'./images/shakes/chocolate-shake.png'  },
        { nombre: 'Pink Drink', precio: 9.50, imagen:'./images/shakes/pink-drink.png'  },
        { nombre: 'Caramel Café', precio: 9.50, imagen:'./images/shakes/caramel-cafe.png'  },
        { nombre: 'Menta', precio: 9.50, imagen:'./images/shakes/menta.png'  },
        { nombre: 'Chocovaso-adicional', precio: 2.00, imagen:'./images/shakes/choco-vaso.jpeg'  },
    ],
    'fresas': [
        { nombre: 'chocolate', precio: 10.00, imagen:'./images/fresas/fresa-con-chocolate.png' },
        { nombre: 'vainilla', precio: 10.00, imagen:'./images/fresas/fresa-con-vainilla.png' },
    ],
    'sodas-heladas': [
        { nombre: 'sky soda', precio: 7.00, imagen:'./images/sodasHeladas/sh-sky.jpg' },
        { nombre: 'Tropical', precio:  7.00, imagen:'./images/sodasHeladas/sh-tropical.jpg'},
        { nombre: 'Paradise', precio: 7.00, imagen:'./images/sodasHeladas/sh-paradise.jpg' },
        { nombre: 'Galaxy', precio: 7.00, imagen:'./images/sodasHeladas/sh-galaxi.jpg' },
    ],
    'helados': [
        { nombre: 'cono', precio: 3.00, imagen:'./images/helados/1cono.png'  },
        { nombre: 'conazo', precio: 5.00, imagen:'./images/helados/conazo.png'  },
    ],
    'bebidas-frias': [
        { nombre: 'Café Americano F', precio: 8.50, imagen:'./images/bebidasFrias/americano-frio.jpg'},
        { nombre: 'Orange Americano ', precio: 9.50, imagen:'./images/bebidasFrias/orange-americano.jpg'},
        { nombre: 'Capuccino F', precio: 9.50, imagen:'./images/bebidasFrias/capuccino-frio.jpg'},
        { nombre: 'Café Mocha F', precio: 9.50, imagen:'./images/bebidasFrias/mocha-frio.jpg'},
        { nombre: 'Rosa y Chocolate', precio: 10.50, imagen:'./images/bebidasFrias/rosa.png'},
        { nombre: 'Matcha Milk', precio: 12.50, imagen:'./images/bebidasFrias/matcha-frio.jpg'},
        { nombre: 'Leche c/ chocolat', precio: 9.50 , imagen:'./images/bebidasFrias/leche-con-chocolate-frio.jpg'}
    ],
    'packs-desayuno': [
        { nombre: 'Duo chocovaso', precio: 29.00, imagen:'./images/bebidasCalientes/duo-chocovaso.jpeg'},
        { nombre: 'Duo Cuchareable ', precio: 28.00, imagen:'./images/bebidasCalientes/duo-cuchareable.jpeg'},
        { nombre: 'Duo fresas con vainilla', precio: 28.00, imagen:'./images/bebidasCalientes/duo-fresas-vainilla.jpeg'},
        { nombre: 'Duo Pink Drink', precio: 28.00, imagen:'./images/bebidasCalientes/duo-pink-drink.jpeg'},
    ],
     'Pasteleria': [
        { nombre: 'Duo chocovaso', precio: 25.50, imagen:'./images/bebidasCalientes/duo-chocovaso.jpeg'},
        { nombre: 'Duo Cuchareable ', precio: 9.00, imagen:'./images/bebidasCalientes/duo-cuchareable.jpeg'},
        { nombre: 'Duo fresas con vainilla', precio: 9.50, imagen:'./images/bebidasCalientes/duo-fresas-vainilla.jpeg'},
        { nombre: 'Duo Pink Drink', precio: 9.50, imagen:'./images/bebidasCalientes/duo-pink-drink.jpeg'},
    ],
};

window.onload = function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 3000);
};
window.onbeforeunload = function(event) {
    event.preventDefault();
    event.returnValue = ''; // Algunos navegadores requieren esta línea para mostrar la alerta.
    return 'Si refrescas la página, perderás los datos de tu pedido.';
};

function cargarProductos(categoria) {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = ''; 

    const productos = productosPorCategoria[categoria];
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: S/${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar</button>
        `;
        productosDiv.appendChild(div);
    });
}

let carrito=[];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    console.log(`Producto agregado: ${nombre} - S/${precio}`);
    actualizarResumenCarrito();
}

let total = 0;
function actualizarResumenCarrito() {
    const listaCarritoDiv = document.getElementById('lista-carrito');
    listaCarritoDiv.innerHTML = ''; 

    carrito.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('item-carrito');
        div.innerHTML = `
            <p>${item.nombre} - S/${item.precio.toFixed(2)}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        listaCarritoDiv.appendChild(div);
    });


    total = carrito.reduce((sum, item) => sum + item.precio, 0);
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total-carrito');
    totalDiv.innerHTML = `<h3>Total: S/${total.toFixed(2)}</h3>`;
    listaCarritoDiv.appendChild(totalDiv);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarResumenCarrito();
}

function finalizarPedido() {

    const nombreUsuario = document.getElementById('nombre').value;

    if (!nombreUsuario.trim()) {
        alert('Por favor, ingrese su nombre.');
        return;
    }
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    let pedido = carrito.map(item => `${item.nombre} - S/${item.precio.toFixed(2)}`).join('\n');


    let mensaje = `
**Nombre:** ${nombreUsuario}\n
**Pedido:**
${pedido}
**Total:** S/${total.toFixed(2)}
`;

    window.open(`https://wa.me/51958960254?text=${encodeURIComponent(mensaje)}`, '_blank');
}

function Delivery() {
    
    window.open(`https://www.pedidosya.com.pe/restaurantes/huancayo/organica-cafe-y-plantas-92e2f535-5f7d-4012-8a8c-471bfee516e7-menu`, '_blank');
}   
    

