const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath));

app.listen(process.env.PORT || 3200, function() {
    console.log("Servidor corriendo en el puerto 3200");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
})
