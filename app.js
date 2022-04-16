
let express = require("express");
let app = express();
const mongo = require('mongodb');
const MongoClient =mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8823;
const mongoUrl ="mongodb+srv://mivi:mivi12345@cluster0.l7acv.mongodb.net/mivi?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
const cors = require('cors');
 

app.get('/',(req,res) => {
    res.send("welcome to express")
})



//products
app.get('/products',(req,res) => {
    db.collection('products').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//earphones
app.get('/earphones',(req,res) => {
    db.collection('earphones').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//speakers
app.get('/speakers',(req,res) => {
    db.collection('speakers').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//cables
app.get('/cables',(req,res) => {
    db.collection('cables').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//chargers
app.get('/chargers',(req,res) => {
    db.collection('chargers').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

// place Order
app.post('/placeOrder',(req,res) => {
    db.collection('orders').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})

// View Order
app.get('/viewOrder',(req,res) => {
    let email = req.query.email;
    let query = {};
    if(email){
        query = {"email":email}
    }
    db.collection('orders').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//conection with db
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while  connecting`);
    db =client.db('mivi');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)

    })
})

