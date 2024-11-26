// Productos por categoría
const productosPorCategoria = {
    'bebidas-calientes': [
        { nombre: 'Café Americano', precio: 3.00,imagen: './images/bebidasCalientes/CafeAmericanoo.png' },
        { nombre: 'Capuccino', precio: 4.50,imagen: './images/bebidasCalientes/capucchinoo.png' },
        { nombre: 'Café Moccha', precio: 5.50,imagen: './images/bebidasCalientes/CafeMocchaa.png' },
        { nombre: 'Café Bombón', precio: 5.50,imagen: './images/bebidasCalientes/CafeBombonn.png' },
        { nombre: 'Café Caramel', precio: 5.50,imagen: './images/bebidasCalientes/CafeCaramell.png' },
        { nombre: 'Leche con chocolate', precio: 5.50,imagen: './images/bebidasCalientes/lecheYchocolate.png' },
        { nombre: 'Mate', precio: 3.00,imagen:'./images/bebidasCalientes/matee.png' }
    ],
    'limonadas': [
        { nombre: 'Cherry', precio: 5.00,imagen: './images/limonadas/limonadaCherry.png' },
        { nombre: 'Mango', precio: 5.00,imagen: './images/limonadas/mango.png' },
        { nombre: 'Menta', precio: 5.00,imagen: './images/limonadas/menta.png' },
        { nombre: 'Tradicional', precio: 4.50,imagen: './images/limonadas/tradicional.png' }
    ],
    'shakes': [
        { nombre: 'Capuccino', precio: 9.50, imagen:'./images/shakes/capuccino.png' },
        { nombre: 'Oreo', precio: 9.50, imagen:'./images/shakes/oreo-shake.png'  },
        { nombre: 'Chocolate', precio: 9.50, imagen:'./images/shakes/chocolate-shake.png'  },
        { nombre: 'Pink Drink', precio: 9.50, imagen:'./images/shakes/pink-drink.png'  },
        { nombre: 'Caramel Café', precio: 9.50, imagen:'./images/shakes/caramel-cafe.png'  },
        { nombre: 'Menta', precio: 9.50, imagen:'./images/shakes/menta.png'  }
    ],
    'fresas': [
        { nombre: 'chocolate', precio: 9.50, imagen:'./images/fresas/fresa-con-chocolate.png' },
        { nombre: 'vainilla', precio: 9.50, imagen:'./images/fresas/fresa-con-vainilla.png' },
    ],
    'sodas-heladas': [
        { nombre: 'sky soda', precio: 9.50, imagen:'./images/sodasHeladas/sky-soda.png' },
        { nombre: 'Tropical', precio:  7.00, imagen:'./images/sodasHeladas/tropical.jpeg'},
        { nombre: 'Paradise', precio: 7.00, imagen:'./images/sodasHeladas/paradise.jpeg' },
        { nombre: 'Galaxy', precio: 7.00, imagen:'./images/sodasHeladas/galaxy.png' },
    ],
    'helados': [
        { nombre: 'cono', precio: 2.50, imagen:'./images/helados/1cono.png'  },
        { nombre: 'conazo', precio: 5.00, imagen:'./images/helados/conazo.png'  },
    ],
    'bebidas-frias': [
        { nombre: 'Café Americano F', precio: 7.50, imagen:'./images/bebidasCalientes/CafeAmericanoo.png'},
        { nombre: 'Orange Americano ', precio: 9.00, imagen:'./images/bebidasFrias/Aranangee.png'},
        { nombre: 'Capuccino F', precio: 9.50, imagen:'./images/bebidasCalientes/capucchinoo.png'},
        { nombre: 'Café Mocha F', precio: 9.50, imagen:'./images/bebidasCalientes/CafeMocchaa.png'},
        { nombre: 'Rosa y Chocolate', precio: 10.50, imagen:'./images/bebidasFrias/rosa.png'},
        { nombre: 'Matcha Milk', precio: 12.50, imagen:'./images/bebidasFrias/matchaa.png'},
        { nombre: 'Leche c/ chocolat', precio: 9.50 , imagen:'./images/bebidasFrias/leche.png'}
    ],
    'shake flores': [
        { nombre: 'Café Americano F', precio: 25.50, imagen:'./images/bebidasCalientes/CafeAmericanoo.png'},
        { nombre: 'Orange Americano ', precio: 9.00, imagen:'./images/bebidasFrias/Aranangee.png'},
        { nombre: 'Capuccino F', precio: 9.50, imagen:'./images/bebidasCalientes/capucchinoo.png'},
        { nombre: 'Café Mocha F', precio: 9.50, imagen:'./images/bebidasCalientes/CafeMocchaa.png'},
        { nombre: 'Rosa y Chocolate', precio: 10.50, imagen:'./images/bebidasFrias/rosa.png'},
        { nombre: 'Matcha Milk', precio: 12.50, imagen:'./images/bebidasFrias/matchaa.png'},
        { nombre: 'Leche c/ chocolat', precio: 9.50 , imagen:'./images/bebidasFrias/leche.png'}
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
