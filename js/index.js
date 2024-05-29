import { CardComponent } from "../components/CardComponent.js";
import { products } from "../data/products.js";

let readerArea = document.querySelector('#renderArea')

console
products.map((product) => (readerArea.innerHTML += CardComponent(product)));
