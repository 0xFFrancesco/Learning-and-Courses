export const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    price: Float!
    ratings: [Rating!]!
  }
  
  type Rating {
    id: ID!
    rating: Int!
    comment: String!
    product: Product!
  }

  type Query {
    productsCount: Int!
    products(page: Int!, size: Int!): [Product!]!
    product(id: ID!): Product
    ratings: [Rating!]!
    rating(id: ID!): Rating
  }
`;
