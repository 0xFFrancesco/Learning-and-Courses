import { products, ratings } from "./_data.js";

const delay = (amount: number) => new Promise((res) => setTimeout(res, amount));

export const resolvers = {
	Query: {
		productsCount: async () => {
			console.log(`API - get Products count`);
			await delay(500);
			return products.length;
		},

		products: async (_, { page, size }: { page: number; size: number }) => {
			console.log(`API - get Products page ${page} size ${size}`);
			await delay(3000);
			return products.slice(page * size, page * size + size);
		},

		product: async (_, { id }: { id: string }) => {
			console.log("API - get Product " + id);
			await delay(1500);
			return products.find((p) => p.id === id);
		},

		ratings: async () => {
			console.log("API - get Ratings");
			await delay(3000);
			return ratings;
		},

		rating: async (_, { id }: { id: string }) => {
			console.log("API - get Rating " + id);
			await delay(1500);
			return ratings.find((r) => r.id === id);
		},
	},

	Product: {
		ratings: async (parent) => {
			console.log("API - Evaluating ratings for products " + parent.id);
			await delay(2000);
			return ratings.filter((r) => parent.rating_ids.includes(r.id));
		},
	},

	Rating: {
		product: async (parent) => {
			console.log("API - Evaluating product for rating " + parent.id);
			await delay(1000);
			return products.find((p) => parent.product_id === p.id);
		},
	},
};
