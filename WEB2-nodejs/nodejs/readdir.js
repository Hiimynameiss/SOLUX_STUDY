var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(err, filelist) {
    console.log(filelist);
    // 특정 디렉토리에 있는 파일을 배열로 전달
})