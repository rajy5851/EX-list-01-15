const express = require('express');
const app = express();
const port = 1000;
// app이라는 이름으로 초기화를 해준다.
// express 함수를 사용하려면 사용할 함수를 입력해준다. 사용한다.


app.get('/', function(req, res) {
    console.log('/ 요청이 들어옴.');
    res.send('<h1>npm page</h1>');
});

app.get('/about', (req, res) => {
    console.log('/about 요청이 들어옴');
    res.send('<h1>about</h1>');
    res.writeHead(200, {
        "Content-Type": 'text/html'
    })
    res.write("<h2>url.serarch : </h2>");
    res.write("<h2>url.pathname : </h2>");
    res.write("<h2>url.path : </h2>");
    res.end();
});






app.listen(port, function() {
    console.log('server.listen.at ...' + port);
});

// server를 사용하는 기본 구조이다.
// listen을 해준다.

// send, client
// send는 하나만 보낼 수 있다. write는 한 번에 모아서 많은 양을 보낼 수 있다. 
// 하나만 보내주고 end가 된다. send

// http://localhost:1000/query?id=1234,name=hello;
app.get('/query', function(req, res) {

    // respond는 클라이언트에서 쿼리를 보내준다.
    // url 주소를 직접 파싱하는 방법
    // 내부적으로 가지고 있다. express를 가지고 있으면
    // request query에 담을 수 있다.
    // req => request 객체
    var id = req.query.id;
    var name = res.query.name;
    console.log(id, ', ', name);
    console.log(req.query);
    res.send(req.query);
// res.send => response.send로 보내주면 js query로 보내준다.
});

app.listen(port, function() {
    console.log("write ")
});