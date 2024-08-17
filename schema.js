export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!
    },
    type Review {
        id: ID!,
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!
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
