'use strict';

// EJERCICIO 1
function nFactorial(n) {
   // n! = n * n-1! 
   if(n == 0 || n == 1 ) return n;
   return n * nFactorial(n-1)
}

// EJERCICIO 2
// function nFibonacci(n) {                                  // 5
//    //  Fibonacci  POS  1 | 2 | 3 | 4 | 5
//    //  Secuencia       0   1   1   2   3  5
//    if(nFibonacci(n) == 1 || nFibonacci(n) == 0) return n; // - 1
//    return nFibonacci(n - 1) - nFibonacci(n - 2 );          // 1 
// }

function nFibonacci(n) {
	if (n===0 || n===1) return n;
   return nFibonacci(n - 1) + nFibonacci(n - 2)
    //let fibonacci = n === 0 || n === 1 ? n : nFibonacci(n - 1) + nFibonacci(n - 2)
	//return fibonacci
}

// function nFibonacci(n) {
//    if(n === 0 || n === 1) return n
//    let fibo = [0,1]
//    for (let i = 2; i <= n; i++) {
//       fibo.push( fibo[i-1]+ fibo[-2])
//    }
//    return fibo.pop()
// }

// function nFibonacci(num) {
// 	let fibo = [0, 1]
// 	for (let i = 2; i <= num; i++) {
// 		fibo.push(fibo[i - 1] + fibo[i - 2])
// 	}
// 	return fibo[fibo.length - 2]
// }

// EJERCICIO 3
function Queue() {
   this.array = [];
}

Queue.prototype.size = function(){
   return this.array.length;
}
Queue.prototype.enqueue = function(value){
   this.array.push(value);
}
Queue.prototype.dequeue = function(){
   return this.array.shift();
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
