const graphql     = require('graphql');
const UserType    = require('./types/user_type');
const AuthService = require('../services/auth');

const {GraphQLObjectType, GraphQLString} = graphql;

const mutation = new GraphQLObjectType({
	name   : 'Mutation',
	fields : {
		signup : {
			type : UserType,
			args : {
				email    : {type : GraphQLString},
				password : {type : GraphQLString}
			},
			resolve( parentValue, {email, password}, req ){
				return AuthService.signup({ //return a promise
					email,
					password,
					req
				});
			}
		},
		logout : {
			type : UserType,
			args : {},
			resolve( parentValue, args, req ){
				const {user} = req;
				req.logout();
				return user;
			}
		},
		login  : {
			type : UserType,
			args : {
				email    : {type : GraphQLString},
				password : {type : GraphQLString}
			},
			resolve( parentValue, {email, password}, req ){
				return AuthService.login({
					email,
					password,
					req
				});
			}
		}
	}
});

module.exports = mutation;