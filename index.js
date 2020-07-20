const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'restful_db'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
 //Say welcome to ABhishek NODE test api.....!
 app.get('/nodeApiMysql/',(req,res) => {
	 res.send('Welcome to ABhishek NODE test api......!')
 });
 
//show all products
app.get('/nodeApiMysql/products',(req, res) => {
  let sql = "SELECT * FROM product";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single product
app.get('/nodeApiMysql/products/:id',(req, res) => {
  let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new product
app.post('/nodeApiMysql/products',(req, res) => {
  let data = {product_name: req.body.product_name, product_price: req.body.product_price};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update product
app.put('/nodeApiMysql/products/:id',(req, res) => {
  let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete product
app.delete('/nodeApiMysql/products/:id',(req, res) => {
  let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});


//Get the input from console
const args = process.argv.slice(2);
console.log(args[0]);

//get the behavoiur of consle.log()
const oranges = ['orange','orange','banana']
const apples = ['apple']

oranges.forEach(fruit=>{
	console.count(fruit)
});
apples.forEach(fruit=>{
	console.count(fruit)
});

const x = 1;
const y = 2;
console.count('the value of x is '+x+' which is encountered for '+x+'times');
console.count('the value of y is '+y+' which is encountered for '+y+'times');
console.count('the value of x is '+x+' which is encountered for '+x+'times');
console.count('the value of x is '+x+' which is encountered for '+x+'times');


// do something, and measure the time it takes
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

//Progress bar
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 1000)

//Read line from console
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})








