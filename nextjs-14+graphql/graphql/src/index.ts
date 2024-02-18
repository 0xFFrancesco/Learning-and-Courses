import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./types.js";
import { resolvers } from "./resolvers.js";

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4001 },
});

console.log(`GraphQL server ready at: ${url}.`);
