const express        = require('express');
const expressGraphQL = require('express-graphql');
const schema         = require('./schema/schema');

const app = express();


app.use('/graphql', expressGraphQL({
	schema,
	graphiql : true
}));


app.listen(3091, () =>{
	console.log('Listening on port 3091...');
});

