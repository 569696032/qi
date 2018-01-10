var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
	user:'root',
	password:'',
	database:'adminproject'
})
/* GET home page. */
//注册接口
router.post('/register',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.header("Access-Control-Allow-Methods:POST");
  res.header("Access-Control-Allow-Headers:x-requested-with,content-type");
  console.log(req.body.user)
	pool.query(`SELECT * FROM loginuser WHERE email=${req.body.email}`,function(err,rows){
		if(err){
      console.log(err)
    }else{
      pool.query(`SELECT * FROM loginuser WHERE username=${req.body.user}`,function(err,row){
        if(row.length>0){
          console.log(row)          
          res.send('该用户名已存在')
        }else if(rows.length>0){
          console.log(rows) 
          res.send('该邮箱已被占用')
        }else{
          pool.query(`INSERT INTO loginuser (username,password,email,sex) VALUES ('${req.body.user}','${req.body.pass}','${req.body.email}','${req.body.sex}')`,function(err,rows){
            if (err) {
              console.log(err)
            } else {
              res.send('注册成功')
            }
          })
        }
    })
    }
	})
})

//登录接口
router.post('/loginH',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.header("Access-Control-Allow-Methods:POST");
  res.header("Access-Control-Allow-Headers:x-requested-with,content-type");
  console.log(req.body.user)
  console.log(req.body.pass)
  pool.query(`SElECT username,password FROM loginuser WHERE username=${req.body.user} AND password=${req.body.pass}`,function(err,rows){
    if(err){
      console.log(err)
    }else{
      if(rows.length>0){
        res.send('登录成功')
      }else{
        res.send('登录失败')
      }
    }
  })
})

module.exports = router;
