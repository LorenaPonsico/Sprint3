// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]); //pusheo a la variable cartList vacia cada producto seleccionado por boton, comparando su id.
        }
    }
    console.log(cartList) // veo en la consola la lista de productos que se van añadiendo en el carrito (array cartList)
    return cartList; // devuelvo la cartList actualizada con cada elemento que se va añadiendo de nuevo
}

// Exercise 2
function cleanCart() {
    cartList = [] // reasigno variable para que se quede vacia de nuevo cuando aprieto boton Clean Cart
    console.log(cartList) //veo en la consola como el carrito (array cartList) esta vacio al apretar el boton
}

// Exercise 3
function calculateTotal() { // la funcion es llamada en open_modal()
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price // recorro el array cartList y voy sumando al total todos los precios
    }
    console.log(total) // veo en la consola el total de todos los poductos seleccionados en cartList
    return total; // devuelvo la suma del total de la cartList
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i]
        const productExist = cart.includes(product) // recorro el array cartList para saber si ya existe en la lista

        if (!productExist) {
            product.quantity = 1
            cart.push(product) // si no existe pusheo la propiedad quantity en 1
        }
        if (productExist) {
            product.quantity++ // si existe incremento en 1 la propiedad quantity
        }
    }
    console.log(cart) // veo en consola el array cart
}



// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let subtotalWithDiscount = [] // array vacio donde con el primer bucle for voy añadiendo los precios totales con el descuento aplicado de cada producto
    let total = 0 // creo una variable para sumar el total del array anterior

    for (let i = 0; i < cart.length; i++) { // bucle for recorre el array cart (carrito compra final) y si cumple con las condiciones de descuento pushea la suma del total con el dto ya aplicado
        const products = cart[i]

        if (products.name === "cooking oil" && products.quantity > 2) {
            subtotalWithDiscount.push(products.quantity * 10)
        }
        else if (products.name === "Instant cupcake mixture" && products.quantity > 9) {
            subtotalWithDiscount.push(products.quantity * (10 / 3))
        }
        else {
            subtotalWithDiscount.push(products.quantity * products.price) // los productos que no tienen descuento se pushean con el precio del producto base
        }

    }
    for (let i = 0; i < subtotalWithDiscount.length; i++) { // recorro el array con todos los precios totales con dto aplicaodos y sin del carrito y los sumo para obtener un total final
        total += subtotalWithDiscount[i]
    }

    console.log(total) //veo en consola el total de los productos del carrito con los dtos aplicados
    return total
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    calculateTotal()
    generateCart()
    applyPromotionsCart()
    console.log("Open Modal");
    printCart();
}