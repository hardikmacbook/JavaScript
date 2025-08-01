a = 10
a++;
console.log(a); // Output: 11


let x = 3;
let y = x++;

console.log(x, y); // Output: 43
// explanation: x pahle 3 tha, y ko assign hua, phir x ko increment kiya gaya
// y abhi bhi 3 hai, x ab 4 hai, kyuki y ko x ki original value mili thi
// y = x++ ka matlab hai y ko x ki current value assign karo, phir x ko increment karo
// y = 3, x = 4

let h = 5;
let k = ++h;

console.log(h, k); // Output: 66
// explanation: h pahle 5 tha, phir h ko increment kiya gaya, ab h 6 hai
// k ko h ki new value assign hui, yani k = 6