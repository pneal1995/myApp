let express = require('express');
let app = express();
let data = require('./data/data.json');

// sets global variable, allows other modules to access this data
app.set('appData', data);

// makes public folder files static
app.use(express.static('public'));
// sets view engine as ejs
app.set('view engine', 'ejs');

// connects route modules to main app.js
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/music'));


// start listening on some port
app.listen(3000, ()=>{
    console.log("listening on port 3000");

})