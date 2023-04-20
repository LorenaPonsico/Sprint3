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
console.log(cart)

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    /*
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]); //pusheo a la variable cartList vacia cada producto seleccionado por boton, comparando su id.
        }
    }
    */
    addToCart(id)
}

// Exercise 2
function cleanCart() {
    cart = [] 
    total = 0

    printCart()
}

// Exercise 3
function calculateTotal() { // la funcion es llamada en open_modal()
    // Calculate total price of the cart using the "cartList" array
    total = 0
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].subtotalWithDiscount){
        total += cart[i].subtotalWithDiscount // recorro el array cartList y voy sumando al total todos los precios
    }
    else if (cart[i].price) {
        total += cart[i].price
        
    }
    console.log(total)
    document.getElementById("total_price").innerHTML = total
  
}
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    // for (let i = 0; i < cartList.length; i++) {
    //     const product = cartList[i]
    //     const productExist = cart.includes(product) // recorro el array cartList para saber si ya existe en la lista

    //     if (!productExist) {
    //         product.quantity = 1
    //         cart.push(product) // si no existe pusheo la propiedad quantity en 1
    //     }
    //     if (productExist) {
    //         product.quantity++ // si existe incremento en 1 la propiedad quantity
    //     }
    // }
    // console.log(cart) // veo en consola el array cart
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
            cart[i].subtotalWithDiscount = products.quantity * 10
        }
        else if (products.name === "Instant cupcake mixture" && products.quantity > 9) {
            subtotalWithDiscount.push(products.quantity * (10 / 3))
            cart[i].subtotalWithDiscount = products.quantity * (10 / 3)
        }
        else {
            subtotalWithDiscount.push(products.quantity * products.price) // los productos que no tienen descuento se pushean con el precio del producto base
            cart[i].subtotalWithDiscount = products.quantity * products.price;
        }

    }
    console.log(subtotalWithDiscount)
    
    }




// Exercise 6
function printCart() { // funcion que pinta la shopping cart dinamica
    // Fill the shopping cart modal manipulating the shopping cart dom
   applyPromotionsCart()
   calculateTotal()
    let shoppingCart = []; // array vacio para ir pusheando cada producto seleccionado por el cliente

    for (let i = 0; i < cart.length; i++){ // bucle for que recorre la cart y pushea cada elemento seleccionado
        console.log(cart[i])
        shoppingCart.push(
            `<tr>
             <th scope="row">${cart[i].name}</th>
             <td>${cart[i].price}</td>
             <td>${cart[i].quantity}</td>
             <td>${cart[i].quantity*cart[i].price}</td>  
             <td>$${cart[i].subtotalWithDiscount.toFixed(2) !== undefined ? cart[i].subtotalWithDiscount.toFixed(2) : cart[i].subtotal.toFixed(2)}</td>
             <td><button type="button" onclick="addToCart(${cart[i].id})" class="btn btn-outline-dark">+</button></td>
             <td><button type="button" onclick="removeFromCart(${cart[i].id})" class="btn btn-outline-dark">-</button></td>          
            </tr>`
         )
     }
     document.getElementById("cart_list").innerHTML = shoppingCart.join(" "); // se imprime el array con todos los elementos seleccionados para comprar
     document.getElementById("total_price").innerHTML = total.toFixed(2)
    
}
    

// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

        const productToAdd = products.find(product => product.id === id);
      
        if (!productToAdd) {
          return;
        }
      
        const existingProduct = cart.find(product => product.id === id);
      
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          cart.push({...productToAdd, quantity: 1});
        }   

        printCart()
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    const existingProductIndex = cart.findIndex(product => product.id === id);
  
    if (existingProductIndex >= 0) {
      const existingProduct = cart[existingProductIndex];
      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
      } else {
        cart.splice(existingProductIndex, 1);
      }
    }

        printCart()

}

function open_modal() {
    calculateTotal()
    generateCart()
    applyPromotionsCart()
    console.log("Open Modal");
    // printCart();
}