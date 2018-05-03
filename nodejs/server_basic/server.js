var http = require('http');

// 1. ��û�� url�� ��ü�� ����� ���� url �����
var url = require('url');
// 2. ��û�� url �߿� Query String �� ��ü�� ����� ���� querystring ��� ���
var querystring = require('querystring');

var server = http.createServer(function (request, response) {
    // 3. �ܼ�ȭ�鿡 �α� ���� �κ��� ���
    console.log('--- log start ---');
    // 4. ���������� ��û�� �ּҸ� parsing �Ͽ� ��üȭ �� ���
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    //var result1 = parsedQuery.var1;
    //console.log('���޵� var1�� ���� ' + result1 + '�Դϴ�');
    // 5. ��üȭ�� url �߿� Query String �κи� ���� ��üȭ �� ���
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);
    // 6. �ܼ�ȭ�鿡 �α� ���� �κ��� ���
    console.log('--- log end ---');

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('var1 is=' + parsedQuery.var1 + ', var2 is=' + parsedQuery.var2 + ', var3 is=' + parsedQuery.var3);
});

server.listen(8080, function () {
    console.log('Server is running...');
});