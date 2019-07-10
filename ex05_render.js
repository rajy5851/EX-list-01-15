const express = require('express');
const path = require('path');
// path 함수를 default로 설정해놓는다.
const app = express();
const port = 3000;

// html 렌더링 설정
app.set('views', path.join(__dirname, 'views1'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// ejs 파일을 렌더링 할 수 있다. 이 세 줄의 파일을 통해 렌더링을 할 수 있다.


app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
})

app.get('/html', (req, res) => {
    res.render('test.html');
})

    // resizeBy.renderFile('test.html');
    

app.listen(port, () => {
    console.log('Server listening...' + port);
});