const express = require("express");
const path = require("path");
const hbs = require("hbs")
const html = require("html");
require('./db/conn')
const User = require("./models/user")
const app = express();
const port = process.env.PORT || 3000;

//setting the path
const templatePath = path.join(__dirname, "../views/public_html");
// console.log(__dirname, "../");


//middleware
app.use(express.urlencoded({extended:false}))
app.use("/css", express.static(path.join(__dirname, "../views/CSS"))); //For access CSS files
app.use("/img", express.static(path.join(__dirname, "../views/IMG")));
app.use("/webfonts", express.static(path.join(__dirname, "../views/webfonts")));
app.use("/projects", express.static(path.join(__dirname, "../views/Projects")));

app.set("views", templatePath)
// app.set("view engine", "hbs");
app.set("view engine", "html");


//routing
// app.get(path, callback)
app.get("/", (req, res)=>{
    // res.status(200).render('index.hbs');
    res.sendFile(templatePath + '/index.html')
})

app.post("/contact", async(req,res)=>{
    try {
        const userData = new User(req.body);
        await userData.save();
        // res.status(200).render("submit.html");
        res.sendFile(templatePath + '/submit.html');
    } catch (error) {
        // res.status(500).send(error);
        res.sendFile(templatePath + '/errorpage.html');
    }
});

// create server
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})