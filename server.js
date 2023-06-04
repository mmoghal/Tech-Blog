const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: "Super secret secret", // Secret key for session encryption
  cookie: {}, // Additional cookie options
  resave: false, // Determines whether to save the session data if nothing changed
  saveUninitialized: true, // Determines whether to save uninitialized sessions
  store: new SequelizeStore({
    db: sequelize // Connects the session store to the Sequelize database
  })
};

app.use(session(sess)); // Configures the session middleware

const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
});

app.engine("handlebars", hbs.engine); // Sets Handlebars as the template engine
app.set("view engine", "handlebars"); // Sets the view engine to Handlebars

app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies
app.use(express.static(path.join(__dirname, "public"))); // Serves static files from the "public" directory

app.use(require('./controllers/')); // Imports and uses the controller routes

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false }); // Syncs the Sequelize models with the database
});
