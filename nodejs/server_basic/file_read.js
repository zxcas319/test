// 1. fs(���Ͻý���) ��� ���
var fs = require('fs');

// 2. �񵿱����� �����б�. ������ ���� �� ������ �Ķ���Ϳ� �ѱ� callback �Լ��� ȣ��
fs.readFile('home.js', 'utf-8', function (error, data) {
    console.log('01 readAsync: %s', data);
});

// 3. �������� �����б�. ������ ���� �� data ������ ����
var data = fs.readFileSync('home.js', 'utf-8');
console.log('02 readSync: %s', data);