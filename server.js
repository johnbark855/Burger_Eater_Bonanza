<<<<<<< HEAD

const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgersController.js")

const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
=======

const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgersController.js")

const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
>>>>>>> 419a9a5b4e5f88a9bae40eb62805ea70e84d578a
});