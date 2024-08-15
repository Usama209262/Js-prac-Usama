// This use hota hai current context k liye 

// const user = {
//     username:"usama",
//     price : 20000,
//     laptop : "Dell 12th Gen",
//     welcomeMassage : function(){
//         console.log(`${this.username},welcome to my website`);
//         // console.log(this);
        
//     }
// }
// user.welcomeMassage ()
// user.username = "Subhaan"
// user.welcomeMassage ()

// console.log(this)       

// browser mai jo bhi sab se ziyada global object hai wo window hai 


// const addOne = function () {
//     let username = "Usama Khan"
//     console.log(this.username);

// addOne()

const one = () => {
    let username = "Usama Khan"
    console.log(this);
}
// one()

// ARROW FUNCTION NORMAL ARROW FUNCTION 

// const addTwo = (num1 , num2) => {
// return num1 + num2 
// }
// console.log(addTwo(23,5))

// Implicit return 

// const addTwo = (num1 , num2) => num1 + num2

// yeh technic react mai use hoga 
// const addTwo = (num1 , num2) => (num1 + num2)

// Object ko return karne k liye apko parenthesis

// const addTwo = (num1 , num2) => ({username : "UsamaKhan"})
    
//     console.log(addTwo(23,5))

// IFFE 

(function chai(){
    console.log(`Db Connected`);    
})();

((name) => {
    console.log(`DB Connected Two ${name}`);
})("Usama") 






