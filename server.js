const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


const server = require("http").createServer(app);



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Send every request to the React app
// app.use(routes);

// Define any API routes before this runs
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	// res.sendFile(path.join(__dirname, "./client/public/index.html"));
});




server.listen(PORT, function () {
	console.log(`******************************************`)
	console.log(`🌎 ==> API server running on port ${PORT}!`);
	console.log(`******************************************`)

});
