var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'studentdb'

});


connection.connect((err) => {
    if (err) throw err 
    console.log('connected successfull!!!');
    a = "create table student_data(id int auto_increment primary key, name varchar(50), age int, mail varchar(35))"
    connection.query(a, (err, res)=>{
      if (err) throw err
      console.log('Table created successfully!!!')
    })
    });

 
