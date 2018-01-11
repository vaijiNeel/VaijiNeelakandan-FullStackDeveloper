// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	app.get("/portfolio", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/portfolio.html"));
	});

	app.get("*", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/index.html"));
	});
}