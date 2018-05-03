var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;

    // 1. ��û�� �ڿ��� /hello �̸�
    if (resource == '/hello') {
        // 2. hello.html ������ ���� ��
        fs.readFile('hello.txt', 'utf-8', function (error, data) {
            // 2.1 �����鼭 ������ �߻��ϸ� ������ ������
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html' });
                response.end('500 Internal Server Error : ' + error);
                // 2.2 �ƹ��� ������ ���� ���������� �бⰡ �Ϸ�Ǹ� ������ ������ Ŭ���̾�Ʈ�� ����
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('404 Page Not Found');
    }
});

server.listen(80, function () {
    console.log('Server is running...');
});