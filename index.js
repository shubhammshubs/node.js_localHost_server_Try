const http = require("http");
const fs = require("fs");
const { json } = require("express");

const server= http.createServer((req, res)=>{


    const data= fs.readFileSync("C:/Users/Shubham/node_Server/userdata.json","utf-8");
       const objData = JSON.parse(data);
    // fs.readFile("C:/Users/Shubham/node_Server/userdata.json",
    // "utf-8",(err,data)=> {
    //    console.log(data);
    //    const objData = JSON.parse(data);
    // });
    // console.log(req.url);
    if(req.url =="/") {
        res.end("Hello from the Home Side");f
    }else if(req.url == "/about") {
        res.end("Hellow form the aboutus side");
    }else if(req.url == "/contact") {
        res.end("Hellow form the contactUs side");
    }else if(req.url == "/userapi") {
        // res.end("Hellow form the userAPI side");
        // fs.readFile("C:/Users/Shubham/node_Server/userdata.json",
        //  "utf-8",(err,data)=> {
        //     console.log(data);
        //     const objData = JSON.parse(data);
            // res.end(data);
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(data);

            // res.end(objData[0].name);
        //  });
    }else{
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> 404 error pages. page doesn't exist </h1>")
    }
});

server.listen(2000, "127.0.0.1",()=> {
    console.log("Connected to server at 2000");
}) 







// const express = require("express");
// const cors = require("cors"); // Import the cors package

// const app = express();

// app.use(cors()); // Enable CORS for all routes

// // ... rest of your code ...


// app.use(express.json);

// app.use(express.urlencoded({
//     extended: true
// }));

// const productData= [];

// app.listen(2000, ()=> {
//     console.log("Connected to server at 80");
// }) 


// // post api 

// app.post("/api/add_product",(req,res)=>{

//     console.log("Result",req.body);

//     const pdata = {
//         "id": productData.length+1,
//         "pname": req.body.pname,
//         "pprice": req.body.pprice,
//         "pdesc": req.body.pdesc
//     };

//     productData.push(pdata);
//     console.log("Final",pdata);

//     res.status(200).send({
//         "status_code": 200,
//         "message": "Product added successfully",
//         "product": pdata
//     });
// })