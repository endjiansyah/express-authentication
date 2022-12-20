const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions)); //panggil variabel corsOptions

// parse requests of content-type - application/json
app.use(bodyParser.json()); // bodyParser untuk parse data dari form pada express

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application apa ini." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// -------------------
// const app = express();
// app.use(...);

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => { // setara php artisan migrate:fresh
    console.log('Drop and Resync Db'); // drop jika sudah ada tapi beda
    initial(); // setara seeder / menjalankan seeder
});

function initial() { //seperti seeder di laravel
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/customer.routes')(app);