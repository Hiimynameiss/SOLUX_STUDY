var members = ['egoing', 'k9055', 'hoya'];
console.log(members[1]);
var i = 0;
while(i < members.length) {
    console.log('array loop', members[i]);
    i += 1;
}

var roles = {
    'progrmmer':'egoing',
    'designer':'k9055',
    'manager':'hoya'
};
console.log(roles.designer);
console.log(roles['designer']);   // 배열처럼 대괄호를 사용할 수도 있음(대신 key 값을 문자로 전달해야)

for(var name in roles) {    // => "name"을 출력한다면 roles 객체의 key 반환
    console.log('object => ', name);
}

for(var name in roles) {    // => "roles"을 출력한다면 roles 객체의 key 반환
    console.log('value => ', roles[name]);
}