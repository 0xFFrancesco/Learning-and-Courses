const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(2222, () => {
    console.log('Server running on port 2222.');
});