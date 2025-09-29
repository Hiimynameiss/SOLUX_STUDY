var a = function() {    // 함수가 값이다!
    console.log('A');
}

function slowfunc(callback) {
    callback();
}

slowfunc(a);