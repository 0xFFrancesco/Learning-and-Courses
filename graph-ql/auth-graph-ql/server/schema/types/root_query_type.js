const graphql  = require('graphql');
const UserType = require('./user_type');

const {GraphQLObjectType, GraphQLInt} = graphql;

const RootQueryType = new GraphQLObjectType({
	name   : 'RootQueryType',
	fields : {
		user : {
			type : UserType,
			resolve( parentValue, args, req ){
				return req.user;
			}
		}
	}
});

module.exports = RootQueryType;
