//APP STARTING POINT
const express    = require('express');
const http       = require('http');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const router     = require('./router');
const mongoose   = require('mongoose');
const cors       = require('cors');

const app = express();

//DB SETUP
mongoose.connect('mongodb://localhost:auth/react-auth-exercise');


//APP SETUP
app.use(morgan('combined'));
app.use(cors({origin : 'http://localhost:8080',}));
app.use(bodyParser.json({type : '*/*'}));
router(app);

//SERVER SETUP
const port   = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server running on port: ' + port);

//PATHS
//signup -> verify email not in use -> save user, create (encrypt user data with a saved secret) and give token
//signin -> take the username and password from the request, retrieve the savedHashedPassword, take the salt from the savedHashedPassword, re-hash the provided password with an the saved salt, compare the new create password with the saved one, it they match -> create and provide the token
//auth'd request -> take token, decrypt it with the secret, check if the user_id exists -> give access to protected resources
