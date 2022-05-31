 // 按鈕
 let BBB = document.querySelector('.BBB');

 let navBtn1 = document.querySelector('.navBtn1');
 let navBtn2 = document.querySelector('.navBtn2');
 let navBtn3 = document.querySelector('.navBtn3');
 let navBtn4 = document.querySelector('.navBtn4');
 // 頁面
 let p11 = document.querySelector('.my');
 let p22 = document.querySelector('.portfolios');
 let p33 = document.querySelector('.llustrator');
 let p44 = document.querySelector('.llustrator2');

 // 
 let ppp = document.querySelectorAll('.ppp');
 // 
 var g = 0;
 addpDisnone();

 p11.classList.remove('pDisnone');

 navBtn1.addEventListener('click', function () {
     g = 1;

     switchPP();
     console.log(g);
 })

 navBtn2.addEventListener('click', function () {
     g = 2;
     switchPP();
     console.log(g);

 })
 navBtn3.addEventListener('click', function () {
     g = 3;
     switchPP();
 })
 navBtn4.addEventListener('click', function () {
     g = 4;
     switchPP();
 })

 console.log(p11);
 console.log(p22);
 console.log(g);
 function switchPP() {
     switch (g) {

         case 1:
             addpDisnone();
             p11.classList.remove('pDisnone');
             break;
         case 2:
             addpDisnone();
             p22.classList.remove('pDisnone');
             break;
         case 3:
             addpDisnone();
             p33.classList.remove('pDisnone');
             break;
         default:
             addpDisnone();
             p44.classList.remove('pDisnone');
             break;
     }


 }


 function addpDisnone() {
     ppp.forEach((a) => {
         a.classList.add('pDisnone');
     });
 }

