const express = require("express");
const app = express();
const AppRoutes = require("./app-routes");

// for parsing
app.use(express.json());

// api
AppRoutes(app);

app.listen(3000, function () {
    console.log("app running on port 3000");
});
