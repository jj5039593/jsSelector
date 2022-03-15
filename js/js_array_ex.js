"use strict";

//배열 선언 방법 
//배열 선언과 동시에 초기화
 const arr1=[10,20,30];

 //10,20,30 -> 0번지, 1번지, 2번지 

 console.log(`배열의 길이-> ${arr1.length}`)

 console.log(arr1[0]);//배열의 0번지 
 console.log(arr1[1])//배열의 1번지
 console.log(arr1[2])//배열의 2번지
 // undefined 배열의 값이 없는 경우 



 //배열 선언
 const arr2=[];
 //10,20,30 -> 0번지, 1번지, 2번지 

   arr2[0]=10;
   arr2[1]=20;
   arr2[2]=30;

   //arr2 3,4 번지에 100 200으로 초기화 

   arr2[3]=100;
   arr2[4]=200;
   console.log(`배열의 길이-> ${arr2.length}`)

   //배열 arr3을 선언하고 0부터 9까지 초기화 해보세요 
   //0번지 0, 1번지는 1 ... 9번지는 9로 초기화 

//    const arr3=[0,1,2,3,4,5,6,7,8,9];
   const arr3=[];
   arr3[0]=0;
   arr3[1]=1;
   arr3[2]=2;
   arr3[3]=3;
   arr3[4]=4;
   arr3[5]=5;
   arr3[6]=6;
   arr3[7]=7;
   arr3[8]=8;
   arr3[9]=9;
//arr[0]=0 ~ arr[9]=9 라고 콘솔에 표시 되도록 
//반복문 

for(let i=0;i<10;i++){
    console.log(`arr3[${i}]=${i}`);//0 ~ 9
   }


   //5개의 .gallery>ul>li*5 배경 이미지 저장
   const arrBg=[];

   arrBg[0]=`url(img/m0.jpg) no-repeat 50%/cover`
   arrBg[1]=`url(img/m1.jpg) no-repeat 50%/cover`
   arrBg[2]=`url(img/m2.jpg) no-repeat 50%/cover`
   arrBg[3]=`url(img/m3.jpg) no-repeat 50%/cover`
   arrBg[4]=`url(img/m4.jpg) no-repeat 50%/cover`

   //배열 arrBg에 img/m0.jpg

   for(let i=0;i<5;i++){
    arrBg[i]=`url(img/m${i}.jpg) no-repeat 50%/cover`
}

console.clear();

const galleryLi=document.querySelectorAll(`.gallery>ul>li`);
// galleryLi[0].style.background=`url(img/m0.jpg) no-repeat 50%/cover`
// galleryLi[1].style.background=`url(img/m1.jpg) no-repeat 50%/cover`
// galleryLi[2].style.background=`url(img/m2.jpg) no-repeat 50%/cover`
// galleryLi[3].style.background=`url(img/m3.jpg) no-repeat 50%/cover`
// galleryLi[4].style.background=`url(img/m4.jpg) no-repeat 50%/cover`

//배열 arrBg2 만들어서  url(img/m0.jpg) no-repeat 50%/cover 저장해보세요

const arrBg2=[];

for(let i2=0;i2<galleryLi.length;i2++){
    arrBg2[i2]=`url(img/m${i2}.jpg) no-repeat 50%/cover`
    galleryLi[i2].style.background=arrBg2[i2];
}

//배열 선언 방법2

const arr22=new Array();

for(let i=0;i<5;i++){
    arr22[i]=`url(img/m${i}.jpg) nor-repeat 50%/cover`;
    console.log(`arr22[${i}]=${arr22[i]}`)
}

//배열 선언 방법 3

const arr32= new Array(1,2,3);

for(let i=0;i<arr32.length;i++){
    console.log(`arr32[${i}]=${arr32[i]}`);
}
