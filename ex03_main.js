// var http = require('http');
// var url = require('url');
// var port = 3000;

// var server = http.createServer(function(request,response) {
//     // 1. 실제 요청한 주소 전체를 콘솔에 출력
//     console.log(request.url);
//     var parseUrl = url.parse(request.url);
//     // 2. parsing 된 url 중에 서버 URL에 해당하는 pathname만 따로 저장한다.
//     var resource = parsedUrl.pathname;
//     console.log('resource path=%s', resource);


//     // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달한다.
//     if(resource == '/login') {
//         response.writeHead(200, {'Content-Type':'text/html', 'charset': 'UTF-8'});
//         response.end('로그인이 되었습니다.');

//     } else if (resource == '/signin') {
//         response.writeHead(200, {'Content-Type':'text/html', 'charset': 'UTF-8'});
//         response.end('회원가입이 완료되었습니다.');
//     } else {
//         response.writeHead(404, {'Content-Type':'text/html', 'charset': 'UTF-8'});
//         response.end('404 page Not Found');
//     }

//     });

//     // 4. 서버 포트를 80번으로 변경한다.
//     server.listen(port, function() {
//         console.log('Server listening...' + port);
//     });

    var http = require('http');
    var url = require('url');
    var port = 3000;

    // var server = http.createServer(function(request, response) {
    //     // 1. 실제 요청한 주소 전체를 콘솔에 출력
    //     console.log(request.url);
    //     var parsedUrl = url.parse(request.url);
    //     // 2. parsing 된 url 중에 서버 URI에 해당하는 pathname만 따로 저장한다.
    //     var resource = parsedUrl.pathname;
    //     console.log('res path=%s', resource);

    var server = http.createServer(function(request,response){
         // 1. 실제 요청한 주소전체를 콘솔에 출력  
        console.log(request.url);
         var parsedUrl = url.parse(request.url);
         // 2. parsing 된 url 중에 서버URI에 해당하는 pathname 만 따로 저장
        var resource = parsedUrl.pathname;
        console.log('resource path=%s',resource);

        // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달
        if(resource == '/signin'){
            response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
            response.end('<h2>지역 : 미국 아메리카 111</h2> <h1>로그인이 완료되었습니다.</h2>');
          }else if(resource == '/login'){
            response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
            response.end('<h1>02-3545-1237</h1> <h1>회원가입이 완료되었습니다.</h1>');
          }else if(resource == '/carrer'){
            response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
            response.end('Hong Gil Dong');
          }else{
            response.writeHead(404, {'Content-Type':'text/html;charset=UTF-8'});
            response.end('<h1>404 Page Not Found</h1> <p> The requested address was not found');
          }

          const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {};
        
       
    });

    // 4. 서버 포트 80번으로 변경.
    server.listen(port, function() {
        console.log('Server listening...' + port);
    });
