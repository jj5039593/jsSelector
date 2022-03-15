"use strict";
//1 찾아서 2 이벤트 3 구현 

// 1아이디 btn1을 2click 해서 .selector-con 배경색을 3노란색으로 바꾼다. 

const btn1=document.querySelector(`#btn1`);

btn1.addEventListener('click',btn1Fn);


function btnFn(){
    console.log('btn1Fn함수 호출')
}
