var http = require('http');
var url = require('url');
var fs = require('fs');

// 1. mime ��� �߰�. �����Ϸ��� ������ Ÿ���� �˾Ƴ��� ���ؼ� �ʿ�
var mime = require('mime');

var server = http.createServer(function (request, response) {

    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;

    // 2. ��û�� �ڿ��� �ּҰ� '/images/' ���ڿ��� �����ϸ�
    if (resource.indexOf('/images/') == 0) {
        // 3. ù������ '/' �� �����ϰ� ��θ� imgPath ������ ����
        var imgPath = resource.substring(1);
        console.log('imgPath=' + imgPath);
        // 4. ���� �Ϸ��� ������ mime type
        var imgMime = mime.getType(imgPath); // lookup -> getType���� �����
        console.log('mime=' + imgMime);

        // 5. �ش� ������ �о� ���µ� �ι�° ������ ���ڵ�(utf-8) �� ����
        fs.readFile(imgPath, function (error, data) {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html' });
                response.end('500 Internal Server ' + error);
            } else {
                // 6. Content-Type �� 4������ ������ mime type �� �Է�
                response.writeHead(200, { 'Content-Type': imgMime });
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