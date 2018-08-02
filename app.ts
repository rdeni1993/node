// NPM installed modules
const expressModule     = require("express");
const bodyParserModule  = require("body-parser");
const pathModule        = require("path");

// Instant APP
const app = expressModule();

// Application set 
app.set("views", pathModule.join( __dirname, "templates/" ));
app.set("view engine", "ejs");

// MiddleWare
app.use(bodyParserModule());
app.use(expressModule.static(pathModule.join( __dirname, "assets/" )));

// Set Routes
app.get("/", function ( requestObject, responseObject ) {

    responseObject.status(200); // Return OKay
    responseObject.render("index", { submit : false });

});

app.post("/process", function (requestObject, responseObject) {

    var myName    = requestObject.body.name;
    var mySurname = requestObject.body.surname;
    var submit    = requestObject.body.submit;
    var age       = requestObject.body.age;

    responseObject.status(200);
    responseObject.render("index", {

        name: myName,
        surname: mySurname,
        age: age,
        submit: submit

    });

});

// Start app
console.log("\n\nApplication is running on port 8080");
app.listen(8080);