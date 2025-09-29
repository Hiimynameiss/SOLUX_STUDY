var M = {
    v: 'v',
    f: function(){
        console.log(this.v);
    }
}

module.exports = M;
// mpart.js에 있는 여러 기능 중 (가정) M이 가리키는 객체를
// 모듈 바깥에서 사용할 수 있도록 export 하겠다