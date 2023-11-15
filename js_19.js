let num = [1, 34, 43, 4, 5, 6]
// for(let i =0; i<num.length; i++){
//     console.log(num[i])
// }
// num.forEach((element) =>{
//     console.log(element*element)
// })

// let name = 'shoaib mirza'
// let ar = Array.from(name)
// console.log(ar)

for(let i of num){ //short cut to access array element 
    console.log(i)
}

for(let j in num){
    console.log(num[j])
    // console.log(j)
}