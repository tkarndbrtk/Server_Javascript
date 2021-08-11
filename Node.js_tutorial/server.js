const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Start server: localhost:3000')
});

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});

app.set('views', __dirname + '/views'); // dirname = 현재 디렉토리(view폴더)
app.set('view engine', 'ejs'); // embeded javascript template - html안에서 자바스크립트를 같이 사용할 수 있게 해주는 템플릿
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('s_index.html'); // set을 통해서 위 폴더에 있는걸 가져온다
});

app.get('/about', function (req, res) {
  res.render('about.html');
});



app.get('/db ', function (req, res) {
  pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
   
    // Use the connection
    connection.query('select * from Test', function (error, results, fields) {
      res.send(JSON.stringify(results));
      console.log('results:', results);
      // When done with the connection, release it.`
      connection.release();
   
      // Handle error after the release.
      if (error) throw error;
   
      // Don't use the connection here, it has been returned to the pool.
    });
  });
});


