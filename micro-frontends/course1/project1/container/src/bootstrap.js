import { mount as mountProducts } from "productsApp/ProductsIndex";
import { mount as mountCart } from "cartApp/CartShow";

console.log("container");

mountProducts(document.getElementById("container-products"));
mountCart(document.getElementById("container-cart"));
