// {
//   human(id: '1000') {
//     name
//     height
// }

// node js graphql tutorial for arguments

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 4000;

const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const HeightUnit = {
    METER: 'METER',
    FOOT: 'FOOT',
};

// eslint-disable-next-line no-unused-vars
const humanType = new GraphQLObjectType({
    name: 'Human',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        height: {
            type: GraphQLFloat,
            args: {
                unit: { type: GraphQLString },
            },
            resolve: (source, args) => {
                return args.unit === HeightUnit.FOOT
                    ? source.height * 3.28084
                    : source.height;
            },
        },
    },
});

const schema = buildSchema(`
  type Query {
    human(id: ID!): Human
  }
`);

const root = {
    human: async ({ id }) => {
        await client.connect();
        const db = client.db(dbName);
        const humans = db.collection('humans');
        return humans.findOne({ _id: id });
    },
};

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: root,
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: executableSchema,
        graphiql: true,
    }),
);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/graphql`);
});
