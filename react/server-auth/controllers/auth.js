const User   = require('../models/user');
const jwt    = require('jwt-simple');
const config = require('../config');

function tokenForUser( user ){
	
	return jwt.encode({
						  sub : user.id,
						  iat : new Date().getTime()
					  }, config.secret);
}

exports.signup = function( req, res, next ){
	
	const {email, password} = req.body;
	
	if ( !email || !password ) {
		return res.status(422).send({error : 'provide both email and password'});
	}
	
	//See if user already exists
	User.findOne({email}, ( err, existingUser ) =>{
		
		if ( err ) {
			return next(err);
		}
		
		//If exists return an error
		if ( existingUser ) {
			return res.status(422).send({error : 'email already used'});
		}
		
		//If it doesn't exists, create and save it, then return a success message
		const user = new User({
								  email,
								  password
							  });
		
		user.save(( err ) =>{
			
			if ( err ) {
				return next(err);
			}
			res.json({token : tokenForUser(user)});
			
		});
		
	});
	
};

exports.signin = function( req, res, next ){
	
	//User has already email and password auth'd by the requireSignin in the router
	//we just need to give him a token
	res.json({token : tokenForUser(req.user())});
	
};