const express=require("express");
const app=express();

let port=3000;

//console.dir(app);
app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) => {
//    // console.log(req);
//     console.log("request received");
//     let code="<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
//     //res.send("this is a basic response");
//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // });
// });
app.get("/",(req,res) => {
    res.send("you contacted  root path");
});
app.get("/:username/:id",(req,res) => {
    let {username,id}=req.params;
    // console.log(req.params);
    res.send(`welcome to page of @ ${username}`);
});
// app.get("/orange",(req,res) => {
//     res.send("you contacted a orange path");
// });
// app.get("*",(req,res)=> {
//     res.send("this path does not exist");
// });
// app.post("/",(req,res) => {
//     res.send("you sent a post to root");
// });
app.get("/search",(req,res)=> {
    let {q} =req.query;
    res.send(`search results for query: ${q}`);

});