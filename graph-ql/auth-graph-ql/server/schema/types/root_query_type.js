const graphql = require('graphql');

const {GraphQLObjectType, GraphQLInt} = graphql;

const RootQueryType = new GraphQLObjectType({
	name   : 'RootQueryType',
	fields : {
		dummy : {type : GraphQLInt}
	}
});

module.exports = RootQueryType;
