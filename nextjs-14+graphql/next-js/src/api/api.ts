export const GRAPHQL_URL = "http://localhost:4001";
export const PAGE_SIZE = 3;

const executeQuery = (query: string, variables?: Object) =>
	fetch(GRAPHQL_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query,
			variables,
		}),
		next: { revalidate: 60 * 5 },
	})
		.then((res) => res.json())
		.then((res) => res.data);

export const API = {
	getTotalPages: () => {
		console.log("API - get Total Pages");
		return executeQuery(`#graphql
            query Products {
                productsCount
            }
        `).then((res) => Math.ceil(res.productsCount / PAGE_SIZE));
	},

	getProducts: (page: number) => {
		console.log("API - get Products page " + page);
		return executeQuery(
			`#graphql
            query Products($page: Int!, $size: Int!) {
                products(page: $page, size: $size) {
                    id
                    name
                    price
                }
            }
        `,
			{ page, size: PAGE_SIZE }
		).then((res) => res.products);
	},

	getProduct: (id: string) => {
		console.log("API - get Product " + id);

		return executeQuery(
			`#graphql
            query Product($productId: ID!) {
                product(id: $productId) {
                    name
                    price
                    ratings {
                        id
                        comment
                        rating
                    }
                }
            }
        `,
			{ productId: id }
		).then((res) => res.product);
	},
};
