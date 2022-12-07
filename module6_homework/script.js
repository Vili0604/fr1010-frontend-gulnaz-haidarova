'use strict';
 1.
  let arr=[8,3, 0.6, null,2, 0.8,
     67,undefined, ]; 
   let zerocount = 0;
   let numbercount = 0;
   let evencount = 0;
   let oddcount = 0; 
   for (let i=0; i <arr.length; i ++) {
     if (typeof arr[i] === "number" ||
     ! isNaN(arr[i])) {
        numbercount += 1;
         if (arr[i] === 0) {
            zerocount += 1;
         } else if (arr[i] % 2 === 0) {
             evencount += 1;
         } else {
             oddcount += 1;
         }  
   }
  };
  console.log(`В массиве: ${numbercount}цифр, ${zerocount} нулей, ${ evencount} четных, ${oddcount} нечетных!`);
 
  


 2.
  function isPrime (num) {
    if (!Number. isInteger (num) || num < 2
    && num >1000) return "данные неверные";
       let k = Math.sqrt(num);
       for (let i = 2;  i <= k; i++)
            if (num % i === 0) return
    "непростое число"; 
        return "простое число";       
  }
  console.log(isPrime(55)); // здесь нужно ввести число
 

 3. 
   function sum (x) {
     return function(y) {
        return x+y;
     };
   }
   let f =sum (5);
   console.log(f(0), f(1), f(2));
   console.log(sum(1)(2), sum(2)(2), sum(40)(2));


 4. 
   let demo = [5,6,7,8,9,10,11,12,13,14,15];
     setInterval (function() {}, 1000
     );


 5. 
   const pow = (x,n)  => {
    let result=x; for( let i=1; i<n; i++)
    {result*= x;} return result;
   }  
   const result=pow(5,3);
   console.log (result) // 125
