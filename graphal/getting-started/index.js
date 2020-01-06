'use strict';

const {ApolloServer} = require("apollo-server")
const {getApplicationsByListingId, getApplicationDetailsByApplicationId} = require("./resolvers/applications")
const typeDefs = require("./schemas/typeDefs")
const ApplicationsAPI = require("./datasources/applicationManagementAPI")
const resolvers = require("./resolvers/applications")

const dataSources = () => ({
  ApplicationsAPI: new ApplicationsAPI()
})

const server = new ApolloServer({typeDefs, resolvers, dataSources})

server.listen({port: 4001}).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
