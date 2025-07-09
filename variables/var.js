// declare and initailization

// var a; // declare karna

// var a = 12;   // declare and initailize (pahli value dena)

// window me add hota hai 
// fuction scoped hoota hai 
// jab hamne isko eek baar declare kiya diya, to jab dusri baar declare karenge to error nahi aayengi (aap same name se firse declare kar sakte ho!)


// ----------------- problem with var ---------------

// window me add hoga
// var a = 30; // agar aap isse view karonge to ye windos ke ander hogaaa

// function scopes 
function demo() {
    // var a = 30; // aab is vari ko iss function ke andar kahi bhi use kar sakte ho!!

    // var tab problem karta hai jab hame usse if else me use kare like----

    if (true) {
        var a = 30; // dusri pro. language me kya hota hai ki aab hame iss var ko shirf if ke ander hi use kar sakte hai lekin JavaScript me ham abhi abhi pure function me use kar sakte hai that's resone ye baad me erro deta hai 
    }
}

// redeclare kar sakte ho 
