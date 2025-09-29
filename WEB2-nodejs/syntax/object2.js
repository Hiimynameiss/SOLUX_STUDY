// array, object

function f1() {
    console.log(1+1);
    console.log(1+2);
}

// var i = if(true){console.log(1)}; => Error

// var w = while(true){console.log(1)}; => Error

var f = function() {
    console.log(1+1);
}

console.log(f);
f();

var a = [f];
a[0](); // 배열의 원소로서 존재하는 함수

var o = {
    func:f  // 객체의 원소(property)로서 존재하는 함수
}
o.func();