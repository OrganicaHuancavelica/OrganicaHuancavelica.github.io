// Productos por categoría
const productosPorCategoria = {
    'bebidas-calientes': [
        { nombre: 'Café Americano', precio: 4.00,imagen: './images/bebidasCalientes/Cafe-Americano.jpeg' },
        { nombre: 'Capuccino', precio: 6.00,imagen: './images/bebidasCalientes/Capuccino.jpeg' },
        { nombre: 'Café Moccha', precio: 7.00,imagen: './images/bebidasCalientes/Moccha-Caliente.jpeg' },
        { nombre: 'Café Bombón', precio: 7.00,imagen: './images/bebidasCalientes/Cafe-Bombon.jpeg' },
        { nombre: 'Café Caramel', precio: 7.00,imagen: './images/bebidasCalientes/Cafe-Caramel.jpeg' },
        { nombre: 'Submarino', precio: 7.50,imagen: './images/bebidasCalientes/Submarino.jpeg' },
        { nombre: 'Chocolate', precio: 5.50,imagen:'./images/bebidasCalientes/Chocolate.jpg' },
        { nombre: 'Mate', precio: 3.00,imagen:'./images/bebidasCalientes/Mate.jpg' },
        { nombre: 'Leche', precio: 5.00,imagen:'./images/bebidasCalientes/Leche.jpeg' },
    ],
    'limonadas': [
        { nombre: 'Cherry', precio: 5.50,imagen: './images/limonadas/l-limonada-cherry.jpg' },
        { nombre: 'Mango', precio: 5.50,imagen: './images/limonadas/l-limonada-mango.jpg' },
        { nombre: 'Menta', precio: 5.50,imagen: './images/limonadas/l-menta.jpg' },
        { nombre: 'Tradicional', precio: 5.50,imagen: './images/limonadas/l-limonada.jpg' },
    ],
    'frappe': [
        { nombre: 'Capuccino', precio: 9.50, imagen:'./images/Frappe/capuccino.png' },
        { nombre: 'Oreo', precio: 9.50, imagen:'./images/Frappe/oreo-shake.png'  },
        { nombre: 'Chocolate', precio: 9.50, imagen:'./images/Frappe/chocolate-shake.png'  },
        { nombre: 'Pink Drink', precio: 9.50, imagen:'./images/Frappe/pink-drink.png'  },
        { nombre: 'Caramel Café', precio: 9.50, imagen:'./images/Frappe/caramel-cafe.png'  },
        { nombre: 'Choco Menta', precio: 9.50, imagen:'./images/Frappe/choco-menta.png'  },
    ],
    'fresas': [
        { nombre: 'Chocolate con Fresa', precio: 10.00, imagen:'./images/fresas/fresa-con-chocolate.png' },
        { nombre: 'Vainilla', precio: 10.00, imagen:'./images/fresas/fresa-con-vainilla.png' },
        { nombre: 'Fudge', precio: 10.00, imagen:'./images/fresas/fresa-con-fudge.png' },
    ],
    'sodas-heladas': [
        { nombre: 'Sky soda', precio: 7.00, imagen:'./images/SodasconHielo/sky.png' },
        { nombre: 'Hawai', precio:  7.00, imagen:'./images/SodasconHielo/hawai.png'},
        { nombre: 'Galaxy', precio: 7.00, imagen:'./images/SodasconHielo/galaxi.png' },
    ],
    'helados': [
        { nombre: 'Cono', precio: 2.50, imagen:'./images/helados/cono.png'  },
        { nombre: 'Conazo', precio: 5.00, imagen:'./images/helados/conazo.png'  },
    ],
    'bebidas-frias': [
        { nombre: 'Americano Frío', precio: 8.50, imagen:'./images/bebidasFrias/americano-frio.jpg'},
        { nombre: 'Orange Americano ', precio: 8.50, imagen:'./images/bebidasFrias/orange-americano.jpg'},
        { nombre: 'Capuccino Frío', precio: 9.50, imagen:'./images/bebidasFrias/capuccino-frio.jpg'},
        { nombre: 'Café Mocha Frío', precio: 9.50, imagen:'./images/bebidasFrias/moccha-frio.jpg'},
        { nombre: 'Rosa y Chocolate', precio: 10.50, imagen:'./images/bebidasFrias/rosa-chocolate.jpeg'},
        { nombre: 'Leche con chocolate', precio: 9.50 , imagen:'./images/bebidasFrias/leche-chocolate.jpg'},
        { nombre: 'Café y Blueberry Milk', precio: 10.50 , imagen:'./images/bebidasFrias/Cafe-BluerryMilk.jpg'},
    ],
    'duo-flores': [
        { nombre: 'Duo chocovaso', precio: 29.00, imagen:'./images/Duoflores/duo-chocovaso.jpeg'},
        { nombre: 'Duo Cuchareable ', precio: 28.00, imagen:'./images/Duoflores/duo-cuchareable.jpeg'},
        { nombre: 'Duo fresas con vainilla', precio: 28.00, imagen:'./images/Duoflores/duo-fresas-vainilla.jpeg'},
        { nombre: 'Duo Pink Drink', precio: 28.00, imagen:'./images/Duoflores/duo-pink-drink.jpeg'},
    ],
    'matcha': [
        { nombre: 'Matcha Milk', precio: 12.50, imagen:'./images/Matcha/Matcha-Milk.jpg'},
        { nombre: 'Blueberry Matcha', precio: 14.50, imagen:'./images/Matcha/Blueberry-Matcha.jpg'},
        { nombre: 'Matcha Pink Milk', precio: 15.50, imagen:'./images/Matcha/Matcha-Pink-Milk.jpg'},
        { nombre: 'Limonada Matcha', precio: 12.50, imagen:'./images/Matcha/Limonada-Matcha.jpg'},
        { nombre: 'Matcha con mango', precio: 14.50, imagen:'./images/Matcha/Matcha-Mango.jpg'},
    ],
    'naranja-miel': [
        { nombre: 'Naranja con Miel Caliente', precio: 11.50, imagen:'./images/NaranjaconMiel/Naranja-Miel.jpg'},
    ],
    'cuchareables': [
        { nombre: 'Cuchareables (consultar sabores)', precio: 9.50, imagen:'./images/Cuchareables/Cuchareables.jpg'},
    ],
    'postres': [
        { nombre: 'Torta de Chocolate', precio: 7.00, imagen:'./images/Postres/Torta-Chocolate.jpg'},
        { nombre: 'Torta de Chocolate con Helado', precio: 8.50, imagen:'./images/Postres/Chocolate-Helado.jpg'},
        { nombre: 'Torta del Dia (porsión)', precio: 7.00, imagen:'./images/Postres/Torta-Porcion.jpg'},
        { nombre: 'Empanada', precio: 5.00, imagen:'./images/Postres/Empanada.jpg'},
        { nombre: 'Sanwich, Jamón y Queso', precio: 7.00, imagen:'./images/Postres/Sandwich-Jamon-Queso.jpg'},
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
    


