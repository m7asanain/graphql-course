export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!,
        reviews: [Review!]
    },
    type Review {
        id: ID!,
        rating: Int!
        content: String!,
        game: Game!,
        author: Author!
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }
    # we have to create a Query type
    type Query {
        # entry points
        reviews: [Review], # it should be 'Review' not 'Reviews'
        review(id: ID!): Review, # for fetch a single review
        games: [Game],
        game(id: ID!): Game, # for fetch a single game
        authors: [Author],
        author(id: ID!): Author, # for fetch a single author
    }
`;
