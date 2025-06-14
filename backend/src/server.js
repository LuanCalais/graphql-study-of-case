const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema");
const authorResolver = require("./resolvers/authorResolver");
const bookResolver = require("./resolvers/bookResolver");

async function startServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [authorResolver, bookResolver],
  });

  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
