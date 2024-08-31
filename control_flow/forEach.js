// const coding = ["js","c++","ruby","python",]

// const values = coding.forEach( ( item ) => {
// console.log(item);
// return item
// })
// console.log(values);

// Filter 

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const myNewNums = myNums.filter((num)=>( num > 4))

// agar hum {}scope open karte hain to return karana zaroori hai

//  const myNewNums = myNums.filter((num)=>{
// return num > 5
//  })
// console.log(myNewNums);

// forEach per chale ga 
const newNums = []

myNums.forEach((num)=>{
if (num > 6) {
    newNums.push(num)
}

} )
console.log(newNums);



