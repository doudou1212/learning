'use strict';

const { graphql, buildSchema } = require('graphql');

const Query = `type Query {
  foo: String
}`;

const Schema = `type Schema {
  query: Query
}`;

const schema = buildSchema(Query, Schema);

const query = `
query myFirstQuery {
foo
}
`;

const resolvers = {
  foo: () => 'bar'
};

graphql(schema, query,resolvers)
  .then((data) => {console.log(data)})
  .catch((err) => {console.log(err)});