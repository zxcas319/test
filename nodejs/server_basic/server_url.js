var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    // 1. ���� ��û�� �ּ���ü�� �ֿܼ� ���  
    console.log(request.url);
    var parsedUrl = url.parse(request.url);
    // 2. parsing �� url �߿� ����URI�� �ش��ϴ� pathname �� ���� ����
    var resource = parsedUrl.pathname;
    console.log('resource path=%s', resource);

    // 3. ���ҽ��� �ش��ϴ� ���ڿ��� �Ʒ��� ������ �ش� �޽����� Ŭ���̾�Ʈ�� ����
    if (resource == '/address') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('����Ư���� ������ ����1�� 111');
    } else if (resource == '/phone') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('02-3545-1237');
    } else if (resource == '/name') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('Hong Gil Dong');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('404 Page Not Found');
    }

});

// 4. ���� ��Ʈ 80������ ����.
server.listen(80, function () {
    console.log('Server is running...');
});