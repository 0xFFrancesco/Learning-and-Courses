import faker from "faker";

const mount = (el) => {
	let products = "";

	for (let i = 0; i < 5; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}

	console.log("products");

	el.innerHTML = products;
	//ReactDOM.render(<App />, el);
};

// Context/Sitation #1
// We are running this file in dev in isolation
// We are using our local index/html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
	const el = document.getElementById("dev-products");

	// Assuming our container doesn't have an element with id 'dev0products'...
	if (el) {
		// We are probably running in isolation
		mount(el);
	}
}

// Context/Situation #2
// We are running this file in dev or prod through the CONTAINER app
// NO GUARANTEE than an elemen with an id of 'dev-products exists
// WE DO NOT WANT to try to immediately render the app

export { mount };
