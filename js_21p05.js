// let arr = [1, 2, 3, 4, 5, 6, 77]
// let a = prompt("enter number ")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 77]
// let a;
// do{
//     a = prompt("enter number ")
//     a = Number.parseInt(a)
//     arr.push(a)
// }while(a!=0)
// console.log(arr)

// let num = [2, 4, 6, 10, 30 ]
// let n = num.filter((x)=>{
//     return x %10 == 0
// })
// console.log(n)

// let num = [2, 4, 6, 10, 30 ]
// let n = num.map((x)=>{
//     return x * x
// })
// console.log(n)

let num = [1, 2, 3 , 4]
let n = num.reduce((x1, x2)=>{
    return x1 * x2
})
console.log(n)
