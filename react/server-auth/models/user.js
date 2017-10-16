const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');
const schema   = mongoose.Schema;

//Define model
const userSchema = new schema({
								  email    : {
									  type      : String,
									  unique    : true,
									  lowerCase : true
								  },
								  password : String
							  });

//On-save hook, encrypt the password
userSchema.pre('save', function( next ){
	
	const user = this;
	
	bcrypt.genSalt(10, ( err, salt ) =>{
		
		if ( err ) {
			return next(err);
		}
		
		bcrypt.hash(user.password, salt, null, ( err, hash ) =>{
			
			if ( err ) {
				return next(err);
			}
			
			user.password = hash;
			next();
			
		});
		
	});
	
});


userSchema.methods.comparePassword = function( candidatePassword, callback ){
	bcrypt.compare(candidatePassword, this.password, function( err, isMatch ){
		if ( err ) {
			return callback(err);
		}
		callback(null, isMatch);
	});
};

//Create the model class
const model = mongoose.model('user', userSchema);

//Export the model
module.exports = model;