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

// let myArray = ["Flash", "Batman", "Superman"]
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for of loop object 

// [],[],[],[]
// {},{},{},{}

const arr = [1,2,3,4,5,6,7]
for (const num of arr) {
    // console.log(num);
}

 
const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(`Each is Char is ${greet}`)
}

// MAP per itretion nahi kia jata hai 

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States Of America")
// map.set("FR", " FRANCE")
// // console.log(map);


// for (const [key,value] of map) {
//     console.log(key,'',value) ;
    
// }


// const myObject = {
//     game1 : "NFS",
//     game2 : "FREE FIRE",
//     game3 : "CS",
// }

// yeh to kaam nahikar raha hai ( For of loop ) 
// for (const [key , value] of myObject) {
//     console.log(Key, " " , value);
    
// }

// OBJECT PER FOR IN LOOP LAGTA HIA 


// const myObject = {
//     js : "javascript",
//     cpp : "c++",
//     rb : "ruby",
//     swift : "swift by Apple"
// }
// for (const key in myObject) {

//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// Function 

const coding = ["js","ruby","c++","python","java"]
// coding.forEach( function (val) {
//     console.log(val);
    
// }
// )

// Arrow Function 

// coding.forEach((item)=>{
//     console.log(item);
    

// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
    
// })

// Array mai se Object ki Value niklna ( Foreach )

const myCoding =[
    {
    languageName : "javascritp",
    languageFileName: "js",
},
    {
    languageName : "java",
    languageFileName: "java",
},
    {
    languageName : "python",
    languageFileName: "py",
},
    {
    languageName : "cpp",
    languageFileName: "c++",
},
]

myCoding.forEach((item)=>{
console.log(item.languageFileName);

})