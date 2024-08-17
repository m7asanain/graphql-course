import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// importing types
import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  // typeDefs --definttions of types
  // resolvers
  typeDefs,
});

const { rul } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port ${port}`);
