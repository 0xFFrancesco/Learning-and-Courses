const express        = require('express');
const expressGraphQL = require('express-graphql');

const app = express();


app.use('/graphql', expressGraphQL({
	graphiql : true
}));


app.listen(3091, () =>{
	console.log('Listening...');
});