function pizzaOven (corteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

function randomPizza (arr) {
    let pizza = arr[Math.floor(Math.random()*arr.length)];
    return pizza;
}

let arrTipoCorteza = ['Estilo Chicago','Lanzada a mano', 'Napolitana', 'Romana'];
let arrTipoSalsa = ['Tradicional', 'Marinara', 'Blanca'];
let arrQuesos = ['Mozzarella', 'Feta', 'Cheddar'];
let arrSalsas = ['Pepperoni', 'Salchicha', 'Champinones', 'Aceitunas', 'Cebollas'];

let pizza1 = pizzaOven(arrTipoCorteza[0], arrTipoSalsa[0], arrQuesos[0], arrSalsas.slice(1,3));
let pizza2 = pizzaOven(arrTipoCorteza[1], arrTipoSalsa[1], arrQuesos.slice(0,2), arrSalsas.slice(2,5));
let pizza3 = pizzaOven(arrTipoCorteza[3], arrTipoSalsa[2], arrQuesos[2], arrSalsas.slice(2,5));
let pizza4 = pizzaOven(arrTipoCorteza[3], arrTipoSalsa[1], arrQuesos, arrSalsas.slice(3,5));
let pizza5 = pizzaOven(randomPizza(arrTipoCorteza),randomPizza(arrTipoSalsa), randomPizza(arrQuesos), randomPizza(arrSalsas))

console.log('Pizza 1: ', pizza1);
console.log('Pizza 2: ', pizza2);
console.log('Pizza 3: ', pizza3);
console.log('Pizza 4: ', pizza4);
console.log('Pizza 5: ', pizza5);


