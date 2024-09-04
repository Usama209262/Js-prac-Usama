const books = [
    {
        title :'Book one', genre : 'Fiction', publish: 1981, 
        edition: 2004,},
    {
        title :'Book Two', genre : 'Non-Fiction', publish: 1992, 
        edition: 2009,},
    {
        title :'Book Three', genre : 'History', publish: 1999, 
        edition: 2011,},
    {
        title :'Book Four', genre : 'Science', publish: 2009, 
        edition: 2024,},

    {
        title :'Book Five', genre : 'Non-Fiction', publish: 1989, 
        edition: 2024,},

    {
        title :'Book Six', genre : 'History', publish: 1994,
         edition: 2020},

    {
        title :'Book Seven', genre : 'Fiction', publish: 1990, 
        edition: 2024,},
    {
        title :'Book Eight', genre : 'Bio', publish: 1980, 
        edition: 2024,},
    {
        title :'Book Nine', genre : 'History', publish: 1995,
         edition: 2024,},
    {
        title :'Book Ten', genre : 'E-commerce', publish: 1991, 
        edition: 2024,},
]

// let userBooks = books.filter( (bk) => bk.genre === 'History')
// userBooks = books.filter((bk)=>{
//     return bk.publish >= 1990 && bk.genre === 'History'})

// console.log(userBooks);


let userBooks = books.filter((bk)=> bk.genre === "Fiction")
userBooks = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);
