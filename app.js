const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ message: "initial route" }));

app.listen(3333, () => console.log("listen to 3333"));
