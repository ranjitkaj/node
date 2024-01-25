var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'studentdb'
});

connection.connect((err)=>{
    if(err) throw err;
    else (console.log('successfull'))
    a = "insert into student_data values(1, 'Ranjit', 22, 'ranjitkajraitha')"
    connection.query(a, (err, res)=>{
      if (err) throw err
      console.log('data inserted successfully!!!')
    })
})
