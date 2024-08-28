// for (let i = 0; i <=10 ; i++) {
//     const element = i;
//     if (element == 7) {
//         // console.log("7 Is The Best Number");
        
//     }
//     // console.log(element);
// }

// for (let i = 1; i <= 10 ; i++) {
//     console.log(`Outer Loop Value is ${i}`);
//     for (let j = 1; j <= 5; j++) {
//        // console.log(`Outer Loop Value is ${j},Inner Loop Is ${i}`);
//        console.log(i + " * " + j + " = " + i*j );
       
//     }
    
// }

// let myArray = ["Flash", "Batman","Superman"]
// console.log(myArray.length);
 
// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);    
// }

// Break & Countinue  //

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//     console.log(`Value of i is ${index}`);
// }

// while loop 

// let index = 0
// while ( index <=5 ) {
//     console.log(`Value of Index is ${index}`);
//     index = index + 2   
// }

let myArray = ["Flash", "Batman", "Superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);