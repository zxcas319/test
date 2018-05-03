var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function (request, response) {
    // 1. post�� ���޵� �����͸� ���� ������ ����
    var postdata = '';
    // 2. request��ü�� on( ) �Լ��� 'data' �̺�Ʈ�� ����
    request.on('data', function (data) {
        // 3. data �̺�Ʈ�� �߻��� ������ callback�� ���� postdata ������ ���� ����
        postdata = postdata + data;
    });

    // 4. request��ü�� on( ) �Լ��� 'end' �̺�Ʈ�� ����
    request.on('end', function () {
        // 5. end �̺�Ʈ�� �߻��ϸ�(end�� �ѹ��� �߻��Ѵ�) 3������ �����ص� postdata �� querystring ���� ��üȭ
        var parsedQuery = querystring.parse(postdata);
        // 6. ��üȭ�� �����͸� �α׷� ���
        console.log(parsedQuery);
        // 7. ���� HEADER �� �����͸� ��Ƽ� Ŭ���̾�Ʈ�� ����ó��
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('var1�� �� = ' + parsedQuery.var1);
    });

});

server.listen(8080, function () {
    console.log('Server is running...');
});