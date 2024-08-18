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
    // it handles requests for a single review by its id
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    // it handles requests for a single review by its id
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return db.authors;
    },
    // it handles requests for a single review by its id
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      // find single author
      return db.authors.filter((a) => a.id === parent.author_id);
    },
    game(parent) {
      // find single author
      return db.games.filter((g) => g.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id);
      return db.games;
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push(game);
      return game;
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
