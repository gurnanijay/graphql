import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';
import resolvers from './data/resolvers';

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is Amazing');
});

//const root = { hello: () => "Hi, I'm Jay!"};
const root = resolvers
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))
app.listen(PORT, () => console.log(`Running server on localhost:${PORT}/graphql`));
