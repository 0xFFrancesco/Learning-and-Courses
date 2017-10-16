//PASSPORT CONFIG
const passport      = require('passport');
const JwtStrategy   = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const JwtExtract    = require('passport-jwt').ExtractJwt;
const User          = require('../models/user');
const config        = require('../config');

//Create local strategy
const localLogin = new LocalStrategy({usernameField : 'email'}, function( email, password, done ){
	//verify username and password
	User.findOne({email}, ( err, user ) =>{
		
		if ( err ) {
			return done(err);
		}
		
		if ( !user ) {
			return done(null, false);
		}
		
		//check encrypted and stored password with the provided one
		user.comparePassword(password, function( err, isMatch ){
			
			if ( err ) {
				return done(err);
			}
			
			if ( !isMatch ) {
				return done(null, false);
			}
			
			if ( isMatch ) {
				return done(null, User);
			}
			
		});
		
		
	});
});

//Setup options for JWT strategy
const jwtOptions = {
	jwtFromRequest : JwtExtract.fromHeader('authorization'),
	secretOrKey    : config.secret
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function( payload, done ){
	//check if the user in the payload exists
	
	User.findById(payload.sub, function( err, user ){
		
		if ( err ) {
			return done(err, false);
		}
		if ( user ) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	});
});

passport.use(jwtLogin);
passport.use(localLogin);