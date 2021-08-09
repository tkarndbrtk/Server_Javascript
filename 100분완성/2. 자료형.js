const name = 'mike'
const age = 30;

const namea = 'Mike';
const nameb = "Mike";
const namec = `Mike`;

// - infinity - //
const x = 1/0;
console.log(x);

// - boolean - //
console.log( namea== 'Mike');
//true//

// null 과 undefined
let ages;
console.log(ages);
let user = null;
console.log(user);

// - type of 연산자 - //
console.log(typeof 3);
//number//
console.log(typeof name); //ㅇㅣ거 왜이래
//string//
console.log(typeof true);
//boolean//
console.log(typeof "xxx");
//string//
console.log(typeof null);
//object// --> 객체형 
console.log(typeof undefined);
//undefined//

// - ``의 중요성 - //
const myname = "hoyoung";
const message = `My name is ${myname}`;
const message2 = 'My name is ${myname}';
console.log(message);
//My name is hoyoung
console.log(message2);
//My name is ${myname}

// - 문자 + 숫자 - //
const a = "나는";
const b = "입니다";
console.log(a + age +"살" + b);
// 나는30살입니다