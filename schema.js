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
        reviews: [Reviews],
        games: [Game],
        Authors: [Author],

    }
`;
