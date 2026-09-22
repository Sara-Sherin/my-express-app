const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to My DevOps Project");
});

app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}

module.exports = app;