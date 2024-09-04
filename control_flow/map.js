const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.map((num)=> num + 10 )
// const newNums = myNum.map((num)=>{ return num + 10 } )


// Chaning 

const newNums = myNum
                .map( ( num ) => num * 5 )
                .map( ( num ) => num + 2 )
                .filter( ( num ) => num >= 30 )


console.log(newNums);