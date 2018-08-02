// NPM installed modules
var expressModule = require("express");
var bodyParserModule = require("body-parser");
var pathModule = require("path");
// Instant APP
var app = expressModule();
// Application set 
app.set("views", pathModule.join(__dirname, "templates/"));
app.set("view engine", "ejs");
// MiddleWare
// Set Routes
app.get("/", function (requestObject, responseObject) {
    responseObject.status(200); // Return OKay
    responseObject.render("index");
});
// Start app
console.log("\n\nApplication is running on port 8080");
app.listen(8080);
//# sourceMappingURL=app.js.map