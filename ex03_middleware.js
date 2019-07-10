const express = require('express');
// express 함수를 사용하려면 express를 입력한다.
const app = express();
const port = 3000;



// 미들웨어 1
app.use(function(req, res, next) {
    console.log('사용자 미들웨어 1');
    req.body = {};
    req.body.id = 'hong';
    next();
    // request.body.id가 hong이다.
    // next(); 함수이다.
    // 그 다음 함수가 실행한다.
});

// app.use(function(req, res, next) {

// })

// 미들웨어 2
app.use(function(req, res, next) {
    console.log('사용자 미들웨어 2');
    // res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    // res.write(`<h1>미들웨어가 전송함</h1>`);
    // res.write(`<h1>${req.body.id}</h1>`)
    // res.end();
    req.body2.name = 'gildong';
    next();


    // 사용자가 보내고 또 마무리해준다.
    // console.log 미들웨어가 전송함을 클라이언트에게 보내준다.
    // 클라이언트에게 보내주면 서버가 끊어진다.
    // 실행이 안된다.
    // 홈페이지에 있는 요청에서 미들웨어가 가로채어 서비스를 시작한다.
    // middle ware가 하는 일.
});

app.get('/', (req, res) => {
    // / root에 대한 리퀘스트를 요청해준다.
    console.log('/ 요청 받음.');
    res.send('<h1>Home page</h1><br> <h2>로그인 양식</h2> <br> <h2>회원가입 양식</h2> ')
    console.log(req.body2.id + ', ' + req.body2.name);
    res.console(`<h1>${req.body2.id}, ${req,body2.name}</h1>`);
});

// app.listen(port , () => {
//     console.log("Server Listening... " + port);
// });




