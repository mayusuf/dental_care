const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json());


// Route to get all posts
app.get("/api/problems", (req,res)=>{
    db.query("SELECT * FROM problems where isActive = ? order by id DESC", [1] ,(err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

// Route for creating the problem
app.post('/api/problem/create', (req,res)=> {

    const problem = req.body.problem;
    const createDate = new Date().toISOString().slice(0, 10);

    db.query("INSERT INTO problems (problem,createDate) VALUES (? , ?)",[problem,createDate], (err,result)=>{
       if(err) {
        console.log(err)
       }else{
        res.send(result);
       } 
    });   
})   

// Route to get one problem
app.get("/api/problem/update/:id", (req,res)=>{

    const id = req.params.id;
     db.query("SELECT * FROM problems WHERE id = ?", id,  (err,result)=>{
        if(err) {
            console.log(err)
        } 
            res.send(result)
        });   
    });

// Route to like a post
app.put('/api/problem/update/:id',(req,res)=>{

    const id = req.params.id;
    const problem = req.body.problem;

    db.query("UPDATE problems SET problem = ? WHERE id = ?",[problem,id], (err,result)=>{
        if(err) {
            console.log(err)
           }else{
            res.send(result);
           } 
        });    
});

// Route to delete a post

app.delete('/api/problem/delete/:id',(req,res)=>{
    const id = req.params.id;
    
    db.query("DELETE FROM problems WHERE id= ?", id, (err,result)=>{
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        } 
    }) 
});


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});