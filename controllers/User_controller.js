const mongoose = require("mongoose")
const express = require("express")
const app = express();

app.post("/post", async (req, res) => {
    console.log(req.body);
    const { data } = req.body;
})

