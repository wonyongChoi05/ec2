const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello EC2");
})

app.listen(port, () => {
    console.log("express was strating")
})