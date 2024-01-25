var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.connect((err)=>{
    if(err) throw err;
    else (console.log('successfull'))
    a = "insert into patna(name, mail, age) values("
})
