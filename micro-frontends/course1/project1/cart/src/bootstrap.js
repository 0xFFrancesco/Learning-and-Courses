import faker from "faker";

const mount = (el) => {
	const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;

	console.log("cart");

	el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
	const el = document.getElementById("dev-cart");

	if (el) {
		mount(el);
	}
}

export { mount };
