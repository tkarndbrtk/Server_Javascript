const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Start server: localhost:3000')
});

var mysql = require('mysql'); //mysql 선언 후 mysql모듈 가져오기
//DB와 연결하기위해 DB정보를 입력하는 코드를 npm에서 퍼왔다.
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


// 라우터를 하나 가져왔음 -> DB pool을 받고 connection을 연결
app.get('/db ', function (req, res) {
  pool.getConnection(function(err, connection) {
    if (err) throw err; // 에러 뽑기
   
    // 연결시 query를 날린다 -> Test table은 마리아DB의 모든걸 가져온다.
    connection.query('select * from Test', function (error, results, fields) {
      res.send(JSON.stringify(results)); // table Data가져오면 화면에 가져온 Data를 보낸다.
      console.log('results:', results); // 가져왔는지 메시지 띄우기.
      
      connection.release(); // 연결시 출력
   
      // Handle error after the release.
      if (error) throw error;
   
      // Don't use the connection here, it has been returned to the pool.
    });
  });
});


