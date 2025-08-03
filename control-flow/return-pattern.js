// early return pattern

// function getValue(val) {
//     if(val < 100) return "A"
//     if(val < 75) return "B"
//     if(val < 50) return "C"
//     if(val < 25) return "D"
//     return "F" 
// }

// console.log(getValue(10)); 


// yaha pe 100 se 10 chota hai so pahle vala code hi excute ho jaenga lekin hame F vala code return karna hai so ham eessa karenge ki value ko return kar denge, ex. f vala code pahle, fir d vala code, fir c vala code, fir b vala code, fir a vala code
// isse hoga kya ki sabse pahle F wala code execute hoga, fir D wala code execute hoga, fir C wala code execute hoga, fir B wala code execute hoga, aur last me A wala code execute hoga


function getValue(val) {
    if(val < 25) return "F"
    if(val < 50) return "D"
    if(val < 75) return "C"
    if(val < 90) return "B"
    return "A" 
}

console.log(getValue(91)); // F