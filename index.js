import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";

// importing types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      // apollo with return the 'title' feild
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

const server = new ApolloServer({
  // typeDefs --definttions of types
  // resolvers
  typeDefs,
  resolvers,
});

const { rul } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port "4000"`);
