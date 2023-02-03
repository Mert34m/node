
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const path = require("path");
const { ppid } = require("process");


app.use(bodyParser.urlencoded({extended : false}));
app.use("/admin",adminRoutes);
app.use(userRoutes);

app.engine('pug', require('pug').__express)
app.set("views", path.join(__dirname,"views"));
app.set('view engine', "pug");


app.get("/", function(req, res, next){
    res.render("index")
});

app.use(express.static(path.join(__dirname, "./public")));

app.use((req,res,next) =>{
    res.statusCode = 404;
    // res.sendFile(path.join(__dirname, "./views/404.html"));
    res.render("404");
});

app.listen(3000, () => {
    console.log("listening")
});