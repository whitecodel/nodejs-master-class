const express = require("express");
const app = express();

// for parsing
app.use(express.json());

// controllers
const fn_get = (req, res) => {
    console.log(req.query.name);
    res.send("Hello World From GET");
};

app.get("/", fn_get);

app.post("/", function (req, res) {
    console.log(req.body.name);
    return res.send("Hello World From POST");
});

app.put("/:id", function (req, res) {
    console.log(req.params.id);
    return res.send("Hello World From PUT");
});

app.delete("/:id", function (req, res) {
    console.log(req.params.id);
    return res.send("Hello World From DELETE");
});

app.listen(3000, function () {
    console.log("app running on port 3000");
});
