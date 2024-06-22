const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname,"public/css when more than one folder in public"))); this is for setting path 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=> {
    res.render("home.ejs");
});
app.get("/rolldice",(req,res)=> {
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceval});
});

app.get("/ig/:username",(req,res) => {
    // const followers=["kavi","alal","vii","rii"];
    // let {username}=req.params;
    // //console.log(username);
    // res.render("insta.ejs",{username,followers});
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    if(data){
        res.render("insta.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
    //console.log(data);
 


});
app.listen(port,()=>{
    console.log("listening on port 8080");
});