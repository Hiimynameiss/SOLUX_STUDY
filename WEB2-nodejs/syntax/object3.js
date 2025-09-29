var o = {
    v1:'v1',
    v2:'v2'
}

// function f1() {
//     console.log(o.v1);
// }

// function f2() {
//     console.log(o.v2);
// }

// f1();
// f2();

var of = {
    f1:function() {
        console.log(o.v1);
    },
    f2:function() {
        console.log(o.v2);
    }
}

of.f1();
of.f2();

var oa = {
    v1:'v1',
    v2:'v2',
    f1:function() {
        console.log(this.v1);   // 동일한 객체 oa에 들어있는 원소를 참조할 떄 this 키워드 사용
    },
    f2:function() {
        console.log(this.v2);
    }
}

oa.f1();
oa.f2();