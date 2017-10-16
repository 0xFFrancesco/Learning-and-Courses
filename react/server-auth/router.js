const authController  = require('./controllers/auth');
const passportService = require('./services/passport');
const passport        = require('passport');

const requireAuth   = passport.authenticate('jwt', {session : false});
const requireSignin = passport.authenticate('local', {session : false});

module.exports = function( app ){
	
	app.get('/', requireAuth, function( req, res ){
		res.send({hi : 'Protected resource: ABC234'});
	});
	
	app.post('/signup', authController.signup);
	app.post('/signin', requireSignin, authController.signin);
	
};