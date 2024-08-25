const userEmail = []
if (userEmail) {
    console.log("Got User Email");
}
else {
    console.log("Don't have a email");
    
}

// falsey Value 

// false , 0 ,-0, BigInt 0n , "", null,undefined, Nan, 

// turthy Value 

// "0" , "false"," ",[],{},function (){} ,

// empty Array 0r empty Object ko Check karna ho to  

if (userEmail.length === 0 ) {
    console.log("Array is Empty");
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Opretor (??): null undefined 

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 20 
val1 = null ?? 20 ?? 40

console.log(val1);


// terniary Opretor

// condition ? true : false 


const iceTeaPrice = 1000

iceTeaPrice >= 800 ? console.log("Less then 800"): console.log("More then 80");

