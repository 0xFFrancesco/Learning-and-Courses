import faker from "faker";

const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;

console.log("cart");

document.getElementById("dev-cart").innerHTML = cartText;
