// Productos por categoría
const productosPorCategoria = {
    'bebidas-calientes': [
        { nombre: 'Café Americano', precio: 4.50,imagen: './images/bebidasCalientes/Cafe-Americano.jpeg' },
        { nombre: 'Café Expreso', precio: 4.50,imagen: './images/bebidasCalientes/Cafe-Expresso.jpg' },
        { nombre: 'Capuccino', precio: 7.00,imagen: './images/bebidasCalientes/Cafe-Capuccino.jpg' },
        { nombre: 'Matcha Milk', precio: 8.50,imagen: './images/bebidasCalientes/Capuccino.jpeg' },
        { nombre: 'Café Mocca', precio: 7.50,imagen: './images/bebidasCalientes/Moccha-Caliente.jpeg' },
        { nombre: 'Café Bombón', precio: 7.50,imagen: './images/bebidasCalientes/Cafe-Bombon.jpeg' },
        { nombre: 'Café Caramel', precio: 7.50,imagen: './images/bebidasCalientes/Cafe-Caramel.jpeg' },
        { nombre: 'Submarino', precio: 8.00,imagen: './images/bebidasCalientes/Submarino.jpeg' },
        { nombre: 'Chocolatada', precio: 6.00,imagen:'./images/bebidasCalientes/Chocolate.jpg' },
        { nombre: 'Té de flor de Jamaica', precio: 7.00,imagen: './images/bebidasCalientes/Te-Jamaica.jpg' },
        { nombre: 'Té Verde', precio: 6.50,imagen: './images/bebidasCalientes/Te-Verde.jpg' },
        { nombre: 'Mate', precio: 3.50,imagen:'./images/bebidasCalientes/Mate.jpg' },
        { nombre: 'Leche', precio: 5.00,imagen:'./images/bebidasCalientes/Leche.jpeg' },
    ],

    'limonadas': [
        { nombre: 'Limonada de Cherry', precio: 6.50,imagen: './images/limonadas/l-limonada-cherry.jpg' },
        { nombre: 'Limonada de Mango', precio: 6.50,imagen: './images/limonadas/l-limonada-mango.jpg' },
        { nombre: 'Limonada de Menta', precio: 6.50,imagen: './images/limonadas/l-menta.jpg' },
        { nombre: 'Limonada Tradicional', precio: 6.50,imagen: './images/limonadas/l-limonada.jpg' },
        { nombre: 'Limonada de Jamaica', precio: 8.50,imagen: './images/limonadas/l-jamaica.jpg' },
    ],

    'frappe': [
        { nombre: 'Frappe de Capuccino', precio: 9.90, imagen:'./images/Frappe/capuccino.jpg' },
        { nombre: 'Frappe de Oreo', precio: 9.90, imagen:'./images/Frappe/oreo.jpg'  },
        { nombre: 'Frappe de Fresa', precio: 9.90, imagen:'./images/Frappe/fresa.jpg'  },
        { nombre: 'Matcha Frappe', precio: 12.00, imagen:'./images/Frappe/matcha.jpg'  },
        { nombre: 'Frappe de Chocolate', precio: 9.90, imagen:'./images/Frappe/chocolate.jpg'  },
        { nombre: 'Frappe de Caramel Café', precio: 10.50, imagen:'./images/Frappe/caramel-cafe.jpg'  },
        { nombre: 'Frappe de Choco Menta', precio: 9.90, imagen:'./images/Frappe/chocomenta.jpg'  },
    ],

    'fresas': [
        { nombre: 'Fresa con Chocolate', precio: 10.00, imagen:'./images/fresas/chocolate.jpg' },
        { nombre: 'Fresa con Vainilla', precio: 10.00, imagen:'./images/fresas/vainilla.jpg' },
    ],

    'cocktails': [
        { nombre: 'Sky Soda', precio: 8.00, imagen:'./images/SodasconHielo/sky-blue.jpg' },
        { nombre: 'Hawai', precio:  8.00, imagen:'./images/SodasconHielo/hawai.jpg'},
        { nombre: 'Galaxy', precio: 8.00, imagen:'./images/SodasconHielo/galaxi.png' },
        {nombre: 'Agregar alcohol', precio: 3.00, imagen:'./images/SodasconHielo/alcohol.jpg' },
    ],

    'helados': [
        { nombre: 'Cono', precio: 2.50, imagen:'./images/helados/cono.png'  },
        { nombre: 'Copa fresa con helados', precio: 14.00, imagen:'./images/helados/conazo.png'  },
    ],

    'bebidas-frias': [
        { nombre: 'Americano Frío', precio: 7.50, imagen:'./images/bebidasFrias/americano-frio.jpg'},
        { nombre: 'Orange Americano ', precio: 8.50, imagen:'./images/bebidasFrias/orange-americano.jpg'},
        { nombre: 'Capuccino Frío', precio: 8.50, imagen:'./images/bebidasFrias/capuccino-frio.jpg'},
        { nombre: 'Café Mocha Frío', precio: 8.50, imagen:'./images/bebidasFrias/moccha-frio.jpg'},
        { nombre: 'Blueberry Milk', precio: 9.50 , imagen:'./images/bebidasFrias/Cafe-BluerryMilk.jpg'},
        { nombre: 'Mango Latte', precio: 9.50, imagen:'./images/bebidasFrias/mango.jpg'},
        { nombre: 'Fresa Milk', precio: 9.50, imagen:'./images/bebidasFrias/fresa.jpg'},
        {nombre: 'Agregar Leche Deslactosada', precio: 2.00, imagen:'./images/leche/leche.jpg' },
        {nombre: 'Agregar Leche de Almendras', precio: 2.00, imagen:'./images/leche/leche-almendras.jpg' },
    ],

    'regalos': [
        { nombre: 'Duo chocovaso', precio: 29.00, imagen:'./images/Duoflores/duo-chocovaso.jpeg'},
        { nombre: 'Duo Cuchareable ', precio: 28.00, imagen:'./images/Duoflores/duo-cuchareable.jpeg'},
        { nombre: 'Duo fresas con vainilla', precio: 28.00, imagen:'./images/Duoflores/duo-fresas-vainilla.jpeg'},
        { nombre: 'Duo Pink Drink', precio: 28.00, imagen:'./images/Duoflores/duo-pink-drink.jpeg'},
    ],

    'matcha': [
        { nombre: 'Matcha Milk', precio: 10.50, imagen:'./images/Matcha/Matcha-Milk.jpg'},
        { nombre: 'Orange Matcha', precio: 10.50, imagen:'./images/Matcha/orange-matcha.jpg'},
        { nombre: 'Blueberry Matcha', precio: 11.00, imagen:'./images/Matcha/Blueberry-Matcha.jpg'},
        { nombre: 'Mango Matcha', precio: 11.00, imagen:'./images/Matcha/Matcha-Mango.jpg'},
        { nombre: 'Matcha y Fresa', precio: 11.00, imagen:'./images/Matcha/fresa-matcha.jpg'},
        {nombre: 'Agregar Leche Deslactosada', precio: 2.00, imagen:'./images/leche/leche.jpg' },
        {nombre: 'Agregar Leche de Almendras', precio: 2.00, imagen:'./images/leche/leche-almendras.jpg' },
    ],

    'naranja-miel': [
        { nombre: 'Naranja con Miel', precio: 11.50, imagen:'./images/NaranjaconMiel/Naranja-Miel.jpg'},
    ],

    'pasteles': [
        { nombre: 'Torta de Chocolate', precio: 8.50, imagen:'./images/Postres/Chocolate-Helado.jpg'},
        { nombre: 'Carrot Cake', precio: 8.50, imagen:'./images/Postres/Carrot Cake.jpeg'},
        { nombre: 'Red velvet', precio: 8.50, imagen:'./images/Postres/Cheesecake New Yorck.jpeg'},
        { nombre: 'Rollo de Canela', precio: 9.50, imagen:'./images/Postres/Rollo de Canela.jpeg'},
        { nombre: 'Tiramisu', precio: 8.50, imagen:'./images/Postres/Rollo de Canela.jpeg'},
    ],

    'empanada': [
        { nombre: 'Empanada de Pollo', precio: 6.90, imagen:'./images/Empanadas/pollo.jpg'},
        { nombre: 'Empanada de Carne', precio: 6.90, imagen:'./images/Empanadas/carne.jpg'},
    ],

    'jugos-fruta': [
        { nombre: 'Jugo de Fresa', precio: 7.00, imagen:'./images/Jugos/fresa.jpg'},
        { nombre: 'Jugo de Papaya', precio: 7.00, imagen:'./images/Jugos/papaya.jpg'},
        { nombre: 'Jugo de Naranja', precio: 7.00, imagen:'./images/Jugos/naranja.jpg'},
        { nombre: 'Jugo de Mango', precio: 7.00, imagen:'./images/Jugos/mango.jpg'},
        {nombre: 'Agregar Leche', precio: 1.00, imagen:'./images/leche/leche.jpg' },
        {nombre: 'Agregar Leche Deslactosada', precio: 1.00, imagen:'./images/leche/leche.jpg' },
        {nombre: 'Agregar Leche de Almendras', precio: 2.00, imagen:'./images/leche/leche-almendras.jpg' },
    ],

    'waffles': [
        { nombre: 'Waffles con Syrup de Caramelo', precio: 9.00, imagen:'./images/Waffles/caramelo.jpg'},
        { nombre: 'Waffles con Fruta', precio: 11.00, imagen:'./images/Waffles/frutas.jpg'},
        { nombre: 'Waffles con Helado', precio: 11.00, imagen:'./images/Waffles/helado.jpg'},
        { nombre: 'Waffles con Fruta y Helado', precio: 12.00, imagen:'./images/Waffles/fruta-helado.jpg'},
    ],

    'club-sandwich': [
        { nombre: 'Sándwich de Jamón y Queso', precio: 8.90, imagen:'./images/Sandwich/Sandwich-Jamon-Queso.jpg'},
        { nombre: 'Sándwich de Pollo', precio: 8.90, imagen:'./images/Sandwich/pollo.jpg'},
        { nombre: 'Sándwich Hawaiano', precio: 8.90, imagen:'./images/Sandwich/hawaiana.jpg'},
        { nombre: 'Sándwich con Palta', precio: 7.00, imagen:'./images/Sandwich/palta.jpg'},
    ],
    'desayuno': [
        { nombre: 'Waffles con Syrup de Caramelo + cafe o mate', precio: 9.90, imagen:'./images/Waffles/caramelo.jpg'},
        { nombre: 'Waffles con Fruta + cafe o mate', precio: 11.90, imagen:'./images/Waffles/frutas.jpg'},
        { nombre: 'Waffles con Helado + cafe o mate', precio: 11.90, imagen:'./images/Waffles/helado.jpg'},
        { nombre: 'Waffles con Fruta y Helado + cafe o mate', precio: 12.90, imagen:'./images/Waffles/fruta-helado.jpg'},
        { nombre: 'Sándwich de Jamón y Queso + cafe o mate', precio: 8.90, imagen:'./images/Sandwich/Sandwich-Jamon-Queso.jpg'},
        { nombre: 'Sándwich de Pollo + cafe o mate', precio: 8.90, imagen:'./images/Sandwich/pollo.jpg'},
        { nombre: 'Sándwich Hawaiano + cafe o mate', precio: 8.90, imagen:'./images/Sandwich/hawaiana.jpg'},
        { nombre: 'Sándwich con Palta + cafe o mate', precio: 7.90, imagen:'./images/Sandwich/palta.jpg'},
        { nombre: 'Torta de Chocolate/Fresa + cafe o mate', precio: 8.90, imagen:'./images/Postres/Torta-Chocolate.jpg'},
        { nombre: 'Carrot Cake + cafe o mate', precio: 8.90, imagen:'./images/Postres/Carrot Cake.jpeg'},
        { nombre: 'Cheesecake New Yorck + cafe o mate', precio: 8.90, imagen:'./images/Postres/Cheesecake New Yorck.jpeg'},
        { nombre: 'Rollo de Canela + cafe o mate', precio: 6.90, imagen:'./images/Postres/Rollo de Canela.jpeg'},
        { nombre: 'Empanada de Pollo + cafe o mate', precio: 6.90, imagen:'./images/Empanadas/pollo.jpg'},
        { nombre: 'Empanada de Carne + cafe o mate', precio: 6.90, imagen:'./images/Empanadas/carne.jpg'},
    ], 
    'combos': [
        { nombre: 'Empanada + mate', precio: 8.00, imagen:'./images/Empanadas/pollo.jpg'},
        { nombre: 'Empanada + cafe', precio: 9.50, imagen:'./images/Empanadas/carne.jpg'},
        { nombre: 'Empanada + limonada', precio: 10.00, imagen:'./images/Empanadas/pollo.jpg'},
        { nombre: 'Empanada + jugo', precio: 12.00, imagen:'./images/Empanadas/carne.jpg'},
        { nombre: 'Rollo de Canela + mate', precio: 8.00, imagen:'./images/Postres/Rollo de Canela.jpeg'},
        { nombre: 'Rollo de Canela + cafe', precio: 9.50, imagen:'./images/Postres/Rollo de Canela.jpeg'},
        { nombre: 'Rollo de Canela + limonada', precio: 10.00, imagen:'./images/Postres/Rollo de Canela.jpeg'},
        { nombre: 'Rollo de Canela + jugo', precio: 12.00, imagen:'./images/Postres/Rollo de Canela.jpeg'},
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
