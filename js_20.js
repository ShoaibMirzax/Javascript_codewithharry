// Map, Filter & Reduce high order array methods 
// value index array 

// let arr = [34, 5, 6, 7]
// arr.map((value, index, array)=>{   // amke new array
//     console.log(value, index, array)
// })

// array filter method 
// let as = [ 34, 2, 4, 7, 79]
// let n = as.filter((value)=>{
//     return value<10
// })
// console.log(n)

// Array reuce method 
let as = [ 34, 2, 4, 7, 79]
let n = as.reduce((a1, a2)=>{
    return a1 + a2
})
console.log(n)