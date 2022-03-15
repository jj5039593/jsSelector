"use strict";

let str1=`web 2022`;

console.log(str1.length)
console.log(str1.indexOf(`w`));//찾는 문자 
console.log(str1.indexOf(''));
console.log(str1.charAt(2));//찾는 인덱스에 해당하는 문자
console.log(str1.toUpperCase());//대문자
console.log(str1.toLowerCase());//소문자

let str2=`a,b,c,d,e`;
console.log(str2.split(','));//기호로 분리해서 배열화 

let phone='010-0000-1111';
console.log(str2.split('-'));//기호로 분리해서 배열화 

let str3='web 2022 Project HTML CSS Javascript';
//배열 arrInfo로 만들어 보세요 str3를 split()이용해서 
//배열화 시키세요 (단,구분자는 공백으로 처리하세요)
console.log(str3.split(''))


let arrPhone=['010','0000','1111'];
console.log(arrPhone.join('-'));//배열을 기호로 연결해서 문자열화 

console.clear();

let str4=' Web 2022 ';

console.log(str4);
console.log(str4.length);
console.log(str4.substr(0,4));
console.log(str4.substr(4,5));
console.log(str4.substring(5,9));
console.log(str4);

//web 2022 콘솔에 출력 길이는 8 
console.log(str4.substring(1,9).length);
console.clear();

let str5='web'
let str6='2022'

console.log(str5);
console.log(str6);
console.log(str5.concat(str6));
console.log(str5);
console.log(str6);

let str56=str5.concat(str6)
console.log(str56);

console.clear();

let str7=' web 2022 ';
console.log(str7);
console.log(str7.length);
console.log(str7.trim());
console.log(str7.length);

let str8=str7.trim();

console.log(str8);
console.log(str8.length);