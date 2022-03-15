"use strict";
//배열 선언 

const arr1=[1,2,3,4,5];
const arr2=new Array();
const arr3=new Array(1,2,3,4,5);

console.clear();

const arr4=[10,20,30,40,50];
for(let i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}
console.log(arr4.length);

arr4.push(60);
arr4.push(70);

console.log(arr4.length);


const galleryLi=document.querySelectorAll(`.gallery>ul>li`);
console.log(galleryLi.length);
for(let i=0;i<galleryLi.length;i++){
    console.log(galleryLi[i]);
}

console.clear();

const arrBg=[];

// arrBg.push(`url(img/m0.jpg) no-repeat 50%/cover`)
// arrBg.push(`url(img/m1.jpg) no-repeat 50%/cover`)
// arrBg.push(`url(img/m2.jpg) no-repeat 50%/cover`)
// arrBg.push(`url(img/m3.jpg) no-repeat 50%/cover`)
// arrBg.push(`url(img/m4.jpg) no-repeat 50%/cover`)

//for

for(let i=0;i<5;i++){
    arrBg.push(`url(img/m${i}.jpg) no-repeat 50%/cover`)

}

// arr5.pop();//배열의 마지막 요소를 제거 

// arr5.shift();는 배열의 맨 앞 요소 제거 
//arr5.unshift(); 배열의 앞 요소에 추가 
//arr5.indexOf(1000); 배열의 요소에 값, 인덱스값 반환 없으면 -1


// arr5.splice(0,2);//제거 0번지부터 갯수 원본 손상 o 
// arr5.slice(0,2);//시작 번지 ~ 끝번지 -1 원본 손상 x 

const arr5=[];
for(let i=0;i<5;i++){
    arr5.push(i*10+10);
}
console.log(arr5);

const a1=[`a`,`b`];
const a2=[`c`,`d`,`e`];
const a3= a1.concat(a2);

console.clear();


const arrImg=[];
for(let i=0;i<5;i++){
    arrImg.push(`img/m${i}.jpg`)
}

//배열도 객체이다. 

console.log(arrImg)

arrImg.forEach(function(element,index,array){
 console.log(`element -> ${element}`)
 console.log(`index -> ${index}`)
 console.log(`index -> ${array}`)
})
arrImg.forEach(function(element,index){
 console.log(`element -> ${element}`)
 console.log(`index -> ${index}`)
})
arrImg.forEach(function(element){
 console.log(`element -> ${element}`)
})

//인덱스가 2인 요소만 콘솔에 출력 
arrImg.forEach(function(el,idx){
    if(idx==2){
        console.log(`el -> ${el}`)
        console.log(`idx -> ${idx}`)
    }
});

console.clear();

const itemsLi=document.querySelectorAll(`.items>ul>li`);
//forEach 이용해서 .items>ul>li를 0번지 부터 4번지까지 콘솔에 출력

itemsLi.forEach(function(el,idx,list){
        console.log(el,idx,list)
});
itemsLi.forEach(function(el,idx){
        console.log(el,idx);
        if(idx==2){
            el.classList.add(`on`);
        }
});
itemsLi.forEach(function(el){
        console.log(el);
});