const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc,currVal) {
//     console.log(`acc value is ${acc},current value is ${currVal}`);
    
// return acc + currVal
// },0)

// const myTotal = myNum.reduce((acc,currVal ) => acc + currVal, 0)
// console.log(myTotal);


const shoppingcart = [
    {
        itemName : "Js Course",
        price : 1999,
    },
    {
        itemName : "py Course",
        price : 1999,
    },
    {
        itemName : "React Course",
        price : 2999,
    },
    {
        itemName : "Data Scince Course",
        price : 10999,
    },
]

const totalPayCart = shoppingcart.reduce( ( acc, item ) => item.price + acc ,0)

console.log(totalPayCart);


