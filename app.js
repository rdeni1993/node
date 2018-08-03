// NPM installed modules
var expressModule = require("express");
var bodyParserModule = require("body-parser");
var pathModule = require("path");
var fileUpload = require("express-fileupload");
// Instant APP
var app = expressModule();
// Application set 
app.set("views", pathModule.join(__dirname, "templates/"));
app.set("view engine", "ejs");
// MiddleWare
app.use(bodyParserModule.urlencoded({ extended: true }));
app.use(expressModule.static(pathModule.join(__dirname, "assets/")));
app.use(fileUpload());
// Set Routes
app.get("/", function (requestObject, responseObject) {
    responseObject.status(200); // Return OKay
    responseObject.render("index", { submit: false });
});
app.post("/process", function (requestObject, responseObject) {
    requestObject.files.myfile.mv(pathModule.join(__dirname, "uploads/" + requestObject.files.myfile.name), function (err) {
        if (!err) {
            console.log("Files Uploaded");
        }
        else {
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
//# sourceMappingURL=app.js.map