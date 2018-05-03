var fs = require('fs');

// 1. ���� ������ ���Ͽ� �Էµ� ���ڿ�
var data = "My first data...\r\nhello there!";

// 2. �񵿱� ������� ������ ����. �Լ��� ���ڴ� �տ��� ���� ������� ���ϸ�, �Էµ�����, ���ڵ�, �ݹ��Լ�
fs.writeFile('file01_async.txt', data, 'utf-8', function (e) {
    if (e) {
        // 3. ���ϻ��� �� ������ �߻��ϸ� �������
        console.log(e);
    } else {
        // 4. ���ϻ��� �� ������ ������ �Ϸ� ���ڿ� ���
        console.log('01 WRITE DONE!');
    }
});

// 5. �������� callback �Լ��� ���� ����ó���� �� �� ���� ������ �Լ���ü�� try ������ ����ó��
try {
    // 6. ���� ������� ������ ����. �Լ��� ���ڴ� �տ��� ���� ������� ���ϸ�, �Էµ�����, ���ڵ�
    fs.writeFileSync('file02_sync.txt', data, 'utf-8');
    console.log('02 WRITE DONE!');
} catch (e) {
    console.log(e);
}