// NPM installed modules
const expressModule     = require("express");
const bodyParserModule  = require("body-parser");
const pathModule = require("path");
const fileUpload = require("express-fileupload");

// Instant APP
const app = expressModule();

// Application set 
app.set("views", pathModule.join( __dirname, "templates/" ));
app.set("view engine", "ejs");

// MiddleWare
app.use(bodyParserModule.urlencoded({extended: true}));
app.use(expressModule.static(pathModule.join(__dirname, "assets/")));
app.use(fileUpload());

// Set Routes
app.get("/", function ( requestObject, responseObject ) {

    responseObject.status(200); // Return OKay
    responseObject.render("index", { submit : false });

});

app.post("/process", function (requestObject, responseObject) {

    requestObject.files.myfile.mv(pathModule.join(__dirname, "uploads/" + requestObject.files.myfile.name), function (err) {

        if (!err) {

            console.log("Files Uploaded");

        } else {

            console.log(err);

        }

        responseObject.render("index", {

            name: requestObject.body.name,
            surname: requestObject.body.surname,
            age: requestObject.body.age,
            submit: requestObject.body.submit

        });

    });

});

// Start app
console.log("\n\nApplication is running on port 8080");
app.listen(8080);