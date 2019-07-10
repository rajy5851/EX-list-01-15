const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// express.static이라는 함수를 호출한다.
// 경로를 입력해준다.
// 경로를 쉽게 설정해주기 위해서 __dirname 현재 디렉토리 안에 '퍼블릭' 디렉토리를 입력해준다.
// path.join(__) 경로를 쉽게 설정해준다. __dirname
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// 주석처리가 되어 있어도 찾아갈 수 있다.

// static middle ware가 있으면 static한 자원들의 경로를 찾을 수 있다.

// 이미지가 있으면 지정해주고 출력해주고 이미지가 없으면 경로가 없다는 것을 말해준다.
// express.static

// http://localhost:3000/images/star1.jpg

// public 폴더 안에 사용자로부터 받은 url이 퍼블릭 폴더 안에 파일이 되는
// 클라이언트에게 보내준다. 경로가 없거나 경로가 잘못 되었으면 home page라는 변수로 출력된다.

app.get('/', (req, res) => {
    res.send('<img src="/public/images/star1.jpg">');
});

app.get('/', (req, res) => {
    res.send('<img src="/length/star1.img">');
});

app.get('/', (req, res) => {
    res.send('<h1>home page</h1>');
});


app.listen(port, () => {
    console.log(`Server listening...` + port);
});