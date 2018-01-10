var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'adminproject'
})
/* GET users listing. */
//查
router.post('/inftselect', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
	pool.query(`SELECT * FROM employee`,function(err,rows){
		if(err) throw err;
		res.send(rows)
	})
});
//增
router.post('/inftinsert',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	
	pool.query(`INSERT INTO employee (name,Education,EntryTime,position,WorkingAge) VALUES ('${req.body.name}','${req.body.Education}','${req.body.EntryTime}','${req.body.position}','${req.body.WorkingAge}')`,function(err,rows){
		if(err) throw err;
		res.send(rows)
	})
})
//删
router.post('/inftdele',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	pool.query(`DELETE FROM employee WHERE id=${req.body.id}`,function(err,rows){
		if(err) throw err;
		res.send(rows)
	})
})
//改
router.post('/updt',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	console.log(req.body.id)
	pool.query(`UPDATE employee SET name='${req.body.name}',Education='${req.body.Education}',EntryTime='${req.body.EntryTime}',position='${req.body.position}' WHERE id=${req.body.id}`,function(err,rows){
		if(err) throw err;
		res.send(rows)
	})
})

module.exports = router;
